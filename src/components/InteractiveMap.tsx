"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Globe2, Compass, AlertCircle } from "lucide-react";

interface CoverageState {
  id: string;
  name: string;
  projects: string;
  leadTime: string;
  specialty: string;
  coordinates: string;
  path: string; // SVG path representation
}

export default function InteractiveMap() {
  const [hoveredState, setHoveredState] = useState<CoverageState | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const states: CoverageState[] = [
    {
      id: "punjab",
      name: "Punjab",
      projects: "45+ Sites Cleared",
      leadTime: "Fast-track AAI NOC",
      specialty: "Industrial & Telecom Towers",
      coordinates: "31.1471° N, 75.3412° E",
      path: "M 130 160 L 170 150 L 180 180 L 140 195 Z"
    },
    {
      id: "haryana",
      name: "Haryana",
      projects: "80+ Completed Projects",
      leadTime: "AAI & IAF Liaisons",
      specialty: "High-rise Residential Complexes",
      coordinates: "29.0588° N, 76.0856° E",
      path: "M 140 195 L 180 180 L 195 200 L 185 230 L 155 220 Z"
    },
    {
      id: "himachal",
      name: "Himachal Pradesh",
      projects: "25+ Clearances Obtained",
      leadTime: "Complex Terrain OLS",
      specialty: "Helipads & Institutional Sites",
      coordinates: "31.1048° N, 77.1734° E",
      path: "M 170 120 L 205 135 L 190 170 L 170 150 Z"
    },
    {
      id: "rajasthan",
      name: "Rajasthan",
      projects: "65+ Projects Delivered",
      leadTime: "NOCAS Submission in 48h",
      specialty: "Solar Plants & Commercial Hubs",
      coordinates: "27.0238° N, 74.2179° E",
      path: "M 80 210 L 155 220 L 170 280 L 100 295 L 85 250 Z"
    },
    {
      id: "up",
      name: "Uttar Pradesh",
      projects: "90+ Projects Approved",
      leadTime: "AAI NOCAS Portal",
      specialty: "Hospitals & Educational Townships",
      coordinates: "26.8467° N, 80.9462° E",
      path: "M 185 230 L 220 220 L 280 250 L 250 310 L 190 280 Z"
    },
    {
      id: "mp",
      name: "Madhya Pradesh",
      projects: "50+ Sites Evaluated",
      leadTime: "DGPS Coordinate Surveys",
      specialty: "Infrastructure & Helipads",
      coordinates: "22.9734° N, 78.6569° E",
      path: "M 140 300 L 225 285 L 250 350 L 160 380 Z"
    },
    {
      id: "delhi",
      name: "Delhi & NCR",
      projects: "110+ Height Approvals",
      leadTime: "Direct AAI Headquarter liaison",
      specialty: "Premium Commercial & Residential",
      coordinates: "28.6139° N, 77.2090° E",
      path: "M 175 205 L 188 203 L 188 213 L 175 215 Z"
    },
    {
      id: "chandigarh",
      name: "Chandigarh & Mohali",
      projects: "35+ Clearances Obtained",
      leadTime: "IAF Station Approvals",
      specialty: "Multi-story Residential Projects",
      coordinates: "30.7333° N, 76.7794° E",
      path: "M 174 172 L 182 170 L 182 178 L 174 180 Z"
    }
  ];

  // Rest of India outline simplified to emphasize our focus region
  const indiaOutlinePath = 
    "M 150 50 L 220 100 L 240 160 L 290 200 L 330 250 L 300 300 L 330 350 L 280 400 L 270 470 L 220 530 L 190 570 L 180 520 L 150 480 L 150 420 L 110 370 L 70 330 L 50 280 L 60 220 L 100 170 Z";

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left + 15,
      y: e.clientY - rect.top - 120
    });
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col lg:flex-row items-center gap-10">
      
      {/* Map visualization - High Tech Style */}
      <div 
        className="relative w-full max-w-[450px] aspect-[4/5] bg-slate-950 rounded-xl p-4 overflow-hidden border border-slate-800 cursor-crosshair select-none"
        onMouseMove={handleMouseMove}
      >
        {/* Visual grid overlay for a high-tech look */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-25" />
        
        {/* Radar pulsing ring in center */}
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-emerald-500/10 rounded-full animate-pulse pointer-events-none" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-emerald-500/5 rounded-full animate-pulse [animation-delay:2s] pointer-events-none" />

        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
          <span className="text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 py-1 px-2.5 rounded border border-emerald-500/30 uppercase tracking-wider">
            AIRSPACE SECTOR INTERACTION
          </span>
          <span className="text-[9px] font-mono text-slate-500">
            SYSTEM RESOLUTION: DGPS MAPPED
          </span>
        </div>

        {/* SVG Map Canvas */}
        <svg 
          viewBox="0 0 350 450" 
          className="w-full h-full filter drop-shadow-md relative z-10"
        >
          {/* Base map representing India */}
          <path 
            d={indiaOutlinePath} 
            fill="#0f172a" 
            stroke="#334155" 
            strokeWidth="1.5"
            className="transition-colors duration-300"
          />

          {/* Label for Non-coverage area */}
          <text x="210" y="415" fill="#475569" className="font-mono text-[9px] tracking-widest font-bold">
            PAN INDIA SUPPORT ACTIVE
          </text>

          {/* Highlighted states */}
          {states.map((state) => {
            const isHovered = hoveredState?.id === state.id;
            return (
              <path
                key={state.id}
                d={state.path}
                fill={isHovered ? "url(#gold-gradient)" : "rgba(212, 175, 55, 0.15)"}
                stroke={isHovered ? "#ffffff" : "#d4af37"}
                strokeWidth={isHovered ? "2.5" : "1.2"}
                className="cursor-pointer transition-all duration-300 ease-out"
                onMouseEnter={() => setHoveredState(state)}
                onMouseLeave={() => setHoveredState(null)}
              />
            );
          })}

          {/* Define SVG gradient */}
          <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="50%" stopColor="#f3cf55" />
              <stop offset="100%" stopColor="#c59f2d" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Tooltip */}
        <AnimatePresence>
          {hoveredState && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              style={{ left: tooltipPos.x, top: tooltipPos.y }}
              className="absolute z-20 pointer-events-none w-64 bg-slate-900 border border-secondary/40 text-white p-4 rounded-xl shadow-2xl font-mono text-[11px]"
            >
              <h4 className="font-poppins font-bold text-sm text-secondary border-b border-slate-800 pb-1 mb-2">
                {hoveredState.name}
              </h4>
              <ul className="space-y-1.5 text-slate-300">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>GPS LOCK: <strong className="text-white">{hoveredState.coordinates}</strong></span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>PROJECTS: <strong className="text-white">{hoveredState.projects}</strong></span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>ROUTE: {hoveredState.leadTime}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>SPECIALTY: {hoveredState.specialty}</span>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* States detailed list and call to action */}
      <div className="flex-1 w-full space-y-6">
        <div>
          <h3 className="font-poppins font-bold text-2xl text-primary mb-2 flex items-center gap-2">
            <Globe2 className="w-6 h-6 text-secondary shrink-0" />
            North & Central India Coverage
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-inter">
            Our primary operational base is in Northern and Central India, offering localized DGPS coordinate verification, radar shielding audits, and direct coordination with civil/military airbases.
          </p>
        </div>

        {/* State Tags Grid */}
        <div className="grid grid-cols-2 gap-3">
          {states.map((state) => (
            <div 
              key={state.id}
              className={`p-3 rounded-xl border flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                hoveredState?.id === state.id 
                  ? "bg-primary text-white border-secondary shadow-lg scale-[1.01]" 
                  : "bg-slate-50 text-primary border-slate-100 hover:border-secondary/20"
              }`}
              onMouseEnter={() => setHoveredState(state)}
              onMouseLeave={() => setHoveredState(null)}
            >
              <div className="flex items-center space-x-2">
                <Compass className={`w-4 h-4 shrink-0 ${hoveredState?.id === state.id ? "text-secondary animate-spin" : "text-secondary"}`} />
                <span className="font-poppins font-bold text-xs sm:text-sm">{state.name}</span>
              </div>
              <span className={`text-[9px] font-mono mt-1 ${hoveredState?.id === state.id ? 'text-slate-300' : 'text-slate-400'}`}>
                {state.coordinates.split(',')[0]}
              </span>
            </div>
          ))}
        </div>

        {/* Pan India Notice */}
        <div className="p-4 rounded-xl bg-slate-50 border border-dashed border-slate-200 mt-4 flex gap-3">
          <AlertCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-poppins font-bold text-xs sm:text-sm text-primary uppercase tracking-wide">
              Pan India Consultancy Available
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-inter">
              Even if your project coordinates lie outside these core sectors, High Rise Approvals conducts UAV drone mapping, dual DGPS coordinate verifications, and NOCAS portal file preparations for projects anywhere in India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
