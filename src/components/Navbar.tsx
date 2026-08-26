"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Airport NOC", href: "/#services" },
    { name: "Clients", href: "/#clients" },
    { name: "Coverage", href: "/#coverage" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#111318]/95 backdrop-blur-xl border-b border-[#D9A928]/20 shadow-2xl py-3"
          : "bg-[#111318]/85 backdrop-blur-lg border-b border-white/10 shadow-xl py-3.5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Link using single line glowing SVG Logo & Sci-fi Typography */}
          <Link href="/#home" className="group shrink-0 mr-4 2xl:mr-8">
            <Logo size={isScrolled ? 58 : 70} showText={true} textSize="lg" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden 2xl:flex items-center space-x-5 2xl:space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-inter font-bold text-xs 2xl:text-sm transition-colors relative py-1 text-white hover:text-[#D9A928] group whitespace-nowrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D9A928] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Quick Consultation Button */}
          <div className="hidden 2xl:flex items-center space-x-4 shrink-0">
            <a
              href="tel:9501689445"
              className="flex items-center space-x-2 font-inter font-bold text-xs 2xl:text-sm transition-colors text-white hover:text-[#D9A928] whitespace-nowrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
            >
              <Phone className="w-4 h-4 text-[#D9A928] animate-pulse" />
              <span>+91 95016 89445</span>
            </a>
            <Link
              href="/#contact"
              className="bg-[#D9A928] hover:bg-[#c49722] text-[#111318] font-poppins font-extrabold text-xs py-2.5 px-4 rounded shadow-md hover:shadow-lg transition-all duration-300 tracking-wider whitespace-nowrap"
            >
              FREE CONSULTATION
            </Link>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <div className="2xl:hidden flex items-center shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none transition-colors text-white hover:text-[#D9A928]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="2xl:hidden bg-[#111318]/98 border-b border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded font-inter font-semibold text-base text-white hover:bg-white/5 hover:text-[#D9A928] transition-all"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col space-y-3 px-3">
                <a
                  href="tel:9501689445"
                  className="flex items-center space-x-2 font-inter font-semibold text-white hover:text-[#D9A928]"
                >
                  <Phone className="w-4 h-4 text-[#D9A928]" />
                  <span>+91 95016 89445</span>
                </a>
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#D9A928] hover:bg-[#c49722] text-[#111318] text-center font-poppins font-bold text-sm py-3 rounded shadow transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

