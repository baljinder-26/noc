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
      desc: "We discuss your building height requirements, proposed site parameters, and nearest airports.",
      icon: PhoneCall,
      duration: "1 - 2 Days",
      checklist: ["Analyze building blueprints", "Review master plan height goals", "Establish liaison guidelines"]
    },
    {
      number: 2,
      title: "Site Evaluation",
      desc: "Our team assesses nearby airports, military radars, and OLS safety charts relative to your site.",
      icon: MapPin,
      duration: "2 - 3 Days",
      checklist: ["Crosscheck AAI radar grids", "Map nearby civilian runway markers", "Verify IAF notification zones"]
    },
    {
      number: 3,
      title: "Drone Survey",
      desc: "If required, we conduct professional drone sweeps to map surrounding heights and physical attributes.",
      icon: Target,
      duration: "1 - 2 Days",
      checklist: ["Deploy high-precision UAVs", "Capture 3D point cloud elevations", "Identify tall neighbor shielding"]
    },
    {
      number: 4,
      title: "Geo-Spatial Survey",
      desc: "We create digital maps reflecting topography, obstacles, and geographical attributes of the terrain.",
      icon: Globe,
      duration: "2 Days",
      checklist: ["Generate topographic contour charts", "Map absolute elevation zones", "Export CAD layout data"]
    },
    {
      number: 5,
      title: "WGS-84 Survey",
      desc: "Mandatory coordinate verification utilizing high-precision dual frequency DGPS under AAI standards.",
      icon: Compass,
      duration: "1 - 2 Days",
      checklist: ["Deploy DGPS ground beacons", "Extract sub-centimeter coordinates", "Formulate WGS-84 certificate"]
    },
    {
      number: 6,
      title: "CNS / OLS Assessment",
      desc: "Mathematical calculation of radar signal blockages and OLS plane penetrations for building envelopes.",
      icon: Activity,
      duration: "3 - 5 Days",
      checklist: ["Compute DVOR and radar safety clearances", "Analyze runway approach envelopes", "Identify permissible shielding benefit"]
    },
    {
      number: 7,
      title: "Documentation Preparation",
      desc: "Compiling of structural certificates, layout coordinates, undertakings, and engineering blueprints.",
      icon: FileText,
      duration: "2 - 4 Days",
      checklist: ["Draft architect undertaking certificate", "Compile coordinate survey sheets", "Verify structural height declaration"]
    },
    {
      number: 8,
      title: "Application Submission",
      desc: "Accurate online drafting and file submission to civil AAI NOCAS portal or military defense files.",
      icon: UploadCloud,
      duration: "1 Day",
      checklist: ["Upload documents to AAI NOCAS", "Submit defense file files to IAF cell", "Track file dispatch ID"]
    },
    {
      number: 9,
      title: "Coordination with Authorities",
      desc: "Liaison checks, responding to clarifications, and attending appellate hearings representing your files.",
      icon: Users,
      duration: "4 - 8 Weeks",
      checklist: ["Respond to AAI coordinate queries", "Liaison with IAF regional station", "Represent case in Appellate Committee"]
    },
    {
      number: 10,
      title: "Approval Assistance",
      desc: "Successfully securing the Airport Height Clearance NOC, ready for local developers.",
      icon: Award,
      duration: "1 Day",
      checklist: ["Receive final height clearance letter", "Verify coordinate matches on certificate", "Deliver approved NOC to developer client"]
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
              className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all shrink-0 md:shrink border ${
                isActive 
                  ? "bg-gradient-gold text-slate-950 border-secondary shadow-md font-bold" 
                  : "bg-slate-900/40 text-slate-300 border-white/5 hover:border-secondary/20 hover:bg-slate-900"
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${isActive ? 'bg-slate-950 text-secondary font-bold' : 'bg-slate-800 text-slate-500'}`}>
                {st.number}
              </span>
              <span className="text-xs font-poppins truncate max-w-[120px] md:max-w-none">{st.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Panel Content */}
      <div className="flex-1 flex flex-col justify-between min-h-[300px]">
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
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-poppins font-bold text-secondary uppercase tracking-widest block">
                    STEP {currentStep.number} OF 10
                  </span>
                  <h3 className="font-poppins font-extrabold text-lg sm:text-xl text-white">
                    {currentStep.title}
                  </h3>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-poppins font-bold text-slate-500 block uppercase tracking-wide">
                  EST. DURATION
                </span>
                <span className="text-xs font-bold text-slate-950 bg-secondary py-1 px-2.5 rounded-full border border-secondary/20 font-mono">
                  {currentStep.duration}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-inter">
              {currentStep.desc}
            </p>

            {/* Tasks checklist */}
            <div className="space-y-3 bg-slate-950/60 p-5 rounded-xl border border-slate-900">
              <h4 className="text-xs font-poppins font-bold text-slate-300 uppercase tracking-wider mb-2">
                Operational Checklist
              </h4>
              <ul className="space-y-2">
                {currentStep.checklist.map((task, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
                    <CheckSquare className="w-4.5 h-4.5 text-secondary shrink-0" />
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
