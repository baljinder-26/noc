import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textSize?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({
  className = "",
  size = 56,
  showText = true,
  textSize = "md",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Exact Circular Golden Emblem Logo */}
      <div
        className="relative flex items-center justify-center shrink-0 rounded-full overflow-hidden border-2 border-white/40 shadow-[0_0_16px_rgba(245,158,11,0.35)]"
        style={{ width: size, height: size }}
      >
        {/* Eye-catching ambient golden halo glow behind emblem */}
        <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-md pointer-events-none group-hover:bg-amber-400/45 transition-all duration-300" />

        <Image
          src="/logo-emblem.png"
          alt="High Rise Approvals Emblem Logo"
          width={180}
          height={180}
          priority
          className="w-full h-full object-cover scale-[1.08] rounded-full relative z-10 transition-transform duration-300 group-hover:scale-115"
        />
      </div>

      {/* Single-line Futuristic Eye-Catching Bold Brand Typography */}
      {showText && (
        <div className="flex items-center select-none leading-none whitespace-nowrap">
          <span
            className={`font-brand font-black uppercase italic tracking-wider text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] ${
              textSize === "sm"
                ? "text-sm sm:text-base"
                : textSize === "lg"
                ? "text-xl sm:text-2xl 2xl:text-3xl"
                : textSize === "xl"
                ? "text-2xl sm:text-3xl 2xl:text-4xl"
                : "text-lg sm:text-xl 2xl:text-2xl"
            }`}
          >
            HIGH RISE APPROVALS
          </span>
        </div>
      )}
    </div>
  );
}
