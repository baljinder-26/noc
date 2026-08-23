"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PhoneCall, 
  MapPin, 
  Target, 
  Globe, 
  Compass, 
  Activity, 
  FileText, 
  UploadCloud, 
  Users, 
  Award,
  ChevronRight,
  ChevronLeft,
  CheckSquare
} from "lucide-react";

interface StepDetails {
  number: number;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  duration: string;
  checklist: string[];
}

export default function ProcessWizard() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: StepDetails[] = [
    {
      number: 1,
      title: "Project Consultation",
      desc: "Initial strategic consultation to assess your building height requirements, location coordinates, proposed site parameters, and nearest civil/military airport zones.",
      icon: PhoneCall,
      duration: "1 - 2 Days",
      checklist: ["Analyze building blueprints & elevation goals", "Identify nearest AAI & IAF airport safeguarding grids", "Formulate liaison plan & approval roadmap"]
    },
    {
      number: 2,
      title: "WGS / Drone / Geo-Spatial Survey",
      desc: "High-precision site evaluation using dual-frequency DGPS WGS-84 survey, UAV drone mapping, and detailed geo-spatial terrain modeling.",
      icon: Globe,
      duration: "2 - 3 Days",
      checklist: ["Deploy dual-frequency DGPS for WGS-84 coordinates", "Execute UAV drone aerial mapping of site topography", "Export verified geo-spatial CAD data & WGS-84 certificate"]
    },
    {
      number: 3,
      title: "CNS / OLS Assessment",
      desc: "Advanced mathematical calculation evaluating Communication, Navigation & Surveillance (CNS) ranges and Obstacle Limitation Surface (OLS) penetration envelopes.",
      icon: Activity,
      duration: "3 - 5 Days",
      checklist: ["Compute DVOR, radar & ILS safety clearance zones", "Analyze runway approach & take-off obstacle surfaces", "Calculate permissible shielding benefit from surrounding structures"]
    },
    {
      number: 4,
      title: "Documentation",
      desc: "Comprehensive preparation and auditing of architectural elevation drawings, structural height declarations, site survey certificates, and legal undertakings.",
      icon: FileText,
      duration: "2 - 4 Days",
      checklist: ["Draft architect & structural engineer height undertakings", "Compile verified DGPS coordinate survey sheets", "Prepare complete technical clearance dossier"]
    },
    {
      number: 5,
      title: "Application Submission",
      desc: "Accurate online drafting and file submission to the AAI NOCAS portal or military defense cells with zero error tolerance to avoid delays.",
      icon: UploadCloud,
      duration: "1 Day",
      checklist: ["Upload verified files to AAI NOCAS portal", "Dispatch physical defense dossiers to relevant IAF station", "Track online file dispatch ID & registration status"]
    },
    {
      number: 6,
      title: "Coordination",
      desc: "Continuous liaison with civil aviation and military authorities, responding to board technical queries, and representing your case at departmental hearings.",
      icon: Users,
      duration: "2 - 6 Weeks",
      checklist: ["Liaison with AAI NOC cell & IAF station authorities", "Resolve technical coordinate or height clarifications", "Represent case parameters at appellate & board hearings"]
    },
    {
      number: 7,
      title: "Airport Approval",
      desc: "Successful procurement, verification, and formal handover of the official Airport Height Clearance NOC letter required for building sanction approvals.",
      icon: Award,
      duration: "1 Day",
      checklist: ["Receive official Airport Height Clearance NOC certificate", "Verify authorized elevation limits & site coordinates", "Deliver approved NOC letter to developer client"]
    }
  ];

  const currentStep = steps[activeStep];
  const Icon = currentStep.icon;

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  return (
    <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 shadow-2xl flex flex-col md:flex-row gap-8">
      
      {/* Sidebar step index */}
      <div className="md:w-1/3 space-y-2 border-r border-slate-900 pr-0 md:pr-6 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 gap-2 md:gap-0 scrollbar-none">
        {steps.map((st, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={st.number}
              onClick={() => setActiveStep(idx)}
              className={`w-full text-left p-3.5 rounded-lg flex items-center gap-3 transition-all shrink-0 md:shrink border ${
                isActive 
                  ? "bg-gradient-gold text-slate-950 border-secondary shadow-md font-bold" 
                  : "bg-slate-900/40 text-slate-300 border-white/5 hover:border-secondary/20 hover:bg-slate-900"
              }`}
            >
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm ${isActive ? 'bg-slate-950 text-secondary font-bold' : 'bg-slate-800 text-slate-400'}`}>
                {st.number}
              </span>
              <span className="text-sm font-poppins font-medium truncate max-w-[140px] md:max-w-none">{st.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Panel Content */}
      <div className="flex-1 flex flex-col justify-between min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-slate-900 pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-slate-900 text-secondary rounded-xl shadow-inner border border-white/5">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-poppins font-bold text-secondary uppercase tracking-widest block">
                    STEP {currentStep.number} OF 7
                  </span>
                  <h3 className="font-poppins font-extrabold text-xl sm:text-2xl text-white">
                    {currentStep.title}
                  </h3>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-poppins font-bold text-slate-400 block uppercase tracking-wide">
                  EST. DURATION
                </span>
                <span className="text-sm font-bold text-slate-950 bg-secondary py-1 px-3 rounded-full border border-secondary/20 font-mono">
                  {currentStep.duration}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-inter">
              {currentStep.desc}
            </p>

            {/* Tasks checklist */}
            <div className="space-y-3.5 bg-slate-950/60 p-5 sm:p-6 rounded-xl border border-slate-900">
              <h4 className="text-sm font-poppins font-bold text-slate-200 uppercase tracking-wider mb-2">
                Operational Checklist
              </h4>
              <ul className="space-y-2.5">
                {currentStep.checklist.map((task, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-slate-300">
                    <CheckSquare className="w-5 h-5 text-secondary shrink-0" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Backward / Forward Buttons */}
        <div className="flex justify-between items-center mt-8 pt-4 border-t border-slate-900">
          <button
            onClick={handlePrev}
            disabled={activeStep === 0}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-poppins font-bold text-slate-300 border border-slate-800 rounded-lg hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous Step
          </button>
          
          <button
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
            className="flex items-center gap-1.5 px-5 py-2 text-xs font-poppins font-bold text-slate-950 bg-secondary hover:bg-secondary-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow"
          >
            Next Step
            <ChevronRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </div>
  );
}
