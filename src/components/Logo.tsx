import React from "react";

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
      {/* Crisp Vector SVG Emblem with Metallic Glow */}
      <div
        className="relative flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        {/* Eye-catching ambient golden halo glow behind emblem */}
        <div className="absolute inset-0 rounded-full bg-amber-400/25 blur-md pointer-events-none group-hover:bg-amber-400/40 transition-all duration-300" />

        <svg
          viewBox="0 0 200 200"
          className="w-full h-full relative z-10 drop-shadow-[0_4px_12px_rgba(212,175,55,0.45)] transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Ultra-Premium Metallic Gold Gradients */}
            <linearGradient id="logoGoldBright" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF7C2" />
              <stop offset="35%" stopColor="#F9D76E" />
              <stop offset="70%" stopColor="#E5BE3B" />
              <stop offset="100%" stopColor="#B38B12" />
            </linearGradient>

            <linearGradient id="logoGoldShine" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C49619" />
              <stop offset="50%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#FFFBEB" />
            </linearGradient>

            <linearGradient id="logoGoldDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F5D061" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8A6A0B" />
            </linearGradient>

            <linearGradient id="logoSilverRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
          </defs>

          {/* Dark Background Badge Circle */}
          <circle cx="100" cy="100" r="94" fill="#040814" />

          {/* White / Silver Outer Border Ring */}
          <circle
            cx="100"
            cy="100"
            r="88"
            stroke="url(#logoSilverRing)"
            strokeWidth="6"
            fill="none"
          />

          {/* Subdued Inner Accent Ring */}
          <circle
            cx="100"
            cy="100"
            r="81"
            stroke="url(#logoGoldBright)"
            strokeWidth="1.5"
            strokeOpacity="0.5"
            fill="none"
          />

          {/* Flight Path Arc (Ascending Curve Left to Right) */}
          <path
            d="M 28 118 C 30 75, 75 42, 160 48"
            stroke="url(#logoGoldBright)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 36 126 C 38 88, 80 52, 150 56"
            stroke="url(#logoGoldShine)"
            strokeWidth="2"
            strokeDasharray="4 3"
            strokeOpacity="0.9"
            fill="none"
          />

          {/* Jet Airplane (Top Right Taking Off) */}
          <g transform="translate(162, 46) rotate(-22) scale(0.95)">
            <path
              d="M 18 0 L -10 -8 L -4 -2 L -16 -4 L -14 0 L -16 4 L -4 2 L -10 8 Z"
              fill="url(#logoSilverRing)"
            />
            <path
              d="M 18 0 L -6 -6 L -2 0 L -6 6 Z"
              fill="url(#logoGoldBright)"
            />
          </g>

          {/* High Rise Skyscrapers / Buildings Group */}
          <g id="logoSkyscrapers">
            {/* Building 1 (Far Left Small) */}
            <path d="M 44 146 L 44 104 L 56 96 L 56 146 Z" fill="url(#logoGoldDark)" />
            <path d="M 50 146 L 50 100 L 56 96 L 56 146 Z" fill="url(#logoGoldShine)" opacity="0.5" />

            {/* Building 2 (Mid Left Medium) */}
            <path d="M 58 146 L 58 84 L 74 72 L 74 146 Z" fill="url(#logoGoldBright)" />
            <path d="M 66 146 L 66 78 L 74 72 L 74 146 Z" fill="url(#logoGoldShine)" opacity="0.6" />
            <path d="M 65 73 L 67 52 L 69 73 Z" fill="url(#logoGoldShine)" />

            {/* Building 3 (Center Main Tallest Tower) */}
            <path d="M 76 146 L 76 60 L 98 44 L 98 146 Z" fill="url(#logoGoldShine)" />
            <path d="M 87 146 L 87 52 L 98 44 L 98 146 Z" fill="url(#logoGoldBright)" opacity="0.8" />
            <path d="M 86 44 L 88 22 L 90 44 Z" fill="url(#logoSilverRing)" />

            {/* Building 4 (Mid Right Tall Tower) */}
            <path d="M 100 146 L 100 68 L 120 54 L 120 146 Z" fill="url(#logoGoldDark)" />
            <path d="M 110 146 L 110 61 L 120 54 L 120 146 Z" fill="url(#logoGoldBright)" opacity="0.6" />
            <path d="M 109 55 L 111 36 L 113 55 Z" fill="url(#logoGoldShine)" />

            {/* Building 5 (Far Right Mid) */}
            <path d="M 122 146 L 122 90 L 138 78 L 138 146 Z" fill="url(#logoGoldBright)" />
            <path d="M 130 146 L 130 84 L 138 78 L 138 146 Z" fill="url(#logoGoldShine)" opacity="0.7" />

            {/* Building 6 (Far Right Small) */}
            <path d="M 140 146 L 140 108 L 152 100 L 152 146 Z" fill="url(#logoGoldDark)" />

            {/* 3D Facet Highlight Lines */}
            <line x1="50" y1="100" x2="50" y2="146" stroke="#FFF5B8" strokeWidth="0.8" opacity="0.4" />
            <line x1="66" y1="78" x2="66" y2="146" stroke="#FFF5B8" strokeWidth="1" opacity="0.5" />
            <line x1="87" y1="52" x2="87" y2="146" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
            <line x1="110" y1="61" x2="110" y2="146" stroke="#FFF5B8" strokeWidth="1" opacity="0.5" />
            <line x1="130" y1="84" x2="130" y2="146" stroke="#FFF5B8" strokeWidth="0.8" opacity="0.4" />
          </g>

          {/* Base Horizon Curved Arc / Swoosh */}
          <path
            d="M 32 140 C 65 162, 135 162, 168 140 C 145 152, 55 152, 32 140 Z"
            fill="url(#logoGoldBright)"
          />
          <path
            d="M 38 145 C 70 166, 130 166, 162 145 C 140 155, 60 155, 38 145 Z"
            fill="url(#logoGoldShine)"
          />
        </svg>
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
