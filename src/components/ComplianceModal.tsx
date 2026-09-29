import { useState } from "react";
import { ShieldCheck, FileCheck, Award, Building2, User, MapPin, X } from "lucide-react";
import { LEGAL_DETAILS, CertificateItem } from "../data/homeData";

interface ComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComplianceModal({ isOpen, onClose }: ComplianceModalProps) {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] max-w-4xl w-full overflow-hidden rounded-3xl bg-[#fbf6ed] shadow-2xl border border-[#eadfd2] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#eadfd2] bg-white px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#176f70]/10 text-[#176f70]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-editorial text-2xl text-[#27221f]">Government Registrations & Tax Compliance</h2>
              <p className="text-xs text-[#766a61]">{LEGAL_DETAILS.registeredName} · 100% Verified Entity</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Quick Credential Cards Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Society Reg */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#e4d5c3] bg-white p-4 shadow-2xs">
              <div>
                <span className="rounded-full bg-[#176f70]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#176f70]">
                  Societies Act 2001
                </span>
                <h3 className="mt-2.5 font-editorial text-base text-[#27221f]">Telangana Society Reg.</h3>
                <p className="text-[11px] text-[#766a61]">Registrar of Societies, Ranga Reddy</p>
                <div className="mt-3 rounded-xl bg-[#fbf6ed] p-2.5 border border-[#eadfd2]">
                  <p className="text-[9px] uppercase font-bold tracking-wider text-[#8a7c70]">Registration No.</p>
                  <p className="font-mono text-xs font-bold text-[#762f35]">{LEGAL_DETAILS.societyRegNo}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(LEGAL_DETAILS.certificates[0])}
                className="mt-3 flex items-center justify-center gap-1.5 rounded-full border border-[#d9c6b1] py-1.5 text-xs font-semibold text-[#762f35] hover:bg-[#762f35] hover:text-white transition-colors"
              >
                <FileCheck className="h-3.5 w-3.5" /> View Certificate
              </button>
            </div>

            {/* GST */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#e4d5c3] bg-white p-4 shadow-2xs">
              <div>
                <span className="rounded-full bg-[#d97732]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#b35919]">
                  Govt. of India GST
                </span>
                <h3 className="mt-2.5 font-editorial text-base text-[#27221f]">GST Registration</h3>
                <p className="text-[11px] text-[#766a61]">Regular Taxpayer · Madhapur-IV</p>
                <div className="mt-3 rounded-xl bg-[#fbf6ed] p-2.5 border border-[#eadfd2]">
                  <p className="text-[9px] uppercase font-bold tracking-wider text-[#8a7c70]">GSTIN</p>
                  <p className="font-mono text-xs font-bold text-[#762f35]">{LEGAL_DETAILS.gstin}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(LEGAL_DETAILS.certificates[1])}
                className="mt-3 flex items-center justify-center gap-1.5 rounded-full border border-[#d9c6b1] py-1.5 text-xs font-semibold text-[#762f35] hover:bg-[#762f35] hover:text-white transition-colors"
              >
                <FileCheck className="h-3.5 w-3.5" /> View Form GST
              </button>
            </div>

            {/* PAN */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#e4d5c3] bg-white p-4 shadow-2xs">
              <div>
                <span className="rounded-full bg-[#762f35]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#762f35]">
                  Income Tax Dept
                </span>
                <h3 className="mt-2.5 font-editorial text-base text-[#27221f]">Income Tax PAN</h3>
                <p className="text-[11px] text-[#766a61]">Government of India</p>
                <div className="mt-3 rounded-xl bg-[#fbf6ed] p-2.5 border border-[#eadfd2]">
                  <p className="text-[9px] uppercase font-bold tracking-wider text-[#8a7c70]">PAN Number</p>
                  <p className="font-mono text-xs font-bold text-[#762f35]">{LEGAL_DETAILS.pan}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(LEGAL_DETAILS.certificates[2])}
                className="mt-3 flex items-center justify-center gap-1.5 rounded-full border border-[#d9c6b1] py-1.5 text-xs font-semibold text-[#762f35] hover:bg-[#762f35] hover:text-white transition-colors"
              >
                <FileCheck className="h-3.5 w-3.5" /> View PAN Card
              </button>
            </div>

            {/* Labour */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#e4d5c3] bg-white p-4 shadow-2xs">
              <div>
                <span className="rounded-full bg-[#176f70]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#176f70]">
                  Labour Dept, TG
                </span>
                <h3 className="mt-2.5 font-editorial text-base text-[#27221f]">Labour License</h3>
                <p className="text-[11px] text-[#766a61]">Shops & Est. · Balanagar</p>
                <div className="mt-3 rounded-xl bg-[#fbf6ed] p-2.5 border border-[#eadfd2]">
                  <p className="text-[9px] uppercase font-bold tracking-wider text-[#8a7c70]">License Reg No.</p>
                  <p className="font-mono text-[10px] font-bold text-[#762f35] truncate" title={LEGAL_DETAILS.labourRegNo}>
                    {LEGAL_DETAILS.labourRegNo}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(LEGAL_DETAILS.certificates[3])}
                className="mt-3 flex items-center justify-center gap-1.5 rounded-full border border-[#d9c6b1] py-1.5 text-xs font-semibold text-[#762f35] hover:bg-[#762f35] hover:text-white transition-colors"
              >
                <FileCheck className="h-3.5 w-3.5" /> View Form-II
              </button>
            </div>
          </div>

          {/* Legal Summary Details */}
          <div className="rounded-2xl bg-white p-5 border border-[#e4d5c3] shadow-2xs text-xs text-[#615650] grid gap-4 md:grid-cols-3">
            <div className="flex items-start gap-2.5">
              <Building2 className="h-4 w-4 mt-0.5 shrink-0 text-[#762f35]" />
              <div>
                <span className="font-bold text-[#27221f] block">Registered Legal Entity</span>
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
        </div>

        {/* Modal Footer */}
        <div className="border-t border-[#eadfd2] bg-white px-6 py-4 flex items-center justify-between text-xs text-[#766a61]">
          <span>All documents are verified government records.</span>
          <button
            onClick={onClose}
            className="rounded-full bg-[#762f35] px-5 py-2 text-xs font-bold text-white hover:bg-[#5e242a] transition-colors"
          >
            Close
          </button>
        </div>
      </div>

      {/* Nested Certificate Zoom View */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-xl w-full overflow-hidden rounded-3xl bg-white p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between border-b border-stone-200 pb-2">
              <div>
                <h4 className="font-editorial text-lg text-[#27221f]">{selectedCert.title}</h4>
                <p className="text-xs text-[#766a61]">{selectedCert.authority} · {selectedCert.regNumber}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-full p-2 text-stone-500 hover:bg-stone-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[72vh] overflow-y-auto rounded-xl border border-stone-200 bg-stone-50 p-2">
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div className="mt-3 text-right">
              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-full bg-[#762f35] px-4 py-1.5 text-xs font-bold text-white"
              >
                Back to Compliance
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
