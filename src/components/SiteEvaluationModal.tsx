"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Compass, 
  ShieldCheck, 
  Activity, 
  Radio, 
  Building2, 
  CheckCircle2, 
  Phone 
} from "lucide-react";

interface SiteEvaluationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SiteEvaluationModal({ isOpen, onClose }: SiteEvaluationModalProps) {
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

  const evalPoints = [
    {
      title: "Obstacle Limitation Surfaces (OLS)",
      desc: "Verifies takeoff climb, approach, transitional, inner horizontal, and conical surfaces surrounding civil and IAF airports to ensure no structural penetration of flight safety envelopes.",
      icon: Compass
    },
    {
      title: "CNS Radar & Signal Protection",
      desc: "Evaluates whether proposed structures cause electromagnetic blockages, signal reflection, or interference with DVOR, ILS, Radar, and VHF communication beacons.",
      icon: Radio
    },
    {
      title: "Pre-Construction Feasibility",
      desc: "Conducted prior to architectural planning or land acquisition to establish exact maximum permissible building height (AMSL & Top Elevation) before major financial investments.",
      icon: ShieldCheck
    },
    {
      title: "Shielding Benefit Assessment",
      desc: "Identifies whether existing higher natural terrain or built structures nearby provide valid shielding criteria under AAI / Defence regulations to grant additional allowable height.",
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
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-poppins font-extrabold text-lg sm:text-xl text-white">
                    Aviation Site Evaluation & Assessment
                  </h2>
                  <p className="text-xs text-slate-400 font-inter">
                    Pre-construction Height & Airspace Feasibility Study
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
              
              {/* Primary Definition */}
              <div className="bg-slate-950 p-5 sm:p-6 rounded-2xl border border-secondary/20 shadow-xl space-y-3">
                <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest block">
                  Core Evaluation Purpose
                </span>
                <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                  An aviation site evaluation and assessment is a process to check and ascertain that the proposed height of the building or structure does not infringe the Obstacle Limitation Surfaces (OLS) or the Communication, Navigation, and Surveillance (CNS) surfaces thereby ensuring that the surrounding airspace is clear for aircraft operations and ground-based radio/radar signals.
                </p>
              </div>

              {/* Evaluation Parameters */}
              <div className="space-y-4">
                <h3 className="font-poppins font-bold text-base sm:text-lg text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-secondary shrink-0" />
                  Key Components of Site Assessment
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {evalPoints.map((item, idx) => {
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

              {/* Why Conduct Pre-Evaluation */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="font-poppins font-bold text-sm sm:text-base text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  Benefits for Developers & Architects
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Conducting an Aviation Site Evaluation prior to submitting formal applications on the AAI NOCAS portal prevents costly project delays, architectural redesigns, or unexpected height restrictions during construction.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs font-medium text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Exact Permissible AMSL Elevation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Avoid Radar Blockage Conflicts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Identify Shielding Opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Fast-Track AAI & IAF Filing</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/90 gap-3">
              <div className="flex items-center space-x-4 text-xs font-mono text-slate-400">
                <a href="tel:9501689445" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
                  <Phone className="w-3.5 h-3.5 text-secondary animate-pulse" />
                  <span>+91 95016 89445</span>
                </a>
                <span className="hidden sm:inline text-slate-700">|</span>
                <span className="hidden sm:inline flex items-center gap-1 text-emerald-400 font-bold text-[10px]">
                  ● Site Evaluation Active
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
                  Get Site Evaluation
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
