"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function EsteemedClients() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const baseLogos = [
    {
      name: "Sebiz Skilling India",
      src: "/clients/sebiz.png",
      scale: "scale-90 sm:scale-95",
    },
    {
      name: "Sohana Hospitals",
      src: "/clients/sohana.png",
    },
    {
      name: "Fortis Hospital Mohali",
      src: "/clients/fortis.png",
    },
    {
      name: "The Medallion 82",
      src: "/clients/medallion.png",
    },
    {
      name: "Ananta Aspire",
      src: "/clients/ananta.png",
    },
    {
      name: "Atlantis",
      src: "/clients/atlantis.png",
      scale: "scale-90 sm:scale-95",
    },
    {
      name: "STJ Mohali Citi Centre",
      src: "/clients/mohali_citi.png",
    },
    {
      name: "Trishla",
      src: "/clients/trishla_v2.png",
    },
    {
      name: "Motiaz",
      src: "/clients/motiaz.png",
      scale: "scale-90 sm:scale-95",
    },
    {
      name: "Nirwana Group",
      src: "/clients/nirwana.png",
      scale: "scale-100 sm:scale-105",
    },
    {
      name: "MDB",
      src: "/clients/mdb.png",
      scale: "scale-95 sm:scale-100",
    },
    {
      name: "Vamana Group",
      src: "/clients/vamana.png",
      scale: "scale-95 sm:scale-100",
    },
    {
      name: "CRA Developers",
      src: "/clients/cra_nobg.png",
      scale: "scale-95 sm:scale-105",
      bg: "bg-slate-950 border border-amber-400/30",
    },
    {
      name: "KLV Group",
      src: "/clients/klv.png",
      scale: "scale-85 sm:scale-90",
    },
    {
      name: "Martell Buildwell",
      src: "/clients/martell_buildwell_nobg.png",
      scale: "scale-95 sm:scale-105",
      bg: "bg-slate-950 border border-amber-400/30",
    },
    {
      name: "Green Lotus",
      src: "/clients/green_lotus_nobg.png",
      scale: "scale-90 sm:scale-95",
      bg: "bg-slate-950 border border-emerald-500/30",
    },
    {
      name: "Pavitra Luxury Residences",
      src: "/clients/pavitra_nobg.png",
      scale: "scale-95 sm:scale-105",
      bg: "bg-gradient-to-br from-[#d6a53c] via-[#c49126] to-[#a37519] border border-amber-300/50 shadow-amber-900/20",
    },
    {
      name: "Highland Park",
      src: "/clients/highland_park_nobg.png",
      scale: "scale-95 sm:scale-105",
      bg: "bg-slate-950 border border-amber-400/30",
    },
    {
      name: "Highland LifeSpaces",
      src: "/clients/highland_lifespaces.png",
      scale: "scale-95 sm:scale-100",
    },
    {
      name: "Turnstone Realty",
      src: "/clients/turnstone_realty.png",
      scale: "scale-95 sm:scale-100",
    },
    {
      name: "SCL Lifesciences Limited",
      src: "/clients/scl_lifesciences.png",
      scale: "scale-95 sm:scale-100",
    },
    {
      name: "Affinity Belgravia",
      src: "/clients/affinity_belgravia_nobg.png",
      scale: "scale-95 sm:scale-100",
      bg: "bg-black border border-slate-800",
    },
    {
      name: "Cosmos Infraestate Pvt. Ltd.",
      src: "/clients/cosmos_infraestate.png",
      scale: "scale-95 sm:scale-100",
    },
    {
      name: "SBP Group",
      src: "/clients/sbp.png",
      scale: "scale-85 sm:scale-90",
    },
    {
      name: "JLPL",
      src: "/clients/jlpl.png",
      scale: "scale-85 sm:scale-90",
    },
    {
      name: "Suncity",
      src: "/clients/suncity.png",
      scale: "scale-85 sm:scale-90",
    },
    {
      name: "Amayra Real Estate Group",
      src: "/clients/amayra_v2.png",
      scale: "scale-90 sm:scale-95",
    },
    {
      name: "Homeland Heights",
      src: "/clients/homeland_new.png",
      scale: "scale-100 sm:scale-105",
    },
    {
      name: "Unity Group",
      src: "/clients/unity.png",
      scale: "scale-100 sm:scale-110",
    },
    {
      name: "Larsen & Toubro",
      src: "/clients/larsen_toubro.png",
      scale: "scale-100 sm:scale-105",
    },
    {
      name: "Netsmartz",
      src: "/clients/netsmartz.png",
      scale: "scale-100 sm:scale-105",
    },
    {
      name: "Thapar Institute of Engineering & Technology",
      src: "/clients/thapar.png",
      scale: "scale-85 sm:scale-90",
    },
    {
      name: "The Phoenix Mills Limited",
      src: "/clients/phoenix_mills.png",
      scale: "scale-95 sm:scale-105",
    },
    {
      name: "EVCO",
      src: "/clients/evco_v2.png",
      scale: "scale-100 sm:scale-105",
    },
    {
      name: "Gulzar Group of Institutes",
      src: "/clients/ggi.png",
      scale: "scale-95 sm:scale-105",
    },
    {
      name: "Tata Memorial Hospital",
      src: "/clients/tata_memorial_v2.png",
      scale: "scale-100 sm:scale-105",
    },
    {
      name: "VVIP Group",
      src: "/clients/vvip.png",
      scale: "scale-85 sm:scale-90",
    },
    {
      name: "HLP Group",
      src: "/clients/hlp_group.png",
      scale: "scale-95 sm:scale-100",
    },
    {
      name: "Gillco Group",
      src: "/clients/gillco.png",
      scale: "scale-100 sm:scale-105",
    },
    {
      name: "GB Realty",
      src: "/clients/gb_realty_nobg.png",
      scale: "scale-95 sm:scale-105",
      bg: "bg-gradient-to-b from-[#014988] to-[#01376e] border border-blue-400/30",
    },
    {
      name: "Toppan Speciality Films",
      src: "/clients/toppan.png",
      scale: "scale-100 sm:scale-105",
    },
    {
      name: "KS One-O-8",
      src: "/clients/ks_one_o_8_v2.png",
      scale: "scale-90 sm:scale-95",
    },
    {
      name: "Hero Homes",
      src: "/clients/hero_homes.png",
      scale: "scale-100 sm:scale-105",
    },
    {
      name: "Landchester Group",
      src: "/clients/landchester.png",
      scale: "scale-85 sm:scale-90",
    },
    {
      name: "Infosys",
      src: "/clients/infosys.png",
      scale: "scale-100 sm:scale-105",
    },
    {
      name: "HBCHRC, New Chandigarh",
      src: "/clients/hbchrc.png",
      scale: "scale-90 sm:scale-95",
    },
  ];

  const displayLogos = [...baseLogos, ...baseLogos];

  useEffect(() => {
    let animationFrameId: number;

    const autoScroll = () => {
      if (scrollRef.current && !isDragging.current && !isHovered.current) {
        scrollRef.current.scrollLeft += 5.0;
        const halfScroll = scrollRef.current.scrollWidth / 2;
        if (scrollRef.current.scrollLeft >= halfScroll) {
          scrollRef.current.scrollLeft -= halfScroll;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center md:text-left">
        <div className="space-y-3 max-w-2xl">
          <span className="inline-block mb-3 text-xs font-poppins font-bold text-secondary tracking-widest uppercase bg-secondary/10 py-1.5 px-4 rounded-full border border-secondary/20">
            Trusted Partners
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-5xl text-white tracking-wider uppercase">
            OUR ESTEEMED CLIENTS
          </h2>
          <p className="text-slate-400 font-inter text-sm sm:text-base">
            Proud to assist leading developers, healthcare groups, IT giants, corporate hubs, and institutions with seamless Airport Height Clearances.
          </p>
        </div>
      </div>

      {/* Manual Scroll Container */}
      <div className="relative w-full bg-slate-900/90 border-y border-amber-400/20 py-8 shadow-2xl backdrop-blur-md">
        {/* Soft edge gradient fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0a0f1d] via-[#0a0f1d]/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0a0f1d] via-[#0a0f1d]/70 to-transparent z-10 pointer-events-none" />

        {/* Interactive Track (Supports Auto-Scroll, Manual Drag, Touch, Hover Pause & Click Arrows) */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={() => {
            isHovered.current = false;
            handleMouseLeaveOrUp();
          }}
          onMouseEnter={() => (isHovered.current = true)}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className="flex space-x-6 sm:space-x-8 overflow-x-auto px-6 sm:px-16 py-2 select-none cursor-grab active:cursor-grabbing no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayLogos.map((client, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center p-3 sm:p-4 rounded-2xl shadow-xl transition-all duration-300 w-64 sm:w-80 h-36 sm:h-44 shrink-0 group cursor-pointer overflow-hidden hover:shadow-2xl hover:scale-105 ${
                client.bg || "bg-white border border-slate-200/90"
              }`}
            >
              <div className={`relative w-full h-full flex items-center justify-center ${client.scale || "scale-95 sm:scale-100"}`}>
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
