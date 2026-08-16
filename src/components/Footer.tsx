import Link from "next/link";
import { Phone, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/#home" },
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Projects Delivered", href: "/#projects" },
    { name: "Coverage States", href: "/#coverage" },
    { name: "Contact & FAQ", href: "/#contact" },
  ];

  const mainServices = [
    { name: "Airport Height NOC", href: "/#services" },
    { name: "AAI & IAF Clearance Liaison", href: "/#services" },
    { name: "WGS-84 Survey", href: "/#services" },
    { name: "CNS & OLS Assessment", href: "/#services" },
    { name: "Aeronautical Studies", href: "/#services" },
    { name: "Drone Survey & Mapping", href: "/#services" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 font-inter pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/#home" className="block">
              <Logo size={46} showText={true} textSize="md" />
            </Link>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              Complete Aviation Clearance & Airport Approval Consultancy. Providing high-precision technical surveys, obstacle analyses, and professional liaison services for clearances across India.
            </p>
            <div className="flex items-center space-x-2 text-xs text-secondary-light font-medium bg-slate-900 py-1.5 px-3 rounded border border-white/5 w-fit">
              <ShieldCheck className="w-4.5 h-4.5 text-secondary" />
              <span>AAI & IAF Clearance Experts</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-sm tracking-wider text-white uppercase mb-4 border-b border-slate-900 pb-2 w-fit">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-secondary text-sm flex items-center space-x-1.5 transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all text-secondary" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-sm tracking-wider text-white uppercase mb-4 border-b border-slate-900 pb-2 w-fit">
              Our Services
            </h3>
            <ul className="space-y-2">
              {mainServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-secondary text-sm flex items-center space-x-1.5 transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all text-secondary" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-sm tracking-wider text-white uppercase border-b border-slate-900 pb-2 w-fit">
              Contact & Enquiries
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-white font-semibold">Call / WhatsApp</span>
                  <a href="tel:9501689445" className="hover:text-secondary transition-colors text-slate-300">
                    +91 95016 89445
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-white font-semibold">Email</span>
                  <a href="mailto:highriseapprovals@gmail.com" className="hover:text-secondary transition-colors text-slate-300 break-all">
                    highriseapprovals@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-white font-semibold">Business Hours</span>
                  <span className="text-slate-400">Mon - Sat: 9:00 AM - 6:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© 2026 High Rise Approvals. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <span className="text-slate-600 font-medium">Complete Airport Height Clearance & Aviation Consultancy</span>
            <span>|</span>
            <span>Pan India Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
