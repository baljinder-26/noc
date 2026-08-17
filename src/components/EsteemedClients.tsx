"use client";

import Image from "next/image";

export default function EsteemedClients() {
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
      src: "/clients/trishla.png",
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
      scale: "scale-120 sm:scale-130",
    },
    {
      name: "Vamana Group",
      src: "/clients/vamana.png",
      scale: "scale-120 sm:scale-130",
    },
    {
      name: "CRA Developers",
      src: "/clients/cra.png",
      scale: "scale-120 sm:scale-130",
    },
    {
      name: "KLV Group",
      src: "/clients/klv.png",
      scale: "scale-120 sm:scale-130",
    },
    {
      name: "Martell Cognac",
      src: "/clients/martell.png",
      scale: "scale-100 sm:scale-110",
    },
    {
      name: "SBP Group",
      src: "/clients/sbp.png",
      scale: "scale-100 sm:scale-110",
    },
    {
      name: "JLPL",
      src: "/clients/jlpl.png",
      scale: "scale-100 sm:scale-110",
    },
    {
      name: "Suncity",
      src: "/clients/suncity.png",
      scale: "scale-100 sm:scale-110",
    },
    {
      name: "Amayra Trillium",
      src: "/clients/amayra.png",
      scale: "scale-100 sm:scale-110",
    },
    {
      name: "Homeland Heights",
      src: "/clients/homeland.png",
      scale: "scale-100 sm:scale-110",
    },
    {
      name: "Unity Group",
      src: "/clients/unity.png",
      scale: "scale-100 sm:scale-110",
    },

  ];

  // Repeat 2 times for seamless continuous marquee scrolling across 28 cards
  const logos = [
    ...baseLogos,
    ...baseLogos
  ];

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-poppins font-bold text-secondary tracking-widest uppercase bg-secondary/10 py-1.5 px-4 rounded-full border border-secondary/20">
          Trusted Partners
        </span>
        <h2 className="font-poppins font-extrabold text-3xl sm:text-5xl text-white tracking-wider uppercase">
          OUR ESTEEMED CLIENTS
        </h2>
        <p className="text-slate-400 font-inter text-sm sm:text-base max-w-xl mx-auto">
          Proud to assist leading developers, healthcare groups, IT giants, corporate hubs, and institutions with seamless Airport Height Clearances.
        </p>
      </div>

      {/* Moving Marquee Container */}
      <div className="relative w-full overflow-hidden bg-slate-900/90 border-y border-amber-400/20 py-10 shadow-2xl backdrop-blur-md">
        {/* Soft edge gradient fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#0a0f1d] via-[#0a0f1d]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#0a0f1d] via-[#0a0f1d]/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex w-max space-x-6 sm:space-x-10 animate-marquee">
          {logos.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-200/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 w-64 sm:w-84 h-36 sm:h-44 shrink-0 group cursor-pointer overflow-hidden"
            >
              <div className={`relative w-full h-full flex items-center justify-center ${client.scale || "scale-95 sm:scale-100"}`}>
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
