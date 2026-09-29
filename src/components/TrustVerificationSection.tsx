import { useState } from "react";
import { ShieldCheck, FileCheck, Award, Building2, User, MapPin, X, ExternalLink } from "lucide-react";
import { LEGAL_DETAILS, HOME_DETAILS, CertificateItem } from "../data/homeData";

export function TrustVerificationSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="verification" className="bg-[#f7efe3] py-16 sm:py-20 border-t border-[#eadfd2]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow flex items-center gap-2 text-[#176f70]">
            <ShieldCheck className="h-4 w-4 text-[#176f70]" />
            Official Government Registrations & Tax Compliance
          </p>
          <h2 className="mt-2 font-editorial text-3xl sm:text-4xl text-[#27221f]">
            Verified, legally registered, and <span className="text-[#762f35]">100% compliant.</span>
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#766a61]">
            Entrusting your loved ones requires absolute peace of mind. Siva Prakash Homecare Service & Old Age Home
            operates with all mandatory government registrations, GST, and Labour Department certifications.
          </p>
        </div>

        {/* 4 Official Credential Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Society Registration */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#e4d5c3] bg-white p-5 shadow-xs transition-all hover:shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#176f70]/10 px-3 py-1 text-[11px] font-bold text-[#176f70]">
                  Societies Act 2001
                </span>
                <Award className="h-5 w-5 text-[#176f70]" />
              </div>
              <h3 className="mt-4 font-editorial text-lg text-[#27221f]">Telangana Society Reg.</h3>
              <p className="mt-1 text-xs text-[#766a61]">Registrar of Societies, Ranga Reddy</p>
              <div className="mt-4 rounded-xl bg-[#fbf6ed] p-3 border border-[#eadfd2]">
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#8a7c70]">Registration No.</p>
                <p className="mt-0.5 font-mono text-sm font-bold text-[#762f35]">{LEGAL_DETAILS.societyRegNo}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedCert(LEGAL_DETAILS.certificates[0])}
              className="mt-4 flex items-center justify-center gap-1.5 rounded-full border border-[#d9c6b1] py-2 text-xs font-semibold text-[#762f35] hover:bg-[#762f35] hover:text-white transition-colors"
            >
              <FileCheck className="h-3.5 w-3.5" /> View Certificate
            </button>
          </div>

          {/* Card 2: GST Registration */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#e4d5c3] bg-white p-5 shadow-xs transition-all hover:shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#d97732]/10 px-3 py-1 text-[11px] font-bold text-[#b35919]">
                  Govt. of India GST
                </span>
                <Building2 className="h-5 w-5 text-[#d97732]" />
              </div>
              <h3 className="mt-4 font-editorial text-lg text-[#27221f]">GST Registration</h3>
              <p className="mt-1 text-xs text-[#766a61]">Regular Taxpayer · Madhapur-IV</p>
              <div className="mt-4 rounded-xl bg-[#fbf6ed] p-3 border border-[#eadfd2]">
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#8a7c70]">GSTIN</p>
                <p className="mt-0.5 font-mono text-sm font-bold text-[#762f35]">{LEGAL_DETAILS.gstin}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedCert(LEGAL_DETAILS.certificates[1])}
              className="mt-4 flex items-center justify-center gap-1.5 rounded-full border border-[#d9c6b1] py-2 text-xs font-semibold text-[#762f35] hover:bg-[#762f35] hover:text-white transition-colors"
            >
              <FileCheck className="h-3.5 w-3.5" /> View GST Form
            </button>
          </div>

          {/* Card 3: PAN Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#e4d5c3] bg-white p-5 shadow-xs transition-all hover:shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#762f35]/10 px-3 py-1 text-[11px] font-bold text-[#762f35]">
                  Income Tax Dept
                </span>
                <ShieldCheck className="h-5 w-5 text-[#762f35]" />
              </div>
              <h3 className="mt-4 font-editorial text-lg text-[#27221f]">Income Tax PAN</h3>
              <p className="mt-1 text-xs text-[#766a61]">Government of India</p>
              <div className="mt-4 rounded-xl bg-[#fbf6ed] p-3 border border-[#eadfd2]">
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#8a7c70]">PAN Number</p>
                <p className="mt-0.5 font-mono text-sm font-bold text-[#762f35]">{LEGAL_DETAILS.pan}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedCert(LEGAL_DETAILS.certificates[2])}
              className="mt-4 flex items-center justify-center gap-1.5 rounded-full border border-[#d9c6b1] py-2 text-xs font-semibold text-[#762f35] hover:bg-[#762f35] hover:text-white transition-colors"
            >
              <FileCheck className="h-3.5 w-3.5" /> View PAN Card
            </button>
          </div>

          {/* Card 4: Labour Department */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#e4d5c3] bg-white p-5 shadow-xs transition-all hover:shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#176f70]/10 px-3 py-1 text-[11px] font-bold text-[#176f70]">
                  Labour Dept, TG
                </span>
                <Award className="h-5 w-5 text-[#176f70]" />
              </div>
              <h3 className="mt-4 font-editorial text-lg text-[#27221f]">Shops & Est. License</h3>
              <p className="mt-1 text-xs text-[#766a61]">Form-II · Balanagar Jurisdiction</p>
              <div className="mt-4 rounded-xl bg-[#fbf6ed] p-3 border border-[#eadfd2]">
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#8a7c70]">License Reg No.</p>
                <p className="mt-0.5 font-mono text-[11px] font-bold text-[#762f35] truncate" title={LEGAL_DETAILS.labourRegNo}>
                  {LEGAL_DETAILS.labourRegNo}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedCert(LEGAL_DETAILS.certificates[3])}
              className="mt-4 flex items-center justify-center gap-1.5 rounded-full border border-[#d9c6b1] py-2 text-xs font-semibold text-[#762f35] hover:bg-[#762f35] hover:text-white transition-colors"
            >
              <FileCheck className="h-3.5 w-3.5" /> View Form-II
            </button>
          </div>
        </div>

        {/* Legal Entity & Address Summary Bar */}
        <div className="mt-6 rounded-2xl bg-white p-5 border border-[#e4d5c3] shadow-xs text-xs text-[#615650] grid gap-4 md:grid-cols-3">
          <div className="flex items-start gap-2.5">
            <Building2 className="h-4 w-4 mt-0.5 shrink-0 text-[#762f35]" />
            <div>
              <span className="font-bold text-[#27221f] block">Registered Business Entity</span>
              <span>{LEGAL_DETAILS.registeredName}</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <User className="h-4 w-4 mt-0.5 shrink-0 text-[#762f35]" />
            <div>
              <span className="font-bold text-[#27221f] block">Proprietor / Management</span>
              <span>{LEGAL_DETAILS.proprietor}</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#762f35]" />
            <div>
              <span className="font-bold text-[#27221f] block">Registered Office</span>
              <span>{LEGAL_DETAILS.registeredOffice}</span>
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative max-h-[90vh] max-w-xl w-full overflow-hidden rounded-3xl bg-white p-4 sm:p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between border-b border-stone-200 pb-3">
                <div>
                  <h3 className="font-editorial text-lg text-[#27221f]">{selectedCert.title}</h3>
                  <p className="text-xs text-[#766a61]">{selectedCert.authority} · {selectedCert.regNumber}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="rounded-full p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-900"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="max-h-[70vh] overflow-y-auto rounded-xl border border-stone-200 bg-stone-50 p-2">
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  className="w-full h-auto object-contain rounded-lg shadow-xs"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-[#766a61]">
                <span>Official government-issued document</span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="rounded-full bg-[#762f35] px-4 py-2 text-xs font-bold text-white hover:bg-[#5e242a]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
