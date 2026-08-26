"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  RotateCw, 
  Building2, 
  FileCheck2, 
  Activity, 
  CheckCircle2, 
  Phone,
  ShieldCheck
} from "lucide-react";

interface RenewalRevalidationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RenewalRevalidationModal({ isOpen, onClose }: RenewalRevalidationModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const renewalServices = [
    {
      title: "Airport Clearance Renewal & Revalidation",
      desc: "Comprehensive assistance for extending expired or expiring Airport Height Clearance NOCs issued by AAI or Defence authorities.",
      icon: RotateCw
    },
    {
      title: "Assessment of Structural or Height Modifications",
      desc: "Technical evaluation when building design changes, rooftop additions, or architectural elevation modifications occur during construction.",
      icon: Building2
    },
    {
      title: "Review of Existing Clearance Conditions",
      desc: "Auditing previous NOC terms, structural coordinate alignment, and elevation validity against current civil aviation regulations.",
      icon: FileCheck2
    },
    {
      title: "Monitoring & Coordination Throughout the Process",
      desc: "Active tracking of revalidation files across civil aviation cells and Defence headquarters to prevent construction stalls.",
      icon: Activity
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          {/* Modal Card Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-secondary/10 rounded-lg border border-secondary/30 text-secondary">
                  <RotateCw className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-poppins font-extrabold text-lg sm:text-xl text-white">
                    Renewal & Revalidation
                  </h2>
                  <p className="text-xs text-slate-400 font-inter">
                    Airport Clearance Renewal, Revalidation & Structural Modification Consultancy
                  </p>
                </div>
              </div>

              {/* Close Button ('X') */}
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300 font-inter leading-relaxed">
              
              {/* Primary Summary */}
              <div className="bg-slate-950 p-5 sm:p-6 rounded-2xl border border-secondary/20 shadow-xl space-y-3">
                <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest block">
                  Service Overview
                </span>
                <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                  We provide end-to-end consultancy for Airport Clearance renewals, revalidation, and cases involving structural or height modifications. Our services help ensure that existing clearances remain valid and updated in line with current site conditions and applicable requirements.
                </p>
              </div>

              {/* Specific Services list ("Our services include:") */}
              <div className="space-y-4">
                <h3 className="font-poppins font-bold text-base sm:text-lg text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                  Our services include:
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {renewalServices.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
                        <div className="flex items-center space-x-2 text-secondary">
                          <Icon className="w-4 h-4 shrink-0" />
                          <h4 className="font-poppins font-bold text-xs sm:text-sm text-white">{item.title}</h4>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Value Proposition */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="font-poppins font-bold text-sm sm:text-base text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  Seamless Compliance Maintenance
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  We help simplify the renewal process, address modification requirements efficiently, and maintain compliance with applicable aviation clearance regulations.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs font-medium text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Airport Clearance renewal and revalidation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Assessment of structural or height modifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Review of existing clearance conditions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Monitoring and coordination throughout the process</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/90 gap-3">
              <div className="flex items-center space-x-4 text-xs font-mono text-slate-400">
                <a href="tel:9501689445" className="flex items-center gap-2 hover:text-secondary transition-colors font-bold text-white">
                  <span>Contact</span>
                  <Phone className="w-3.5 h-3.5 text-secondary animate-pulse" />
                  <span className="font-normal text-slate-300">+91 95016 89445</span>
                </a>
                <span className="hidden sm:inline text-slate-700">|</span>
                <span className="hidden sm:inline flex items-center gap-1 text-emerald-400 font-bold text-[10px]">
                  ● Renewal Consultancy Active
                </span>
              </div>
              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-poppins font-bold text-xs rounded transition-colors"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => {
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-2 bg-secondary hover:bg-secondary-light text-slate-950 font-poppins font-bold text-xs uppercase rounded shadow transition-all text-center"
                >
                  Apply for Renewal
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
