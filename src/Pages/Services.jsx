import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiMonitor, FiSmartphone, FiCloud, FiCpu, FiSettings } from "react-icons/fi";

const services = [
  {
    id: "01",
    title: "Web Development",
    tag: "Web",
    icon: FiMonitor,
    description:
      "High-performing, responsive websites and web applications focused on turning visitors into customers through optimized user flows, fast load times, and clean aesthetics.",
    highlights: ["Landing Pages", "E-commerce", "Web Applications", "SEO Optimized"],
  },
  {
    id: "02",
    title: "App Development",
    tag: "Mobile",
    icon: FiSmartphone,
    description:
      "Cross-platform mobile applications that deliver native-like experiences. Built for performance and designed to keep your users engaged on both iOS and Android.",
    highlights: ["React Native", "Expo", "Custom UI/UX", "API Integration"],
  },
  {
    id: "03",
    title: "Cloud Solutions",
    tag: "Cloud",
    icon: FiCloud,
    description:
      "Scalable, secure, and robust cloud infrastructure setup and management. Modern deployment, hosting, and database solutions tailored to your business needs.",
    highlights: ["AWS & GCP", "Serverless", "Database Management", "CI/CD Pipelines"],
  },
  {
    id: "04",
    title: "Automation Workflows",
    tag: "Automation",
    icon: FiCpu,
    description:
      "Streamline your business processes with custom automation scripts and browser extensions. Save time and reduce human error by automating repetitive tasks.",
    highlights: ["Chrome Extensions", "Custom Scripts", "API Integrations", "Data Scraping"],
  },
  {
    id: "05",
    title: "Custom Software Solutions",
    tag: "Custom Software",
    icon: FiSettings,
    description:
      "Bespoke software tailored precisely to what your company needs. From internal employee portals and admin dashboards to full-scale SaaS platforms—you name it, I build it.",
    highlights: ["Employee Portals", "Admin Dashboards", "Booking Systems", "Internal Tools"],
  },
];

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="services" className="w-full bg-white px-4 sm:px-8 lg:px-14 py-6 pb-10">
      {/* ── Dark card container ─────────────────────────────────────────── */}
      <div className="max-w-[1600px] mx-auto bg-[#0d0d0d] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* ── Header ───────────────────────────────────────────────────── */}
        <div className="relative z-10 px-5 sm:px-8 md:px-14 pt-12 sm:pt-16 pb-8 sm:pb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-6 border-b border-white/6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/30 font-semibold mb-3">
              What I offer
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white"
              style={{ letterSpacing: '-0.04em' }}
            >
              Services
            </h2>
          </div>

          <motion.a
            href="https://www.linkedin.com/in/kshitijjain-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 text-white/70 hover:text-white hover:border-white text-sm font-semibold rounded-full transition-all duration-500 ease-in-out"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Work with me
            <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* ── Service Rows ─────────────────────────────────────────────── */}
        <div className="relative z-10 px-5 sm:px-8 md:px-14 divide-y divide-white/6">
          {services.map((service, index) => {
            const isOpen = expandedIndex === index;
            const Icon = service.icon;

            return (
              <motion.div key={index} layout>
                <button
                  onClick={() => setExpandedIndex(index)}
                  className="w-full py-6 sm:py-7 md:py-9 flex items-start justify-between gap-4 sm:gap-6 text-left group"
                >
                  {/* Left block */}
                  <div className="flex items-start gap-4 sm:gap-5 md:gap-8 flex-1 min-w-0">
                    {/* Number + icon */}
                    <div className="flex flex-col items-center gap-2 pt-0.5 flex-shrink-0">
                      <span className="text-[11px] font-mono text-white/20 tracking-widest">{service.id}</span>
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all duration-400 ${
                          isOpen ? 'bg-white text-black' : 'bg-white/6 text-white/30 group-hover:bg-white/12 group-hover:text-white/60'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>

                    {/* Title + tag + description */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                        <h3
                          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight transition-colors duration-300 ${
                            isOpen ? 'text-white' : 'text-white/35 group-hover:text-white/70'
                          }`}
                          style={{ letterSpacing: '-0.02em' }}
                        >
                          {service.title}
                        </h3>
                        <span
                          className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                            isOpen ? 'bg-white/12 text-white/80' : 'bg-white/5 text-white/20'
                          }`}
                        >
                          {service.tag}
                        </span>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm sm:text-base text-white/45 leading-relaxed max-w-2xl mt-3 mb-4 sm:mb-5">
                              {service.description}
                            </p>
                            {/* Highlights */}
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 pb-2">
                              {service.highlights.map((h) => (
                                <span
                                  key={h}
                                  className="px-2.5 sm:px-3 py-1 rounded-full bg-white/6 border border-white/8 text-xs text-white/50 font-medium"
                                >
                                  {h}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Toggle indicator */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex-shrink-0 mt-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center text-lg font-light transition-colors duration-300 ${
                      isOpen ? 'border-white text-white' : 'border-white/12 text-white/20 group-hover:border-white/30 group-hover:text-white/50'
                    }`}
                  >
                    +
                  </motion.div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* ── Footer CTA inside card ────────────────────────────────────── */}
        <div className="relative z-10 px-5 sm:px-8 md:px-14 py-8 sm:py-10 border-t border-white/6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-6">
          
          <div className="text-[11px] sm:text-xs text-white/40 leading-relaxed space-y-1">
            <p className="font-bold text-white/60 mb-2 uppercase tracking-[0.2em] text-[10px]">Business & Legal</p>
            <p className="font-semibold text-white/80 text-sm mb-1">Kshitij Software Forge Technologies</p>
            <p>GSTIN: <span className="font-mono text-white/60">08DBFPJ8049K1Z6</span> <span className="mx-1">•</span> Regular GST Registered</p>
            <p>Jaipur, Rajasthan <span className="mx-1">•</span> Valid From: 01/06/2026</p>
          </div>

          <div className="flex flex-col lg:items-end gap-3 sm:gap-4">
            <div>
              <p className="text-sm text-white/30 mb-1 font-medium lg:text-right">Ready to start?</p>
              <p className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight">Let's build something great.</p>
            </div>
            <motion.a
              href="https://www.linkedin.com/in/kshitijjain-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-white text-black px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors duration-500 ease-in-out shadow-[0_8px_32px_rgba(255,255,255,0.12)] active:scale-95"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in touch
              <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
