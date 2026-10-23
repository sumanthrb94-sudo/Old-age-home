/* Motion primitives in the Mint Creative Engine style (ported from ibelick/motion-primitives, MIT):
   FadeIn, Stagger + staggerItem, TextEffect (word-by-word fade-in-blur, shimmer on *stressed* words),
   SlidingNumber (rolling digits, Indian grouping), BorderTrail and GlowEffect.
   Reveals drop `filter` once finished — a leftover filter would trap position:fixed children. */
import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useInView, type Variants } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1] as const;
export const SPRING = { type: "spring", stiffness: 260, damping: 24 } as const;

type Tag = "div" | "section" | "p" | "h1" | "h2" | "h3" | "span" | "ul" | "footer" | "article";

const blurIn = (y: number | string) => ({
  hidden: { opacity: 0, y, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } },
});

/* ---------- FadeIn: one element fades up out of a blur when scrolled into view ---------- */
export function FadeIn({
  children,
  as = "div",
  className,
  delay = 0,
  y = 28,
  amount = 0.2,
  style,
}: {
  children: ReactNode;
  as?: Tag;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
  style?: CSSProperties;
}) {
  const Comp = motion[as] as typeof motion.div;
  const v = blurIn(y);
  return (
    <Comp
      className={className}
      style={style}
      initial={v.hidden}
      whileInView={v.show}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.75, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
}

/* ---------- Stagger: children using `staggerItem` reveal one after another ---------- */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: EASE }, transitionEnd: { filter: "none" } },
};

export const popItem: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 380, damping: 18 } },
};

export function Stagger({
  children,
  as = "div",
  className,
  stagger = 0.08,
  delay = 0,
  amount = 0.15,
  onMount = false,
}: {
  children: ReactNode;
  as?: Tag;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  onMount?: boolean;
}) {
  const Comp = motion[as] as typeof motion.div;
  const variants: Variants = { hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } };
  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      {...(onMount ? { animate: "show" } : { whileInView: "show", viewport: { once: true, amount } })}
    >
      {children}
    </Comp>
  );
}

/* ---------- TextEffect: words released one by one; wrap words in *stars* to accent + shimmer them ---------- */
export function TextEffect({
  text,
  as = "p",
  className,
  accentClassName = "",
  delay = 0,
  stagger = 0.07,
  onMount = false,
}: {
  text: string;
  as?: Tag;
  className?: string;
  accentClassName?: string;
  delay?: number;
  stagger?: number;
  onMount?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.4 });
  const on = onMount || seen;
  const Comp = motion[as] as typeof motion.div;

  const words: { w: string; accent: boolean }[] = [];
  text.split(/(\*[^*]+\*)/).forEach((seg) => {
    const accent = seg.startsWith("*") && seg.endsWith("*");
    seg.replace(/\*/g, "").split(/\s+/).filter(Boolean).forEach((w) => words.push({ w, accent }));
  });

  const word: Variants = {
    hidden: { opacity: 0, y: "0.35em", filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE }, transitionEnd: { filter: "none" } },
  };
  const end = delay + words.length * stagger;
  let ai = 0;

  return (
    <Comp
      ref={ref as never}
      className={className}
      data-on={on}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      initial="hidden"
      animate={on ? "show" : "hidden"}
    >
      {words.map(({ w, accent }, i) => (
        <span key={i}>
          <motion.span
            variants={word}
            data-t={accent ? w : undefined}
            style={accent ? ({ "--mm-d": `${end + 0.15 * ai++}s` } as CSSProperties) : undefined}
            className={`inline-block ${accent ? `mm-emph ${accentClassName}` : ""}`}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Comp>
  );
}

/* ---------- SlidingNumber: each digit rolls up from 0 to its value when seen ---------- */
export function SlidingNumber({ value, prefix = "", className = "" }: { value: number; prefix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const on = useInView(ref, { once: true, amount: 0.6 });
  const str = value.toLocaleString("en-IN");
  let di = 0;
  return (
    <span ref={ref} className={`inline-flex ${className}`}>
      <span className="sr-only">{prefix + str}</span>
      {prefix && <span aria-hidden="true" className="mm-num-line">{prefix}</span>}
      {[...str].map((ch, i) =>
        /\d/.test(ch) ? (
          <span key={i} aria-hidden="true" className="mm-digit">
            <span className="invisible">{ch}</span>
            <motion.span
              className="mm-digit-stack"
              initial={{ y: "0%" }}
              animate={{ y: on ? `${-Number(ch) * 10}%` : "0%" }}
              transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.1 + di++ * 0.09 }}
            >
              {Array.from({ length: 10 }, (_, n) => (
                <span key={n}>{n}</span>
              ))}
            </motion.span>
          </span>
        ) : (
          <span key={i} aria-hidden="true" className="mm-num-line">
            {ch}
          </span>
        )
      )}
    </span>
  );
}

/* "₹25,000" -> <SlidingNumber value={25000} prefix="₹" />, anything else is shown as-is */
export function Price({ text, className }: { text: string; className?: string }) {
  const m = text.match(/^(\D*)([\d,]+)$/);
  if (!m) return <span className={className}>{text}</span>;
  return <SlidingNumber value={Number(m[2].replace(/,/g, ""))} prefix={m[1]} className={className} />;
}

/* ---------- BorderTrail: a soft light that travels around a card's border ---------- */
export function BorderTrail({
  color = "#d97732",
  radius = 24,
  width = 2,
  inset = 0,
  size = 110,
  duration = 7,
}: {
  color?: string;
  radius?: number;
  width?: number;
  inset?: number;
  size?: number;
  duration?: number;
}) {
  const style = {
    "--mm-tc": color,
    "--mm-tr": `${radius}px`,
    "--mm-tw": `${width}px`,
    "--mm-ts": `${size}px`,
    "--mm-td": `${duration}s`,
    inset: -inset,
  } as CSSProperties;
  return (
    <span aria-hidden="true" className="mm-trail" style={style}>
      <i />
    </span>
  );
}

/* ---------- GlowEffect: a slowly rotating colour halo behind a call to action ---------- */
export function GlowEffect({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`mm-glow ${className}`} />;
}
