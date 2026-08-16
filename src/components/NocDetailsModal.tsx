"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ShieldCheck, 
  Compass, 
  Activity, 
  Building2, 
  CheckCircle2, 
  Phone, 
  FileText 
} from "lucide-react";

interface NocDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NocDetailsModal({ isOpen, onClose }: NocDetailsModalProps) {
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

  const requirements = [
    { 
      title: "WGS-84 Coordinate Survey", 
      desc: "A mandatory high-precision GPS coordinate measurement conducted by dual frequency DGPS receivers to establish exact latitude, longitude, and elevation above mean sea level (AMSL) of the proposed site." 
    },
    { 
      title: "Obstacle Limitation Surface (OLS) Analysis", 
      desc: "Verification against takeoff climb, approach, inner horizontal, conical, and transitional surfaces surrounding the runway to ensure no penetration of flight envelopes." 
    },
    { 
      title: "CNS Assessment", 
      desc: "Evaluating if the building structure causes electromagnetic blockages or reflections for Communication, Navigation, and Surveillance radar/beacons (like DVOR, ILS, and radars)." 
    },
    { 
      title: "Shielding Benefit Study", 
      desc: "In cases where a tall structure is located behind an existing higher building/hill, shielding criteria under AAI rules may grant additional allowable height." 
    },
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
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-poppins font-extrabold text-lg sm:text-xl text-white">
                    Airport Height Clearance NOC
                  </h2>
                  <p className="text-xs text-slate-400 font-inter">
                    Comprehensive AAI & IAF Regulatory Guide
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
              
              {/* Introduction */}
              <div className="space-y-3">
                <h3 className="font-poppins font-bold text-base sm:text-lg text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                  What is Airport Height Clearance?
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Any structure constructed within a predefined radius of an airport or defense radar base requires a height clearance certificate. This guarantees that the structure does not interfere with the safety path of incoming and outgoing flights or block vital radio and navigation signals.
                </p>
                <p className="text-xs sm:text-sm text-slate-200 font-medium bg-slate-950 p-4 rounded-xl border border-slate-800">
                  High Rise Approvals offers specialized consulting services to handle the complex, data-driven application cycle. We help you obtain height approvals for all categories of structures including residential complexes, commercial zones, chimneys, telecom masts, hospitals, and public facilities.
                </p>
              </div>

              {/* Critical Survey Requirements */}
              <div className="space-y-4">
                <h3 className="font-poppins font-bold text-base sm:text-lg text-white">
                  Critical Survey Requirements & Parameters
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Obtaining an Airport NOC is not just administrative; it relies on accurate geographical calculations. The regulatory bodies evaluate applications based on the following surveys and assessments:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {requirements.map((req, idx) => (
                    <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center space-x-2 text-secondary">
                        <Compass className="w-4 h-4 shrink-0" />
                        <h4 className="font-poppins font-bold text-xs sm:text-sm text-white">{req.title}</h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{req.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aeronautical Studies */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="font-poppins font-bold text-sm sm:text-base text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-secondary animate-pulse" />
                  Detailed Aeronautical Studies & Appeals
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  If initial calculations result in a height restriction impacting your project, Airports Authority of India allows developers to request a detailed **Aeronautical Study**.
                </p>
                <p className="text-xs sm:text-sm text-slate-400">
                  These studies calculate parameters using advanced airspace simulation software to verify if a higher structure can be allowed without compromising safety. We prepare calculations, draft appeal documents, and represent our clients before the Appellate Committee.
                </p>
              </div>

              {/* Involved Authorities */}
              <div className="space-y-3 pt-2">
                <h3 className="font-poppins font-bold text-sm sm:text-base text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-secondary" />
                  Involved Regulatory Authorities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>AAI (Civil Airports)</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Civil & commercial airports across India.</p>
                  </div>
                  <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>Indian Air Force (IAF)</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Airbases and defense airspace sectors.</p>
                  </div>
                  <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>DGCA</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Policy guidelines & safety certifications.</p>
                  </div>
                </div>
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
                  ● Consultation Available
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
                  Get Free Consultation
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
