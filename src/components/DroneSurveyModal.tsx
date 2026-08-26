"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Plane, 
  Layers, 
  TrendingUp, 
  MapPin, 
  Ruler, 
  Target, 
  CheckCircle2, 
  Phone,
  ShieldCheck
} from "lucide-react";

interface DroneSurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DroneSurveyModal({ isOpen, onClose }: DroneSurveyModalProps) {
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

  const surveyCapabilities = [
    {
      title: "Aerial Site Mapping & 2D/3D Models",
      desc: "High-resolution orthomosaic maps, digital elevation models (DEM), and textured 3D mesh rendering for precise digital site representations.",
      icon: Layers
    },
    {
      title: "Land & Construction Progress Surveys",
      desc: "Periodic aerial inspections tracking site development milestones, stockpile volumetric calculations, and structural evolution over time.",
      icon: TrendingUp
    },
    {
      title: "Topographic Data Collection",
      desc: "Rapid acquisition of high-density elevation grids, contour mapping, and terrain features required for engineering and architectural planning.",
      icon: MapPin
    },
    {
      title: "Site Measurements & Aerial Documentation",
      desc: "Millimeter-accurate distance, area, and volumetric boundary measurements backed by high-resolution visual inspection archives.",
      icon: Ruler
    },
    {
      title: "Accurate Project Monitoring & Planning",
      desc: "Actionable spatial analytics empowering project managers to identify hazards, optimize layouts, and maintain strict timeline control.",
      icon: Target
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
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-poppins font-extrabold text-lg sm:text-xl text-white">
                    Drone Survey & Mapping
                  </h2>
                  <p className="text-xs text-slate-400 font-inter">
                    High-Resolution Aerial Data, 3D Modeling & Topographical Mapping
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
                  Our professional drone survey services provide accurate and detailed aerial data for construction sites, land development, infrastructure, and project planning. Using high-resolution drone imagery and advanced mapping techniques, we capture precise site information quickly and efficiently.
                </p>
              </div>

              {/* Specific Applications list ("Our surveys can help with:") */}
              <div className="space-y-4">
                <h3 className="font-poppins font-bold text-base sm:text-lg text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                  Our surveys can help with:
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {surveyCapabilities.map((item, idx) => {
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

              {/* Summary / Key Takeaway */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="font-poppins font-bold text-sm sm:text-base text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  Enhanced Efficiency & Decision Making
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  With faster data collection and clear visual insights, drone surveys help reduce manual effort, improve accuracy, and support better project decisions.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs font-medium text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Aerial site mapping and 2D/3D models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Land and construction progress surveys</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Topographic data collection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Site measurements & aerial documentation</span>
                  </li>
                  <li className="flex items-center gap-2 sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Accurate project monitoring and planning</span>
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
                  ● Drone Survey Active
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
                  Book Drone Survey
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
