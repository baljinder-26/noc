"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Award, 
  MapPin, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  Compass, 
  Wrench, 
  Sparkles,
  Phone,
  FileText
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HelipadApprovalPage() {
  const steps = [
    { title: "Touchdown & Lift-off Area (TLOF) Design", desc: "Design guidelines for size, strength, and loading specifications (especially critical for rooftop structures to handle the structural load of varying helicopter weights)." },
    { title: "Final Approach & Take-off Area (FATO) Selection", desc: "Ensuring FATO dimensions align with standard clearances to prevent obstacle collisions during entry and exit maneuvers." },
    { title: "Aviation Lighting & Visual Aids", desc: "Configuration of helipad beacon, perimeter lighting, floodlights, wind direction indicators, and structural obstruction markers for night operations." },
    { title: "Safety Netting & Fire Fighting Standards", desc: "Deploying perimeter safety nets, structural slopes for fuel runoff, and specialized fire extinguishing gear as required by Civil Aviation Regulations." },
  ];

  return (
    <>
      <Navbar />

      {/* Subpage Hero Banner */}
      <section className="relative pt-32 pb-16 bg-slate-950 text-white overflow-hidden border-b border-slate-900">
        {/* Background Image overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Helipad Approvals Consultancy"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-poppins font-bold text-secondary hover:text-white transition-colors mb-6 uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl text-white leading-tight mb-4">
              DGCA Helipad Approval & Design
            </h1>
            <p className="font-inter text-slate-400 text-sm sm:text-base leading-relaxed">
              End-to-end consultancy for obtaining DGCA approvals for ground and rooftop helipads, covering feasibility studies, architectural layouts, and safety audits.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-16 bg-[#0a0f1d] text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Detailed description text */}
            <div className="lg:col-span-8 space-y-8 font-inter leading-relaxed text-sm sm:text-base">
              
              <div className="space-y-4">
                <h2 className="font-poppins font-extrabold text-2xl text-white flex items-center gap-2">
                  <Award className="w-6 h-6 text-secondary shrink-0" />
                  Rooftop & Ground Helipad Consultancy
                </h2>
                <p className="text-slate-400">
                  A helipad is a crucial facility for hospitals, corporate offices, industrial hubs, and private estates. However, setting up a functional, licensed helipad requires strict adherence to physical characteristics, obstacle limitations, and visual aids specified by the Directorate General of Civil Aviation (DGCA) under Civil Aviation Requirements (CAR).
                </p>
                <p className="text-slate-300 font-medium">
                  High Rise Approvals provides complete design, engineering support, and licensing consultancy. Whether you are building a rooftop helipad for emergency medical evacuations (HEMS) or a ground helipad for VIP transit at industrial sites, we guide your engineering teams from initial blueprinting to final DGCA inspection and approval.
                </p>
              </div>

              {/* Design specifications */}
              <div className="space-y-4 pt-4">
                <h3 className="font-poppins font-bold text-lg text-white flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-secondary animate-pulse" />
                  Helipad Design Assistance & Specifications
                </h3>
                <p className="text-sm text-slate-400">
                  We assist architectural and structural design teams in configuring helipads that meet safety audits. Our key design inputs cover:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {steps.map((step, idx) => (
                    <div key={idx} className="glass-card p-5 rounded-xl border border-white/5 space-y-2">
                      <div className="flex items-center space-x-2 text-secondary">
                        <Sparkles className="w-4 h-4 shrink-0" />
                        <h4 className="font-poppins font-bold text-sm text-white">{step.title}</h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* DGCA Certification support */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-900 space-y-4">
                <h3 className="font-poppins font-bold text-lg text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-secondary animate-pulse" />
                  Complete DGCA Certification Support
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Getting the helipad designed is only half the battle. Obtaining the operational license involves submitting exhaustive dossiers, coordinate survey certificates, firefighting plans, obstacle clearances, and conducting physical inspection audits with DGCA officers.
                </p>
                <p className="text-xs sm:text-sm text-slate-400">
                  We prepare the complete application dossier, compile coordinate clearance certificates, coordinate with air traffic control (ATC) departments for airspace integration, and assist developers during physical inspection visits to ensure zero delay in certificate releases.
                </p>
              </div>

            </div>

            {/* Sidebar with Quick Contact & Steps */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Helipad Categories */}
              <div className="p-6 rounded-2xl glass-card border border-white/5 shadow-lg space-y-4">
                <h3 className="font-poppins font-bold text-base text-white border-b border-slate-900 pb-2 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-secondary" />
                  Helipad Services
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <strong className="text-slate-300">Rooftop Helipad Approvals</strong>
                      <p className="text-slate-500">Hospital trauma cells (HEMS), corporate towers, and high-rise structures.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <strong className="text-slate-300">Ground Helipad Licensing</strong>
                      <p className="text-slate-500">VIP transits, power plants, manufacturing complexes, and private villas.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <strong className="text-slate-300">Technical Audits & Manuals</strong>
                      <p className="text-slate-500">Drafting of Standard Operating Procedures (SOPs) and safety manuals.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Consultation Card */}
              <div className="p-6 rounded-2xl glass-card-dark border border-secondary/20 text-white space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-poppins font-bold text-secondary uppercase tracking-widest block font-mono">
                    QUICK CONSULTATION
                  </span>
                  <h3 className="font-poppins font-bold text-lg text-white">
                    Need DGCA Helipad NOC?
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our team provides pre-feasibility analysis, DGPS surveying, and completes the entire portal filing process. Let our aviation experts handle your clearance.
                  </p>
                </div>
                
                <div className="space-y-3 border-t border-white/10 pt-4 text-xs font-mono">
                  <a href="tel:9501689445" className="flex items-center space-x-3 text-white hover:text-secondary transition-colors">
                    <Phone className="w-4 h-4 text-secondary animate-pulse" />
                    <span className="font-semibold">+91 95016 89445</span>
                  </a>
                  <a href="mailto:highriseapprovals@gmail.com" className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                    <FileText className="w-4 h-4 text-secondary" />
                    <span className="break-all font-semibold">highriseapprovals@gmail.com</span>
                  </a>
                </div>

                <Link
                  href="/#contact"
                  className="block text-center w-full py-2.5 bg-secondary hover:bg-secondary-light text-slate-950 font-poppins font-bold text-xs uppercase rounded transition-all"
                >
                  Get Free Consultation
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
