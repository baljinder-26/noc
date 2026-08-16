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
      desc: "Initial meeting to discuss building height requirements, location coordinates, and client objectives.",
      icon: PhoneCall
    },
    {
      number: 2,
      title: "Site Evaluation",
      desc: "Aviation feasibility analysis checking nearby airports, radar stations, and potential height restrictions.",
      icon: MapPin
    },
    {
      number: 3,
      title: "Drone Survey",
      desc: "Professional drone mapping to capture aerial data, site topography, and surrounding structures.",
      icon: Target
    },
    {
      number: 4,
      title: "Geo-Spatial Survey",
      desc: "High precision mapping of physical attributes to meet geospatial requirements for aviation compliance.",
      icon: Globe
    },
    {
      number: 5,
      title: "WGS-84 Survey",
      desc: "Mandatory GPS coordinate survey in WGS-84 format using dual frequency DGPS to secure precise values.",
      icon: Compass
    },
    {
      number: 6,
      title: "CNS / OLS Assessment",
      desc: "Detailed evaluation of Obstacle Limitation Surfaces (OLS) and Communication, Navigation & Surveillance (CNS) ranges.",
      icon: Activity
    },
    {
      number: 7,
      title: "Documentation Preparation",
      desc: "Drafting of structural drawings, undertaking certificates, site maps, and required technical reports.",
      icon: FileText
    },
    {
      number: 8,
      title: "Application Submission",
      desc: "Uploading dossiers to AAI NOCAS portal or IAF clearance cells with zero errors to prevent processing delays.",
      icon: UploadCloud
    },
    {
      number: 9,
      title: "Coordination with Authorities",
      desc: "Continuous follow-up and representation of the project parameters during board hearings and departmental queries.",
      icon: Users
    },
    {
      number: 10,
      title: "Approval Assistance",
      desc: "Successful procurement and hand-over of the Airport Height Clearance NOC letter.",
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
