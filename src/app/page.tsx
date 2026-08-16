"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Award, 
  Briefcase, 
  FileCheck2, 
  Building,
  Target,
  Plane,
  FileText,
  UserCheck,
  Zap,
  Gauge
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Counter from "@/components/Counter";
import ProcessWizard from "@/components/ProcessWizard";
import ProjectPortfolio from "@/components/ProjectPortfolio";
import InteractiveMap from "@/components/InteractiveMap";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";
import ClearanceCard from "@/components/ClearanceCard";
import HeightCalculator from "@/components/HeightCalculator";

// Animation Variants for Scroll Reveals
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
} as const;

export default function Home() {
  // Why Choose Us list
  const whyChooseUs = [
    { title: "30+ Years Aviation Experience", desc: "Decades of active operational expertise in the aviation sector." },
    { title: "300+ Successfully Completed Projects", desc: "Proven track record of obtaining clearances for tall structures." },
    { title: "Highly Experienced Professionals", desc: "A team of retired officers and active aviation surveyors." },
    { title: "End-to-End Consultancy", desc: "From preliminary site feasibility check to final NOC procurement." },
    { title: "Drone Survey Experts", desc: "Using advanced UAVs to collect detailed topographical data." },
    { title: "WGS-84 Survey Specialists", desc: "DGPS measurements in accordance with strict government criteria." },
    { title: "Geo-Spatial Mapping", desc: "Precise digital models representing structural coordinates." },
    { title: "Fast Documentation Support", desc: "Preventing rejection or delay due to structural paperwork errors." },
    { title: "DGCA Compliance", desc: "Aligning designs and clearance files with Civil Aviation guidelines." },
    { title: "AAI & IAF Approval Assistance", desc: "Expert navigation through military and civil clearance channels." },
    { title: "NOCAS Portal Management", desc: "Accurate online drafting and file management for AAI cases." },
    { title: "Pan India Services", desc: "Surveys and technical consultancy available throughout the country." },
  ];

  // Services list
  const services = [
    { title: "Airport Height Clearance Consultancy", desc: "Professional guidance for obtaining Airport Height Clearance approvals from AAI and IAF wherever applicable." },
    { title: "Aviation Site Evaluation", desc: "Preliminary feasibility assessment before project planning to detect height limitations." },
    { title: "WGS-84 Aviation Survey", desc: "Accurate aviation coordinate surveys using dual-frequency DGPS under WGS-84 standards." },
    { title: "Geo-Spatial Survey", desc: "High precision geo-spatial mapping for aviation safety compliance and structural data." },
    { title: "Drone Survey & Mapping", desc: "Professional drone surveys for accurate site data collection and aerial grids." },
    { title: "CNS & OLS Assessment", desc: "Communication, Navigation & Surveillance analysis together with Obstacle Limitation Surface assessment." },
    { title: "NOCAS Portal Management", desc: "Preparation, submission, and continuous monitoring of Airport Clearance applications." },
    { title: "Aeronautical Studies", desc: "Professional aviation studies for complex approval cases requiring shielding or calculations." },
    { title: "Renewal & Revalidation", desc: "Airport Clearance renewal, revalidation, and structural modification consultancy." },
    { title: "Appeals & Technical Representation", desc: "Professional support for technical reviews and AAI appellate committee processes." },
  ];

  // Why Clearance is Important
  const importanceItems = [
    { title: "Aviation Safety Compliance", desc: "Prevents structures from intruding into aircraft navigation paths." },
    { title: "Government Regulatory Compliance", desc: "Ensures legal operations as mandated by Civil Aviation rules." },
    { title: "Prevents Construction Delays", desc: "Procuring NOCs early keeps project milestones on schedule." },
    { title: "Reduces Legal Risks", desc: "Avoids demotion orders or litigation regarding height violations." },
    { title: "Essential for Municipal Approvals", desc: "Most local authorities require the NOC to release build permits." },
    { title: "Protects Project Investments", desc: "Securing approvals safeguards developers against structural changes." },
    { title: "Ensures Safe Air Navigation", desc: "Aids nearby airports in maintaining clean radar and ILS profiles." },
    { title: "Supports Faster Project Execution", desc: "Smooth liaison speeds up building clearances and final handovers." },
  ];

  const testimonials = [
    {
      quote: "High Rise Approvals made a very complex IAF and AAI clearance process look simple. Their technical drone survey was highly professional, and they got our height clearance NOC without a single query from the board.",
      author: "Harish Garg",
      role: "Director, Garg Developers & Builders"
    },
    {
      quote: "For our multi-specialty hospital tower, obtaining the Airport Height NOC was critical for construction. The team provided expert aeronautical survey assistance and successfully navigated the complete AAI clearance process. Their aviation background is visible in their work.",
      author: "Dr. Sandeep Mehra",
      role: "Managing Trustee, Apollo-Grace Healthcare Group"
    },
    {
      quote: "We were facing a critical rejection due to radar obstacle limitation. High Rise Approvals conducted an aeronautical study and successfully represented our case to the Appellate Committee. Highly recommended!",
      author: "Vikas Sharma",
      role: "Vice President of Infrastructure, Apex Telecom"
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section - Split Interactive Redesign */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-36 sm:pt-40 lg:pt-44 pb-16">
        
        {/* Background Image & Soft Vignette */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/hero-bg.jpg"
            alt="Aviation Clearances High Rise Building Background"
            fill
            priority
            quality={100}
            className="object-cover object-[68%_20%] opacity-100 filter brightness-115 contrast-105 saturate-110"
          />
          {/* Light gradient vignette focused on left side text contrast, leaving top right sky with aeroplane 100% bright & clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Call to Action */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/35 text-secondary px-4 py-2 rounded-full mb-2"
              >
                <ShieldCheck className="w-4.5 h-4.5 text-secondary animate-pulse" />
                <span className="text-[10px] sm:text-xs font-poppins font-extrabold uppercase tracking-widest">
                  Aviation Clearance Specialists
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-poppins font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)]"
              >
                India's Trusted Aviation Clearance & <span className="text-gradient-gold font-black">Airport Approval</span> Consultants
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-inter text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
              >
                Providing end-to-end consultancy for obtaining Airport Height Clearance approvals from AAI and IAF (where applicable), along with WGS-84 Surveys, Geo-Spatial Mapping, CNS/OLS Assessments, Aeronautical Studies, and NOCAS Portal Management.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-gold text-slate-950 font-poppins font-bold text-sm tracking-wider uppercase rounded shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 text-center hover:scale-[1.01]"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/#about"
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-poppins font-bold text-sm tracking-wider uppercase rounded border border-white/10 transition-all duration-300 text-center"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>

            {/* Right Side: Clearance Card box aligned straight to extreme right edge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex justify-end pt-12 lg:pt-28 w-full"
            >
              <ClearanceCard />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Statistics Section (Floating Overlay Layout) */}
      <section className="relative z-30 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card-dark rounded-2xl shadow-2xl border border-amber-400/25 p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center text-center border-r border-slate-800/80 pr-4 lg:pr-8">
            <Counter value={250} suffix="+" />
            <span className="font-poppins font-extrabold text-xs sm:text-sm text-slate-200 uppercase tracking-wider mt-2.5">
              Projects Successfully Delivered
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center lg:border-r border-slate-800/80 pr-4 lg:pr-8">
            <Counter value={30} suffix="+" />
            <span className="font-poppins font-extrabold text-xs sm:text-sm text-slate-200 uppercase tracking-wider mt-2.5">
              Years of Aviation Experience
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center border-r border-slate-800/80 pr-4 last:border-0 pr-4 lg:pr-8">
            <Counter value={100} suffix="%" />
            <span className="font-poppins font-extrabold text-xs sm:text-sm text-slate-200 uppercase tracking-wider mt-2.5">
              Dedicated Support
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-poppins font-black text-3xl sm:text-5xl text-amber-400 text-gradient-gold drop-shadow-[0_2px_10px_rgba(245,158,11,0.4)]">Pan India</span>
            <span className="font-poppins font-extrabold text-xs sm:text-sm text-slate-200 uppercase tracking-wider mt-2.5">
              Service Coverage
            </span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* About Info Left */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs font-poppins font-bold text-secondary tracking-widest uppercase bg-secondary/10 py-1 px-3.5 rounded-full border border-secondary/20">
                Aviation clearance experts
              </span>
              <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white leading-tight">
                About High Rise Approvals
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-400 leading-relaxed font-inter">
                <p>
                  High Rise Approvals is a specialized aviation consultancy providing professional assistance for Airport Height Clearance approvals and aviation compliance across India.
                </p>
                <p className="font-medium text-white">
                  With more than two and a half decades of diverse aviation experience, our founder has served in key aviation appointments, including heading Airport NOC Cells at various aviation stations.
                </p>
                <p>
                  Following retirement, High Rise Approvals was established with a team of experienced aviation professionals dedicated to simplifying the complex Airport Clearance process for builders, developers, industries, architects, telecom companies, hospitals, educational institutions, and infrastructure projects.
                </p>
                <p>
                  We provide comprehensive consultancy including technical surveys, geo-spatial mapping, WGS-84 surveys, CNS/OLS assessments, aeronautical studies, application management, documentation support, and liaison assistance to help clients obtain approvals from the relevant government authorities.
                </p>
              </div>
            </motion.div>

            {/* About Image Right */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative w-full aspect-square sm:aspect-video lg:aspect-square overflow-hidden rounded-2xl shadow-lg border border-slate-800"
            >
              <Image
                src="/service-ref.png"
                alt="Obstacle limitation blueprint and runways"
                fill
                className="object-cover animate-float-airplane"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white p-5 glass-card-dark rounded-xl border border-secondary/20 shadow-xl">
                <h4 className="font-poppins font-bold text-sm text-secondary mb-1 flex items-center gap-1.5 font-mono">
                  <Zap className="w-4 h-4 text-secondary animate-pulse" />
                  OLS ENGINEERING ENVELOPES
                </h4>
                <p className="text-xs text-slate-300 font-inter">
                  Calculating complex obstacle envelopes and navigation paths around restricted airport grids.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Experience Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-b border-slate-900">
        {/* Decorative background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <div className="w-16 h-16 bg-white/5 rounded-full border border-secondary flex items-center justify-center mx-auto shadow-inner text-secondary">
              <UserCheck className="w-8 h-8" />
            </div>
            <span className="text-xs font-poppins font-bold text-secondary uppercase tracking-widest">
              Distinguished Leadership
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white">
              Leadership Built on Aviation Excellence
            </h2>
            <div className="space-y-4 font-inter text-slate-400 text-sm sm:text-base leading-relaxed">
              <p>
                Our founder brings more than 25 years of distinguished experience in the aviation sector, including heading Airport NOC Cells at multiple aviation stations.
              </p>
              <p className="text-white font-medium italic border-l-4 border-secondary pl-4 my-6 text-left max-w-2xl mx-auto bg-white/5 py-4 pr-4 rounded-r">
                &ldquo;This extensive operational experience provides unmatched understanding of aviation regulations, obstacle limitation requirements, airport safeguarding, and aviation safety compliance.&rdquo;
              </p>
              <p>
                Today, this knowledge is combined with a dedicated team of aviation professionals delivering precise surveys, technical studies, documentation, and regulatory consultancy for Airport Height Clearance NOCs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-poppins font-bold text-secondary tracking-widest uppercase bg-secondary/10 py-1 px-3.5 rounded-full border border-secondary/20">
              Why developers trust us
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white">
              Why Choose High Rise Approvals
            </h2>
            <p className="text-slate-400 font-inter text-sm sm:text-base">
              Simplifying the complex aviation clearance process across India with unmatched precision, speed, and corporate transparency.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                key={idx}
                className="glass-card p-6 rounded-xl border border-white/5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-secondary/20 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-950 text-secondary border border-slate-900 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-slate-950 transition-colors">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-poppins font-bold text-sm sm:text-base text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-inter">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-poppins font-bold text-secondary tracking-widest uppercase bg-secondary/10 py-1 px-3.5 rounded-full border border-secondary/20">
              Aviation Consultancy Solutions
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white">
              Our Core Services
            </h2>
            <p className="text-slate-400 font-inter text-sm sm:text-base">
              Providing end-to-end technical surveys, mathematical CNS modeling, documentation, and regulatory licensing support for airspaces.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((srv, idx) => (
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                key={idx}
                className="glass-card p-6 rounded-xl border border-white/5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-secondary/30 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-slate-950 text-secondary border border-slate-900 flex items-center justify-center group-hover:bg-secondary group-hover:text-slate-950 transition-all">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-poppins font-bold text-slate-500 group-hover:text-secondary transition-colors">
                      SERVICE {idx + 1}
                    </span>
                  </div>
                  <h3 className="font-poppins font-bold text-base text-white mb-2 group-hover:text-secondary transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-inter">
                    {srv.desc}
                  </p>
                </div>
                {/* Specific link for Airport Height Clearance if matching */}
                <div className="mt-4 pt-4 border-t border-slate-900 flex justify-end">
                  {srv.title.includes("Airport Height") ? (
                    <Link href="/airport-noc" className="text-xs font-poppins font-bold text-secondary hover:text-white flex items-center gap-1 transition-colors">
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Height Clearance Calculator Widget section */}
      <section className="py-24 bg-[#0a0f1d] border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeightCalculator />
        </div>
      </section>

      {/* Airport Height Clearance Info Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info Left */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-poppins font-bold text-secondary tracking-widest uppercase bg-secondary/10 py-1 px-3.5 rounded-full border border-secondary/20">
                Regulatory Background
              </span>
              <h2 className="font-poppins font-extrabold text-3xl text-white leading-tight">
                What is Airport Height Clearance?
              </h2>
              <div className="space-y-4 text-sm text-slate-400 leading-relaxed font-inter">
                <p>
                  Airport Height Clearance is a regulatory approval required before constructing buildings, telecom towers, industrial structures, chimneys, hospitals, educational institutions, commercial complexes, and other tall structures located within safeguarded airspace around airports.
                </p>
                <p className="font-medium text-white">
                  The approval ensures that proposed structures do not interfere with aircraft operations or compromise aviation safety.
                </p>
                <p>
                  Depending on the location, approvals may involve:
                </p>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Airports Authority of India (AAI)
                  </li>
                  <li className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Indian Air Force (IAF)
                  </li>
                  <li className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Directorate General of Civil Aviation (DGCA)
                  </li>
                </ul>
                <div className="p-4 bg-amber-950/20 border border-amber-500/25 rounded-xl mt-4">
                  <p className="text-xs text-amber-300 leading-relaxed font-medium">
                    <strong>Disclaimer:</strong> High Rise Approvals does not issue government approvals. We provide complete consultancy, technical surveys, documentation, application management, and professional assistance to help clients obtain approvals from the relevant authorities.
                  </p>
                </div>
              </div>
            </div>

            {/* Info Right (Why Clearance is Important) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border-b border-slate-900 pb-4 mb-4">
                <h3 className="font-poppins font-extrabold text-xl text-white">
                  Why Airport Height Clearance is Important
                </h3>
                <p className="text-xs text-slate-500 font-inter mt-1">
                  Benefits and necessity of securing NOC clearances before layout planning.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {importanceItems.map((item, idx) => (
                  <div key={idx} className="glass-card p-5 rounded-xl border border-white/5 flex gap-3 shadow-md hover:shadow-xl transition-shadow">
                    <div className="p-2 rounded bg-slate-950 text-secondary border border-slate-900 shrink-0 h-fit">
                      <FileCheck2 className="w-4.5 h-4.5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-bold text-sm text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section - Interactive ProcessWizard */}
      <section className="py-24 bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-poppins font-bold text-secondary tracking-widest uppercase bg-secondary/10 py-1 px-3.5 rounded-full border border-secondary/20">
              Clearance Workflow
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white">
              Our 10-Step Process
            </h2>
            <p className="text-slate-400 font-inter text-sm sm:text-base">
              Explore our structured interactive pipeline representing key tasks and timelines, from meeting to NOC handover.
            </p>
          </div>

          <ProcessWizard />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-poppins font-bold text-secondary tracking-widest uppercase bg-secondary/10 py-1 px-3.5 rounded-full border border-secondary/20">
              Consultancy Portfolio
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white">
              Projects Successfully Delivered
            </h2>
            <p className="text-slate-400 font-inter text-sm sm:text-base">
              Highlighting height clearances, coordinate mapping and FAA/AAI certifications secured for various build structures.
            </p>
          </div>

          <ProjectPortfolio />
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="py-24 bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-poppins font-bold text-secondary tracking-widest uppercase bg-secondary/10 py-1 px-3.5 rounded-full border border-secondary/20">
              Active Regional Operations
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white">
              Serving Clients Across India
            </h2>
            <p className="text-slate-400 font-inter text-sm sm:text-base">
              High Rise Approvals coordinates with civil aviation headquarters and airbases across Northern and Central India.
            </p>
          </div>

          <InteractiveMap />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-poppins font-bold text-secondary tracking-widest uppercase bg-secondary/10 py-1 px-3.5 rounded-full border border-secondary/20">
              Client Feedback
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl border border-white/5 shadow-lg flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
                <p className="text-sm text-slate-400 font-inter italic leading-relaxed mb-6">
                  &ldquo;{test.quote}&rdquo;
                </p>
                <div className="border-t border-slate-900 pt-4 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-secondary font-poppins font-bold text-sm flex items-center justify-center border border-secondary/30 shrink-0">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm text-white leading-tight">
                      {test.author}
                    </h4>
                    <p className="text-xs text-slate-500 font-inter">
                      {test.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-poppins font-bold text-secondary tracking-widest uppercase bg-secondary/10 py-1 px-3.5 rounded-full border border-secondary/20">
              Frequently Asked Questions
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white">
              Airport NOC & Height Clearances FAQ
            </h2>
            <p className="text-slate-400 font-inter text-sm sm:text-base">
              Clear answers regarding obstacle rules, height boundaries, and consultancy services.
            </p>
          </div>

          <FaqSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details Left */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-poppins font-bold text-secondary tracking-widest uppercase bg-secondary/10 py-1 px-3.5 rounded-full border border-secondary/20">
                  Contact details
                </span>
                <h2 className="font-poppins font-extrabold text-3xl text-white mt-3">
                  High Rise Approvals
                </h2>
                <p className="text-sm text-slate-400 font-inter mt-1 leading-relaxed">
                  Complete Aviation Clearance & Airport Approval Consultancy. Get in touch with our aeronautical experts to secure your clearances.
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start space-x-4 bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
                  <div className="p-3 rounded-lg bg-slate-950 text-secondary border border-slate-800 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm text-white">Enquiries Phone</h4>
                    <a href="tel:9501689445" className="text-sm text-slate-400 hover:text-secondary transition-colors font-medium">
                      +91 95016 89445
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
                  <div className="p-3 rounded-lg bg-slate-950 text-secondary border border-slate-800 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm text-white">Official Email</h4>
                    <a href="mailto:highriseapprovals@gmail.com" className="text-sm text-slate-400 hover:text-secondary transition-colors font-medium break-all">
                      highriseapprovals@gmail.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4 bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
                  <div className="p-3 rounded-lg bg-slate-950 text-secondary border border-slate-800 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm text-white">Business Hours</h4>
                    <p className="text-sm text-slate-400">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Static Map representation or visual */}
              <div className="w-full h-48 rounded-xl border border-slate-800 overflow-hidden relative shadow-inner bg-slate-950 flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:20px_20px] opacity-5" />
                <div className="relative z-10 text-center p-6">
                  <MapPin className="w-8 h-8 text-secondary mx-auto mb-2 animate-bounce" />
                  <h4 className="font-poppins font-bold text-sm text-white">Consulting Office Sector</h4>
                  <p className="text-xs text-slate-500 font-inter mt-0.5">
                    Liaison Cells & Surveyor Hubs in Northern Capital Zone
                  </p>
                  <p className="text-[10px] font-bold text-slate-950 bg-secondary py-1 px-3.5 rounded-full mt-3 w-fit mx-auto">
                    Pan India Support Active
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Lead form Right */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
