"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  MapPin, 
  ArrowLeft, 
  FileText, 
  CheckCircle2, 
  Compass, 
  Activity, 
  Building2, 
  Phone 
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AirportNocPage() {
  const requirements = [
    { title: "WGS-84 Coordinate Survey", desc: "A mandatory high-precision GPS coordinate measurement conducted by dual frequency DGPS receivers to establish exact latitude, longitude, and elevation above mean sea level (AMSL) of the proposed site." },
    { title: "Obstacle Limitation Surface (OLS) Analysis", desc: "Verification against takeoff climb, approach, inner horizontal, conical, and transitional surfaces surrounding the runway to ensure no penetration of flight envelopes." },
    { title: "CNS Assessment", desc: "Evaluating if the building structure causes electromagnetic blockages or reflections for Communication, Navigation, and Surveillance radar/beacons (like DVOR, ILS, and radars)." },
    { title: "Shielding Benefit Study", desc: "In cases where a tall structure is located behind an existing higher building/hill, shielding criteria under AAI rules may grant additional allowable height." },
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
            alt="Airport NOC Consultancy"
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
              Airport Height Clearance NOC
            </h1>
            <p className="font-inter text-slate-400 text-sm sm:text-base leading-relaxed">
              Navigating Airports Authority of India (AAI) and Indian Air Force (IAF) clearances for high-rise buildings, towers, chimneys, and critical structures in safeguarded airspaces.
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
                  <ShieldCheck className="w-6 h-6 text-secondary shrink-0" />
                  What is Airport Height Clearance?
                </h2>
                <p className="text-slate-400">
                  Any structure constructed within a predefined radius of an airport or a defense radar base requires a height clearance certificate. This is to guarantee that the structure does not interfere with the safety path of incoming and outgoing flights, or block vital radio and navigation signals.
                </p>
                <p className="text-slate-300 font-medium">
                  High Rise Approvals offers specialized consulting services to handle the complex, data-driven application cycle. We help you obtain height approvals for all categories of structures including residential complexes, commercial zones, chimneys, telecom masts, hospitals, and public facilities.
                </p>
              </div>

              {/* Technical Survey Details */}
              <div className="space-y-4 pt-4">
                <h3 className="font-poppins font-bold text-lg text-white">
                  Critical Survey Requirements & Parameters
                </h3>
                <p className="text-sm text-slate-400">
                  Obtaining an Airport NOC is not just administrative; it relies on accurate geographical calculations. The regulatory bodies evaluate applications based on the following surveys and assessments:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {requirements.map((req, idx) => (
                    <div key={idx} className="glass-card p-5 rounded-xl border border-white/5 space-y-2">
                      <div className="flex items-center space-x-2 text-secondary">
                        <Compass className="w-5 h-5 shrink-0" />
                        <h4 className="font-poppins font-bold text-sm text-white">{req.title}</h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{req.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aeronautical Studies info */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-900 space-y-4">
                <h3 className="font-poppins font-bold text-lg text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-secondary animate-pulse" />
                  Detailed Aeronautical Studies & Appeals
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  If the initial calculation results in a height restriction that impacts your project viability, all is not lost. The Airports Authority of India allows developers to request a detailed **Aeronautical Study**.
                </p>
                <p className="text-xs sm:text-sm text-slate-400">
                  These studies calculate parameters using advanced airspace simulation software to verify if a slightly higher building can be allowed without compromising safety (for example, by utilizing shielding benefits or alternative flight corridors). We prepare the calculations, draft the appeal documents, and represent our clients' cases in hearings before the Appellate Committee.
                </p>
              </div>

            </div>

            {/* Sidebar with Quick Contact & Steps */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Authorities Card */}
              <div className="p-6 rounded-2xl glass-card border border-white/5 shadow-lg space-y-4">
                <h3 className="font-poppins font-bold text-base text-white border-b border-slate-900 pb-2 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-secondary" />
                  Involved Authorities
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <strong className="text-slate-300">AAI (Airports Authority of India)</strong>
                      <p className="text-slate-500">For all commercial and civil airports throughout India.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <strong className="text-slate-300">Indian Air Force (IAF)</strong>
                      <p className="text-slate-500">For airbases, defense zones, and military airspace sectors.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <strong className="text-slate-300">DGCA</strong>
                      <p className="text-slate-500">For policy guidelines, licenses, and safety certifications.</p>
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
                    Need Airport NOC Clearance?
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
