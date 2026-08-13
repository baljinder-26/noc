"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    { name: "Airport NOC", href: "/airport-noc" },
    { name: "Helipad Approval", href: "/helipad-approval" },
    { name: "Projects", href: "/#projects" },
    { name: "Coverage", href: "/#coverage" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav shadow-lg py-3"
          : "glass-nav-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/#home" className="flex items-center space-x-3 group shrink-0">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border border-secondary/40 bg-slate-900 flex items-center justify-center shadow-inner transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="High Rise Approvals Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-extrabold text-lg leading-none tracking-wide text-white">
                HIGH RISE
              </span>
              <span className="font-poppins font-semibold text-xs tracking-widest text-secondary">
                APPROVALS
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links - Responsive display starting at xl */}
          <nav className="hidden xl:flex space-x-5 xl:space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-inter font-semibold text-sm transition-colors relative py-1 text-slate-300 hover:text-white group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Quick Consultation Button - Responsive display starting at xl */}
          <div className="hidden xl:flex items-center space-x-5 shrink-0">
            <a
              href="tel:9501689445"
              className="flex items-center space-x-2 font-inter font-bold text-sm transition-colors text-slate-300 hover:text-secondary whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-secondary animate-pulse" />
              <span>+91 95016 89445</span>
            </a>
            <Link
              href="/#contact"
              className="bg-secondary hover:bg-secondary-light text-slate-950 font-poppins font-extrabold text-xs py-2.5 px-4 rounded shadow-md hover:shadow-lg transition-all duration-300 tracking-wider whitespace-nowrap"
            >
              FREE CONSULTATION
            </Link>
          </div>

          {/* Mobile Menu Button - Displayed for screens under xl */}
          <div className="xl:hidden flex items-center shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none transition-colors text-white hover:text-secondary"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel - Displays for screens under xl */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-slate-950 border-b border-slate-900 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded font-inter font-medium text-base text-slate-300 hover:bg-slate-900 hover:text-secondary transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-900 flex flex-col space-y-3 px-3">
                <a
                  href="tel:9501689445"
                  className="flex items-center space-x-2 font-inter font-semibold text-slate-300"
                >
                  <Phone className="w-4 h-4 text-secondary" />
                  <span>+91 95016 89445</span>
                </a>
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-secondary hover:bg-secondary-light text-slate-950 text-center font-poppins font-bold text-sm py-3 rounded shadow transition-all duration-300"
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
