"use client";

import { motion } from "framer-motion";
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
  Award 
} from "lucide-react";

interface Step {
  number: number;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

export default function Timeline() {
  const steps: Step[] = [
    {
      number: 1,
      title: "Project Consultation",
      desc: "Initial strategic consultation to discuss building height goals, site coordinates, and proximity to civil/military airports.",
      icon: PhoneCall
    },
    {
      number: 2,
      title: "WGS / Drone / Geo-Spatial Survey",
      desc: "High-precision site mapping incorporating dual-frequency DGPS WGS-84 coordinate survey and UAV drone terrain sweeps.",
      icon: Globe
    },
    {
      number: 3,
      title: "CNS / OLS Assessment",
      desc: "Mathematical calculation of Communication, Navigation & Surveillance (CNS) ranges and Obstacle Limitation Surface (OLS) envelopes.",
      icon: Activity
    },
    {
      number: 4,
      title: "Documentation",
      desc: "Compiling architectural elevation drawings, structural height declarations, site survey certificates, and legal undertakings.",
      icon: FileText
    },
    {
      number: 5,
      title: "Application Submission",
      desc: "Accurate online drafting and file submission to the AAI NOCAS portal or IAF/Defence clearance cells with zero error tolerance.",
      icon: UploadCloud
    },
    {
      number: 6,
      title: "Coordination",
      desc: "Continuous liaison with aviation authorities, responding to board technical queries, and representing your case at committee hearings.",
      icon: Users
    },
    {
      number: 7,
      title: "Airport Approval",
      desc: "Successful procurement, verification, and formal handover of the official Airport Height Clearance NOC letter.",
      icon: Award
    }
  ];

  return (
    <div className="relative max-w-5xl mx-auto px-4">
      {/* Central Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/10 via-secondary/40 to-accent/10 -translate-x-1/2" />

      <div className="space-y-12">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isEven = idx % 2 === 0;

          return (
            <div key={step.number} className="relative flex flex-col md:flex-row items-start md:items-center">
              {/* Timeline Indicator Circle */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-10 h-10 rounded-full bg-white border-2 border-secondary flex items-center justify-center shadow-md text-primary font-poppins font-bold text-sm"
                >
                  {step.number}
                </motion.div>
              </div>

              {/* Layout spacer for alternating sides on desktop */}
              <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:order-last md:pl-12"}`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:border-secondary/35 transition-all group"
                >
                  <div className={`flex items-center space-x-3 mb-2 ${isEven ? "md:flex-row-reverse md:space-x-reverse" : ""}`}>
                    <div className="p-2 rounded bg-slate-50 text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-poppins font-bold text-lg text-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </div>

              {/* Dummy spacing column for alignment */}
              <div className="hidden md:block w-1/2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
