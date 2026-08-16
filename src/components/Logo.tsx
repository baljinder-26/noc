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
        className="relative flex items-center justify-center shrink-0 rounded-full"
        style={{ width: size, height: size }}
      >
        {/* Eye-catching ambient golden halo glow behind emblem */}
        <div className="absolute inset-0 rounded-full bg-amber-400/25 blur-md pointer-events-none group-hover:bg-amber-400/40 transition-all duration-300" />

        <Image
          src="/logo-emblem.png"
          alt="High Rise Approvals Emblem Logo"
          width={180}
          height={180}
          priority
          className="w-full h-full object-contain relative z-10 drop-shadow-[0_4px_12px_rgba(212,175,55,0.45)] transition-transform duration-300 group-hover:scale-105 rounded-full"
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
