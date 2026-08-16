"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Target, Phone } from "lucide-react";

export default function ClearanceCard() {
  const credentials = [
    {
      title: "AAI NOCAS Portal",
      desc: "End-to-end online filing & obtaining height clearance NOC.",
      icon: ShieldCheck,
    },
    {
      title: "IAF Defense NOC",
      desc: "Liaison & coordinate audits near military airbases.",
      icon: Target,
    },
    {
      title: "WGS-84 DGPS Survey",
      desc: "Precision coordinate & AMSL height mapping.",
      icon: Award,
    },
  ];

  return (
    <div className="w-full max-w-[400px] lg:ml-auto lg:mr-0 mx-auto bg-slate-900/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-6">
      
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

      {/* Card Header */}
      <div className="space-y-1">
        <h3 className="font-poppins font-black text-lg sm:text-xl text-amber-400 text-gradient-gold uppercase tracking-wider block drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
          Aviation Safeguarding
        </h3>
        <p className="text-xs sm:text-sm font-inter font-semibold text-slate-300 leading-relaxed pt-0.5">
          One Stop Solutions for Aviation NOC from AAI/IAF
        </p>
      </div>

      {/* List items */}
      <div className="space-y-4">
        {credentials.map((cred, idx) => {
          const Icon = cred.icon;
          return (
            <motion.div
              whileHover={{ x: 4 }}
              key={idx}
              className="flex items-start space-x-3.5 bg-slate-950/60 p-4 rounded-xl border border-slate-900 transition-all duration-300 hover:border-secondary/20 cursor-default"
            >
              <div className="p-2 bg-slate-900 rounded-lg text-secondary border border-slate-800">
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-poppins font-bold text-sm text-white">{cred.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-inter">{cred.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Action Footer */}
      <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-xs">
        <div className="space-y-0.5 font-mono">
          <span className="text-slate-500 block uppercase text-[9px] tracking-wider">Expert Liaison</span>
          <span className="text-emerald-400 font-bold text-[10px]">● System Active</span>
        </div>
        <a 
          href="tel:9501689445" 
          className="flex items-center gap-1.5 bg-secondary hover:bg-secondary-light text-slate-950 px-3 py-1.5 rounded font-poppins font-bold transition-all text-xs"
        >
          <Phone className="w-3.5 h-3.5 animate-pulse text-slate-950" />
          <span>Call Now</span>
        </a>
      </div>

    </div>
  );
}
