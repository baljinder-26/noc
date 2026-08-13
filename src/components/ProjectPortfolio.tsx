"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building, Building2, Factory, Stethoscope, GraduationCap, Radio, Landmark, Compass, Award } from "lucide-react";

interface ProjectItem {
  title: string;
  category: string;
  location: string;
  details: string;
  icon: React.ComponentType<any>;
}

export default function ProjectPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Industrial",
    "Hospitals",
    "Educational",
    "Telecom",
    "Helipad",
    "Infrastructure"
  ];

  const projects: ProjectItem[] = [
    {
      title: "Gold Crest Residency",
      category: "Residential",
      location: "Zirakpur, Punjab",
      details: "Height clearance of 48m approved near Chandigarh Airport.",
      icon: Building
    },
    {
      title: "Imperial Business Park",
      category: "Commercial",
      location: "Gurugram, Haryana",
      details: "Obtained AAI clearance for high-rise commercial corporate offices.",
      icon: Building2
    },
    {
      title: "Sterling Pharma Plant",
      category: "Industrial",
      location: "Baddi, Himachal Pradesh",
      details: "Chimney clearance obtained in compliance with mountain terrain safety.",
      icon: Factory
    },
    {
      title: "Fortis Super Speciality Wing",
      category: "Hospitals",
      location: "Mohali, Punjab",
      details: "Critical rooftop structure NOC, close proximity to airbase.",
      icon: Stethoscope
    },
    {
      title: "Chitkara University Campus",
      category: "Educational",
      location: "Rajpura, Punjab",
      details: "CNS assessment for institutional blocks and telecom grid NOC.",
      icon: GraduationCap
    },
    {
      title: "Bharti Airtel Telecom Mast",
      category: "Telecom",
      location: "Jaipur, Rajasthan",
      details: "Fast-tracked tower height clearances in multiple airport sectors.",
      icon: Radio
    },
    {
      title: "State Capital Flyover Extension",
      category: "Infrastructure",
      location: "Lucknow, Uttar Pradesh",
      details: "Cleared construction equipment height approvals under OLS guidelines.",
      icon: Compass
    },
    {
      title: "Rooftop Helipad - Metro Hospital",
      category: "Helipad",
      location: "Noida, Uttar Pradesh",
      details: "DGCA compliant rooftop helipad safety audit and certification.",
      icon: Award
    },
    {
      title: "Government IT Park Block C",
      category: "Commercial",
      location: "Delhi NCR",
      details: "Strategic liaison and clearance from AAI & IAF joint cells.",
      icon: Landmark
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full font-poppins font-semibold text-xs sm:text-sm transition-all duration-300 ${
              activeFilter === cat
                ? "bg-secondary text-slate-950 border border-secondary shadow-md scale-105"
                : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:border-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="glass-card rounded-xl p-6 shadow-lg flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group hover:border-secondary/20 cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-slate-900 text-secondary border border-slate-800 group-hover:bg-secondary group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-poppins font-bold uppercase tracking-wider bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-poppins font-bold text-base text-white mb-1 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mb-3 font-mono">
                    {project.location}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed font-inter">
                    {project.details}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-900 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Aviation Safeguarded</span>
                  <span className="text-emerald-400 font-bold">● Approved</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
