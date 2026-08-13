"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle, HelpCircle, ArrowRight } from "lucide-react";

export default function HeightCalculator() {
  const [distance, setDistance] = useState(6); // distance from runway in km
  const [height, setHeight] = useState(45); // proposed building height in meters

  const calculateOlsLimit = (dist: number) => {
    if (dist <= 2) {
      return 15;
    } else if (dist <= 15) {
      const slope = (150 - 30) / (15 - 2);
      return Math.round(30 + slope * (dist - 2));
    } else {
      return 150;
    }
  };

  const olsLimit = calculateOlsLimit(distance);
  const isSafe = height <= olsLimit;
  const heightDifference = Math.abs(height - olsLimit);

  const getZoneDetails = (dist: number) => {
    if (dist <= 2) {
      return {
        name: "Critical Approach Funnel Zone",
        desc: "Structures inside this boundary directly impact takeoff/landing paths. Strict height limits apply.",
        color: "text-red-400 bg-red-950/30 border border-red-500/20"
      };
    } else if (dist <= 8) {
      return {
        name: "Inner Horizontal Surface",
        desc: "Structures here are audited against navigation beacons. Moderate restrictions apply.",
        color: "text-amber-400 bg-amber-950/30 border border-amber-500/20"
      };
    } else if (dist <= 15) {
      return {
        name: "Conical Transition Surface",
        desc: "High-rises are generally cleared but require coordinate and DGPS validation.",
        color: "text-blue-400 bg-blue-950/30 border border-blue-500/20"
      };
    } else {
      return {
        name: "Outer Safety Zone",
        desc: "Minimum height limits apply. Highly eligible for clearance.",
        color: "text-emerald-400 bg-emerald-950/30 border border-emerald-500/20"
      };
    }
  };

  const zone = getZoneDetails(distance);

  return (
    <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-2xl relative overflow-hidden border border-white/5">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-xs font-poppins font-bold text-secondary tracking-widest uppercase bg-secondary/15 py-1 px-3.5 rounded-full border border-secondary/35">
          Interactive Assessment Tool
        </span>
        <h3 className="font-poppins font-extrabold text-2xl text-white mt-3">
          Obstacle Height Envelope Calculator
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm font-inter mt-1.5">
          Estimate if your building's height falls within standard obstacle limitation envelopes. *For estimation only.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sliders Control Panel */}
        <div className="lg:col-span-5 space-y-6 bg-slate-950/50 p-6 rounded-xl border border-slate-900">
          
          {/* Distance Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-poppins font-bold text-slate-300 uppercase">
              <span>Distance to Runway</span>
              <span className="text-secondary font-extrabold text-sm">{distance} km</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="0.5"
              value={distance}
              onChange={(e) => setDistance(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-secondary"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-semibold font-mono">
              <span>1 km (Near Runway)</span>
              <span>20 km (Outer Boundary)</span>
            </div>
          </div>

          {/* Height Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-poppins font-bold text-slate-300 uppercase">
              <span>Proposed Height</span>
              <span className="text-secondary font-extrabold text-sm">{height} meters</span>
            </div>
            <input
              type="range"
              min="5"
              max="150"
              step="1"
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-secondary"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-semibold font-mono">
              <span>5 meters (Low rise)</span>
              <span>150 meters (Skyscraper)</span>
            </div>
          </div>

          {/* Current Zone Summary */}
          <div className={`p-4 rounded-lg ${zone.color} space-y-1`}>
            <h4 className="font-poppins font-bold text-xs uppercase tracking-wide">
              {zone.name}
            </h4>
            <p className="text-[11px] leading-relaxed opacity-90 font-inter">
              {zone.desc}
            </p>
          </div>

        </div>

        {/* Visual Graph Representation */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Comparison Graph */}
          <div className="bg-slate-950 rounded-xl p-6 text-white h-56 flex flex-col justify-between relative overflow-hidden border border-slate-900 shadow-inner">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-20" />

            <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-slate-500 tracking-wide">
              <span>AIRPORT SAFETY PROFILE</span>
              <span>ENVELOPE METRIC (m)</span>
            </div>

            {/* Vertical Visual Bars */}
            <div className="relative z-10 flex justify-around items-end h-32 pt-4">
              
              {/* Proposed Building Height Bar */}
              <div className="flex flex-col items-center w-24">
                <div 
                  className={`w-12 rounded-t-md transition-all duration-500 relative flex items-center justify-center ${
                    isSafe 
                      ? "bg-gradient-to-t from-accent to-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.3)]" 
                      : "bg-gradient-to-t from-red-600 to-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)] animate-pulse"
                  }`}
                  style={{ height: `${(height / 150) * 100}%` }}
                >
                  <span className="text-[10px] font-mono font-bold absolute -top-5 text-slate-300">{height}m</span>
                </div>
                <span className="text-[10px] font-poppins font-bold mt-2 text-slate-400">Proposed</span>
              </div>

              {/* Runway Indicator graphic (Center separator) */}
              <div className="h-full w-[1px] bg-slate-900 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>

              {/* OLS Safety Line Bar */}
              <div className="flex flex-col items-center w-24">
                <div 
                  className="w-12 bg-gradient-to-t from-secondary to-secondary-light rounded-t-md transition-all duration-500 relative flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  style={{ height: `${(olsLimit / 150) * 100}%` }}
                >
                  <span className="text-[10px] font-mono font-bold absolute -top-5 text-slate-300">{olsLimit}m</span>
                </div>
                <span className="text-[10px] font-poppins font-bold mt-2 text-slate-400">OLS Limit</span>
              </div>

            </div>

            {/* Safety status bar */}
            <div className="relative z-10 text-[9px] font-mono text-slate-600 border-t border-slate-900/60 pt-2 flex justify-between">
              <span>GRID LOCK: {distance}km</span>
              <span>RATIO: Standard OLS envelope</span>
            </div>
          </div>

          {/* Results Analysis */}
          <div className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 ${
            isSafe 
              ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-300" 
              : "bg-red-950/20 border-red-500/20 text-red-300"
          }`}>
            {isSafe ? (
              <>
                <div className="p-3 bg-emerald-900/20 rounded-lg text-emerald-400 shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-poppins font-bold text-sm text-emerald-200">
                    Within Safe OLS Envelope
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-inter">
                    Your proposed height of **{height}m** is safely below the calculated limit of **{olsLimit}m**. This site is eligible for standard AAI NOCAS portal submission with a high likelihood of approval.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="p-3 bg-red-950/40 rounded-lg text-red-400 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-poppins font-bold text-sm text-red-200">
                    OLS Height Limit Violated! ({heightDifference}m Excess)
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-inter">
                    Your proposed height exceeds standard safety limits by **{heightDifference}m**. To clear this, a detailed **Aeronautical Study** or representation to the Appellate Committee will be required. High Rise Approvals handles these complex appeal cases.
                  </p>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
      
      {/* Footer Note */}
      <div className="mt-8 pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
        <span className="flex items-center gap-1.5 font-semibold">
          <HelpCircle className="w-4 h-4 text-secondary shrink-0" />
          Need a definitive DGPS survey to verify coordinates?
        </span>
        <a 
          href="#contact" 
          className="text-secondary hover:text-white font-poppins font-bold flex items-center gap-1 transition-colors uppercase tracking-wider text-xs"
        >
          Contact Our Surveyors
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
