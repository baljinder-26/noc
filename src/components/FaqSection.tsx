"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string | React.ReactNode;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      q: "What is Airport Height Clearance?",
      a: "Airport Height Clearance is a mandatory regulatory approval required before constructing buildings, telecom towers, chimneys, and other tall structures located within safeguarded airspace around airports. It ensures that proposed structures do not violate safety margins (Obstacle Limitation Surfaces) or interfere with aircraft operations or navigational aids."
    },
    {
      q: "When is Airport Clearance required?",
      a: "It is required prior to commencing construction for any project situated within the notification zone of an airport (typically up to 20 km from the runway reference point, or based on municipal zoning maps). It is highly recommended to perform a site feasibility evaluation before starting design layouts to prevent height reduction orders later."
    },
    {
      q: "Who issues Airport Height Clearance?",
      a: "Airport Height Clearance is issued by competent government authorities depending on the airport type. Commercial civil airports are managed by the Airports Authority of India (AAI), and military stations are cleared by the Indian Air Force (IAF) or respective Defense Headquarters."
    },
    {
      q: "Does High Rise Approvals issue Airport NOCs?",
      a: "No. High Rise Approvals is a private aviation consultancy. We do not issue government approvals. We specialize in providing technical surveys (DGPS coordinate measurements), geo-spatial mapping, CNS/OLS assessments, case documentation, NOCAS file management, and liaison support to help developers obtain approvals smoothly from AAI and IAF."
    },
    {
      q: "Which authorities are involved in the clearance process?",
      a: (
        <div>
          <p className="mb-2">Depending on your specific site coordinates and proximity to aviation grids, the following bodies are involved:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li><strong>Airports Authority of India (AAI)</strong> – for civil and joint-user airports.</li>
            <li><strong>Indian Air Force (IAF)</strong> / Respective defense branch – for military airbases.</li>
            <li><strong>Directorate General of Civil Aviation (DGCA)</strong> – for civil aviation policy & guidelines compliance.</li>
          </ul>
        </div>
      )
    },
    {
      q: "How long does the clearance process take?",
      a: "The timeline varies based on the complexity of the case. A standard NOCAS portal submission through the Airports Authority of India (AAI) typically takes between 4 to 8 weeks, whereas cases involving the Indian Air Force (IAF), joint-user fields, or detailed aeronautical studies can take several months. Our end-to-end management minimizes delays by ensuring zero error documentation."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div 
            key={idx} 
            className="bg-slate-900/40 rounded-xl border border-slate-800 shadow-lg overflow-hidden transition-all duration-300 hover:border-secondary/20"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full py-4 px-6 flex items-center justify-between text-left focus:outline-none"
            >
              <div className="flex items-center space-x-3">
                <HelpCircle className="w-5 h-5 text-secondary shrink-0" />
                <span className="font-poppins font-bold text-sm sm:text-base text-white">
                  {faq.q}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="p-1 rounded-full bg-slate-950 shrink-0 border border-slate-800"
              >
                <ChevronDown className="w-4 h-4 text-white" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-400 leading-relaxed border-t border-slate-950 font-inter">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
