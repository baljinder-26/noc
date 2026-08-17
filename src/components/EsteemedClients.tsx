"use client";

import Image from "next/image";

export default function EsteemedClients() {
  const baseLogos = [
    { name: "Sebiz Skilling India", src: "/clients/sebiz.jpg" },
    { name: "Sohana Hospitals", src: "/clients/sohana.jpg" },
    { name: "Fortis Hospital Mohali", src: "/clients/fortis.jpg" },
  ];

  // Duplicate 6 times to ensure seamless infinite looping on all screen sizes
  const logos = [
    ...baseLogos,
    ...baseLogos,
    ...baseLogos,
    ...baseLogos,
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
          Proud to assist leading developers, healthcare groups, and educational institutions with seamless Airport Height Clearances.
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
              className="flex items-center justify-center bg-white px-6 py-5 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 w-64 sm:w-80 h-36 sm:h-44 shrink-0 group cursor-pointer"
            >
              <div className="relative w-full h-full flex items-center justify-center scale-110 sm:scale-125">
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
