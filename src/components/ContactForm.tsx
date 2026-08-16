"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Partial<FormState> = {};
    if (!form.name.trim()) tempErrors.name = "Full name is required";
    
    if (!form.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone.trim().replace(/\D/g, ""))) {
      tempErrors.phone = "Enter a valid 10-digit phone number";
    }
    
    if (!form.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      tempErrors.email = "Enter a valid email address";
    }
    
    if (!form.message.trim()) {
      tempErrors.message = "Please describe the reason for your clearance enquiry";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/5 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-poppins font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Rajesh Kumar"
                className={`w-full px-4 py-2.5 rounded-lg border text-sm font-inter focus:outline-none focus:ring-2 transition-all bg-slate-950/80 text-white ${
                  errors.name 
                    ? "border-red-500/50 focus:ring-red-950/50" 
                    : "border-slate-800 focus:border-secondary focus:ring-slate-900/50"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-inter">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-poppins font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9501689445"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm font-inter focus:outline-none focus:ring-2 transition-all bg-slate-950/80 text-white ${
                    errors.phone 
                      ? "border-red-500/50 focus:ring-red-950/50" 
                      : "border-slate-800 focus:border-secondary focus:ring-slate-900/50"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-inter">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-poppins font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. info@company.com"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm font-inter focus:outline-none focus:ring-2 transition-all bg-slate-950/80 text-white ${
                    errors.email 
                      ? "border-red-500/50 focus:ring-red-950/50" 
                      : "border-slate-800 focus:border-secondary focus:ring-slate-900/50"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-inter">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Message / Reason */}
            <div>
              <label htmlFor="message" className="block text-xs font-poppins font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                Reason for Clearance Enquiry <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Briefly describe your building height goals, nearest airport name, or survey requirements..."
                className={`w-full px-4 py-2.5 rounded-lg border text-sm font-inter focus:outline-none focus:ring-2 transition-all resize-none bg-slate-950/80 text-white ${
                  errors.message 
                    ? "border-red-500/50 focus:ring-red-950/50" 
                    : "border-slate-800 focus:border-secondary focus:ring-slate-900/50"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-inter">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-lg bg-secondary hover:bg-secondary-light text-slate-950 font-poppins font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed hover:scale-[1.01]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Sending Request...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Request Free Consultation</span>
                </>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success-form"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-12 px-4 flex flex-col items-center space-y-4"
          >
            <div className="w-16 h-16 bg-emerald-950/30 text-emerald-400 rounded-full border border-emerald-500/20 flex items-center justify-center mb-2 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-poppins font-bold text-2xl text-white">
              Thank You!
            </h3>
            <p className="text-slate-400 max-w-md text-sm leading-relaxed">
              Thank you for contacting **High Rise Approvals**. Your clearance enquiry has been successfully logged.
            </p>
            <p className="text-secondary font-semibold font-poppins text-sm bg-slate-950/80 py-2 px-6 rounded-full border border-secondary/20">
              Our aviation experts will get in touch with you shortly.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="text-xs text-slate-500 hover:text-slate-300 underline transition-colors pt-4"
            >
              Submit another request
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
