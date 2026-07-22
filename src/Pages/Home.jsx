import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  FiGithub, FiLinkedin, FiMail,
  FiMapPin, FiX, FiCode,
  FiExternalLink, FiTwitter, FiArrowUpRight, FiPhone, FiGlobe, FiUsers,
  FiArrowDownLeft, FiArrowDownRight, FiInstagram
} from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import profileImage from '../assets/img.png';
import portraitImg from '../assets/kshitij_portrait.png';
import handLeftImg from '../assets/hand_left.png';
import handRightImg from '../assets/hand_right.png';
import appreciationLetter from '../assets/appreciation_letter.png';

import Testimonials from './Testimonials';
import { Services } from './Services';
import { Skills } from './Skills';
import Footer from './Footer';

/* ─── Shared font — applied once at the root div ────────────────────────── */
const FONT = { fontFamily: '"Clash Display", "DM Sans", "Segoe UI", system-ui, sans-serif' };

/* ─── TickerBar ─────────────────────────────────────────────────────────── */
function TickerBar() {
  const items = [
    "ACCESSIBLE", "USEFUL", "ADAPTIVE", "DATA-DRIVEN", "INTUITIVE", "INNOVATIVE", "USER-FIRST",
    "ACCESSIBLE", "USEFUL", "ADAPTIVE", "DATA-DRIVEN", "INTUITIVE", "INNOVATIVE", "USER-FIRST"
  ];
  return (
    <div className="relative z-20 w-full bg-[#b8f500] text-black py-3 sm:py-3.5 overflow-hidden border-y border-black/10 select-none">
      <motion.div
        className="flex items-center gap-6 whitespace-nowrap font-sans font-black text-xs sm:text-sm tracking-widest uppercase text-black"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        {items.concat(items).map((item, idx) => (
          <span key={idx} className="flex items-center gap-6">
            <span>{item}</span>
            <span className="text-black/40 text-[10px]">★</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── ScrollRevealText ─────────────────────────────────────────────────── */
function ScrollRevealText() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 30%"]
  });

  const lines = [
    ["creating", "experiences", "at", "the"],
    ["intersection", "of", "technology,"],
    ["design,", "and", "human", "behavior."]
  ];

  const fontStyle = {
    fontFamily: '"Comic Neue", "Comic Sans MS", "Comic Sans", cursive, sans-serif',
    fontWeight: 700
  };

  let wordIndexCount = 0;

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-1 sm:gap-2.5">
      {lines.map((words, lineIdx) => (
        <div key={lineIdx} className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
          {words.map((word, wordIdx) => {
            const totalIndex = wordIndexCount++;
            const startProgress = totalIndex * 0.07;
            const endProgress = startProgress + 0.22;

            const opacity = useTransform(scrollYProgress, [startProgress, endProgress], [0.08, 1]);
            const y = useTransform(scrollYProgress, [startProgress, endProgress], [35, 0]);
            const scale = useTransform(scrollYProgress, [startProgress, endProgress], [0.85, 1]);
            const filter = useTransform(
              scrollYProgress,
              [startProgress, endProgress],
              ['blur(10px)', 'blur(0px)']
            );

            return (
              <motion.span
                key={wordIdx}
                style={{
                  opacity,
                  y,
                  scale,
                  filter,
                  ...fontStyle
                }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white select-none inline-block leading-[1.05] drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]"
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* ─── KeyFiguresSection ─────────────────────────────────────────────────── */
function KeyFiguresSection() {
  return (
    <section className="w-full bg-white text-black px-6 sm:px-12 md:px-24 py-24 sm:py-36 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Display Serif Heading + Eyes */}
        <div className="lg:col-span-5 flex flex-col items-start gap-8 sm:gap-10">
          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] tracking-tight text-black"
            style={{ fontFamily: '"Playfair Display", "DM Serif Display", Georgia, serif' }}
          >
            Some<br />
            key figures<br />
            that you may<br />
            find useful
          </h2>
          <div className="text-4xl sm:text-5xl select-none pt-2">
            👀
          </div>
        </div>

        {/* Right Column: Outer Rounded Card with Geometric Stat Badges */}
        <div className="lg:col-span-7 flex justify-center w-full">
          <div className="w-full max-w-[660px] aspect-[4/3] min-h-[440px] sm:min-h-[500px] rounded-[44px] border border-black/40 bg-white relative p-6 sm:p-10 overflow-hidden shadow-xs">
            
            {/* Stat 1: 60+ (Circle) + USERS ON PRODUCT (Blue Sticker) */}
            <motion.div
              className="absolute left-[5%] top-[8%]"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-black flex flex-col items-center justify-center relative bg-white px-2 text-center">
                <span
                  className="text-4xl sm:text-6xl font-normal text-black tracking-tight"
                  style={{ fontFamily: '"Playfair Display", "DM Serif Display", Georgia, serif' }}
                >
                  60+
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-gray-500 tracking-tight mt-1">
                  autoslay.online
                </span>
                {/* Blue Slanted Badge */}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#8da8f6] text-black text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-0.5 rounded-sm rotate-[-4deg] whitespace-nowrap shadow-xs border border-black/10">
                  USERS ON PRODUCT
                </span>
              </div>
            </motion.div>

            {/* Stat 2: 45+ (Oval Pill) + USER TESTS (Coral Red Sticker) */}
            <motion.div
              className="absolute right-[6%] top-[8%]"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="border border-black rounded-[60px] px-8 sm:px-12 py-5 sm:py-7 flex flex-col items-center justify-center relative bg-white px-4 text-center">
                <span
                  className="text-4xl sm:text-6xl font-normal text-black tracking-tight"
                  style={{ fontFamily: '"Playfair Display", "DM Serif Display", Georgia, serif' }}
                >
                  45+
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-gray-500 tracking-tight mt-1">
                  fuudr.com
                </span>
                {/* Coral Red Slanted Badge */}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#ff6747] text-black text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-0.5 rounded-sm rotate-[5deg] whitespace-nowrap shadow-xs border border-black/10">
                  USER TESTS
                </span>
              </div>
            </motion.div>

            {/* Stat 3: 100% (Scalloped Hourglass Box) + SATISFACTION (Lime Green Sticker) */}
            <motion.div
              className="absolute right-[10%] bottom-[12%]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="border border-black rounded-[36px] px-8 sm:px-10 py-4 sm:py-5 flex flex-col items-center justify-center relative bg-white" style={{ borderRadius: '50% 50% 50% 50% / 30% 30% 30% 30%' }}>
                <span
                  className="text-4xl sm:text-6xl font-normal text-black tracking-tight"
                  style={{ fontFamily: '"Playfair Display", "DM Serif Display", Georgia, serif' }}
                >
                  100%
                </span>
                {/* Lime Green Slanted Badge */}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#b8f500] text-black text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-0.5 rounded-sm rotate-[-3deg] whitespace-nowrap shadow-xs border border-black/10">
                  SATISFACTION
                </span>
              </div>
            </motion.div>

            {/* Stat 4: Web/App (Pill) + SERVICES (Lavender Sticker) */}
            <motion.div
              className="absolute left-[36%] top-[34%]"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="border border-black rounded-[40px] px-8 sm:px-10 py-5 sm:py-6 flex flex-col items-center justify-center relative bg-white">
                <span
                  className="text-3xl sm:text-5xl font-normal text-black tracking-tight"
                  style={{ fontFamily: '"Playfair Display", "DM Serif Display", Georgia, serif' }}
                >
                  Web/App
                </span>
                {/* Lavender Slanted Badge */}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#e2b0ff] text-black text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-0.5 rounded-sm rotate-[3deg] whitespace-nowrap shadow-xs border border-black/10">
                  SERVICES
                </span>
              </div>
            </motion.div>

            {/* Doodle Arrow pointing from Web/App to 100% Satisfaction */}
            <div className="absolute left-[48%] top-[51%] w-[130px] h-[90px] pointer-events-none z-10 hidden sm:block">
              <svg className="w-full h-full text-black/35 select-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Curved line starting at top-left, going to bottom-right */}
                <path d="M 20 10 C 55 25, 45 65, 85 85" />
                {/* Arrowhead at the bottom-right */}
                <path d="M 68 85 L 85 85 L 80 68" />
              </svg>
            </div>

            {/* Stat 5: 10+ (Hexagon) + PROJECTS FINISHED (Yellow Sticker) */}
            <motion.div
              className="absolute left-[8%] bottom-[6%]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="relative flex flex-col items-center justify-center">
                {/* Hexagon SVG */}
                <svg className="w-36 h-36 sm:w-48 sm:h-48 text-black stroke-[1.25]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" strokeLinejoin="round" />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full px-4 text-center">
                  <span
                    className="text-3xl sm:text-5xl font-normal text-black tracking-tight"
                    style={{ fontFamily: '"Playfair Display", "DM Serif Display", Georgia, serif' }}
                  >
                    10+
                  </span>
                  <span className="text-[7.5px] sm:text-[10px] font-semibold text-gray-500 tracking-tight leading-tight mt-0.5 sm:mt-1 max-w-[80px] sm:max-w-[110px] break-words">
                    linkarua, lathishop &amp; more
                  </span>
                </div>
                {/* Yellow Slanted Badge */}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#ffea00] text-black text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-0.5 rounded-sm rotate-[4deg] whitespace-nowrap shadow-xs border border-black/10">
                  PROJECTS FINISHED
                </span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── SocialPill ─────────────────────────────────────────────────────────── */
function SocialPill({ href, icon: Icon, label, className = "" }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className={`group relative flex flex-col items-center justify-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border border-gray-200 bg-white overflow-hidden py-6 sm:py-10 md:py-11 ${className}`}
      whileHover={{ y: -4, scale: 1.03, borderColor: '#000' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Icon className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-400 group-hover:text-black transition-colors duration-200 relative z-10" />
      <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors duration-200 font-semibold relative z-10 block">
        {label}
      </span>
      <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </motion.a>
  );
}

/* ─── Section Divider ─────────────────────────────────────────────────────── */
function Divider() {
  return (
    <div className="w-full px-5 sm:px-8 lg:px-14">
      <div className="max-w-[1600px] mx-auto h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </div>
  );
}

/* ─── Home ──────────────────────────────────────────────────────────────── */
export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isHonorsOpen, setIsHonorsOpen] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const heroHeight = heroEl.offsetHeight;
        // Hide Hero section completely when scrolled past Hero
        setIsPastHero(window.scrollY > (heroHeight + 100));
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isHonorsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isHonorsOpen]);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Timeline varies by complexity. A simple website takes 2–3 weeks, while custom web applications require 6–12 weeks. I'll provide a detailed timeline after understanding your requirements."
    },
    {
      question: "Are you available to join full time?",
      answer: "I'm open to freelance projects, collaborations, and full-time opportunities. Feel free to reach out through the contact form or email."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! I offer post-launch maintenance, bug fixes, and feature additions to ensure your project keeps running smoothly."
    },
    {
      question: "Can you work with my existing brand and design?",
      answer: "Absolutely. I adapt to your existing design system, brand guidelines, and visual language seamlessly."
    },
    {
      question: "Will my website work on mobile phones?",
      answer: "Every project I deliver is fully responsive and tested across devices — from phones to ultrawide monitors."
    },
    {
      question: "What technologies and frameworks do you specialize in?",
      answer: "I work with Next.js, React, Node.js, Python, and various AI/ML tools. I prioritize clean, maintainable, scalable code."
    },
    {
      question: "Do you help with hosting and domain setup?",
      answer: "Yes — I can help with everything from domain configuration to deployment on Vercel, AWS, or your preferred host."
    }
  ];

  return (
    <div className="text-black overflow-x-clip bg-[#f4f2ec]" style={FONT}>

      {/* ── Hero Section (Matches Reference Design Exactly) ──────────────── */}
      <section
        id="hero"
        className={`w-full min-h-screen sm:sticky top-0 z-10 bg-white pt-16 sm:pt-20 md:pt-24 flex flex-col justify-between overflow-hidden transition-opacity duration-300 ${
          isPastHero ? 'opacity-0 pointer-events-none invisible' : 'opacity-100'
        }`}
      >
        
        {/* Floating Right Badge: P. Honors (Scoped to Hero Section) */}
        <div 
          onClick={() => setIsHonorsOpen(true)}
          className="absolute right-0 top-[45%] sm:top-[65%] -translate-y-1/2 z-40 flex flex-col items-center bg-black text-white py-2 sm:py-4 px-2 w-8 sm:w-10 rounded-none shadow-2xl border-l border-t border-b border-gray-800 select-none cursor-pointer hover:bg-gray-900 transition-colors"
        >
          <span className="text-xl font-black tracking-tight text-white mb-0 sm:mb-4 font-sans">
            P.
          </span>
          <span className="hidden sm:inline-block text-[11px] font-semibold tracking-widest text-gray-200 uppercase rotate-90 whitespace-nowrap my-5">
            Honors
          </span>
        </div>
        
        {/* Continuous Smooth Marquee Serif Heading */}
        <div className="w-full overflow-hidden select-none pt-8 sm:pt-10 md:pt-14 pb-4">
          <div
            className="flex w-max whitespace-nowrap text-[135px] sm:text-[180px] md:text-[225px] leading-[1.12] tracking-tight text-[#000000] font-bold animate-marquee"
            style={{
              fontFamily: '"Playfair Display", "DM Serif Display", "Advercase Demo Regular", Georgia, serif',
            }}
          >
            {/* Group 1 */}
            <div className="flex items-center shrink-0">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="shrink-0 pr-12 sm:pr-16">
                  Hello, I'm Kshitij Jain.
                </span>
              ))}
            </div>
            {/* Group 2 — 100% identical copy for zero-flicker infinite loop */}
            <div className="flex items-center shrink-0" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="shrink-0 pr-12 sm:pr-16">
                  Hello, I'm Kshitij Jain.
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Hero Container (Left Info, Center Portrait, Right Socials) */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20 md:-mt-24 relative z-30 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-6 md:gap-0">
            
            {/* Left Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="md:col-span-3 pb-4 md:pb-8"
            >
              {/* Static wrapper to apply mobile translation without Framer Motion transform conflicts */}
              <div className="-translate-y-24 md:translate-y-0 flex flex-col items-start">
                <FiArrowDownRight className="w-5 h-5 text-black mb-4 shrink-0" strokeWidth={1.75} />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-normal text-black leading-[1.35] uppercase ml-2 sm:ml-3 flex flex-col items-start">
                  <a href="https://lathishop.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">FREELANCE</a>
                  <a href="https://fuudr.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">PRODUCT MAKER</a>
                  <span>EDITOR</span>
                </h3>
                <div className="flex items-center gap-2.5 mt-2 ml-8 w-fit">
                  <motion.span
                    className="w-3 h-3 rounded-full bg-[#22c55e] shrink-0"
                    animate={{ opacity: [1, 0.15, 1], boxShadow: ['0 0 3px rgba(34,197,94,0.5)', '0 0 16px rgba(34,197,94,1)', '0 0 3px rgba(34,197,94,0.5)'] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <span className="text-base sm:text-lg font-normal text-black">Open to work</span>
                </div>
              </div>
            </motion.div>

            <div className="md:col-span-6 flex justify-center relative items-end px-2">
              <div className="relative flex justify-center items-end w-[94vw] max-w-[350px] sm:w-auto sm:max-w-[360px] md:max-w-[440px] mx-auto -translate-y-5 sm:translate-y-0">
                
                {/* Main Portrait */}
                <motion.img
                  src={portraitImg}
                  alt="Kshitij Jain"
                  initial={{ opacity: 0, y: 180 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full object-contain relative -z-10 select-none max-h-[360px] sm:max-h-[440px] md:max-h-[490px] translate-y-8 sm:translate-y-12 md:translate-y-16 scale-110 sm:scale-105"
                />
              </div>
            </div>

            {/* Right Column: Sketchy Crown Doodle & Stacked Social Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute md:relative right-4 sm:right-10 top-[38%] md:top-auto md:col-span-3 flex items-center justify-end pb-4 md:pb-8 gap-6 sm:gap-8 pr-0 md:pr-20 z-40"
            >
              {/* Thick Hand-drawn Chalky Crown Doodle Icon — Floating Animation */}
              <motion.svg
                className="w-20 h-20 sm:w-24 sm:h-24 text-[#ded9ce] stroke-[4] rotate-[-12deg] shrink-0"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                animate={{ y: [0, -10, 0], rotate: [-12, -8, -12] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  d="M 15 68 C 24 70 65 72 82 50 L 72 26 L 54 44 L 40 16 L 28 42 L 12 32 Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 18 78 C 35 80 58 78 78 72"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </motion.svg>

              {/* Stacked Circular Social Buttons */}
              <div className="hidden md:flex flex-col items-center gap-2.5">
                <a
                  href="https://instagram.com/ai.bykshitij"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-200/90 flex items-center justify-center text-black hover:border-black hover:bg-black hover:text-white transition-all duration-200 shadow-xs"
                  title="Instagram"
                >
                  <FiInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kshitijjain-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-200/90 flex items-center justify-center text-black hover:border-black hover:bg-black hover:text-white transition-all duration-200 text-lg sm:text-xl font-sans font-bold shadow-xs"
                  title="LinkedIn"
                >
                  in
                </a>
                <a
                  href="https://x.com/k_shit_jain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-200/90 flex items-center justify-center text-black hover:border-black hover:bg-black hover:text-white transition-all duration-200 font-bold text-xl sm:text-2xl shadow-xs"
                  title="X (Twitter)"
                >
                  ✕
                </a>
              </div>
            </motion.div>

          </div>
        </div>

      </section>

      {/* ── Black Statement Section with Arched Curved Bottom ── */}
      <section
        className="w-full min-h-[70vh] sm:min-h-[135vh] bg-black text-white pb-36 sm:pb-52 relative z-20 flex flex-col items-center justify-start text-center overflow-x-clip -mt-10 sm:-mt-12"
        style={{
          borderBottomLeftRadius: '50% 120px',
          borderBottomRightRadius: '50% 120px'
        }}
      >
        {/* TickerBar & Hands attached at the top of Black Section */}
        <div className="w-full relative z-30">
          <TickerBar />
          {/* Left & Right Hands gripping the top edge */}
          <div className="max-w-[440px] mx-auto relative hidden sm:flex justify-between pointer-events-none">
            <motion.img
              src={handLeftImg}
              alt=""
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-[-120px] sm:left-[-180px] md:left-[-240px] lg:left-[-300px] -top-18 sm:-top-22 md:-top-27 z-50 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[270px] object-contain select-none drop-shadow-lg [filter:sepia(45%)_saturate(180%)_hue-rotate(-8deg)_brightness(0.82)_contrast(1.05)]"
            />
            <motion.img
              src={handRightImg}
              alt=""
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-[-120px] sm:right-[-180px] md:right-[-240px] lg:right-[-300px] -top-18 sm:-top-22 md:-top-27 z-50 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[270px] object-contain select-none drop-shadow-lg [filter:sepia(45%)_saturate(180%)_hue-rotate(-8deg)_brightness(0.82)_contrast(1.05)]"
            />
          </div>
        </div>

        <div className="flex-1 w-full flex items-center justify-center py-12 sm:py-0 sm:pt-44 md:pt-52 px-4 sm:px-8">
          <ScrollRevealText />
        </div>
      </section>

      {/* ── Recent Work Section (Exact Replica of Reference Design) ── */}
      <section id="work" className="w-full bg-[#f4f2ec] text-black px-6 sm:px-12 md:px-24 pt-16 sm:pt-24 pb-24 relative z-20">
        <div className="max-w-4xl mx-auto flex flex-col items-start gap-8 sm:gap-12">
          
          {/* Section Sub-heading */}
          <div className="w-full text-left">
            <span className="text-base sm:text-lg font-normal text-gray-500 tracking-tight">Recent work</span>
          </div>

          {/* Project List Items */}
          <div className="w-full flex flex-col border-t border-gray-300/70">
            
            {/* Row 1: Fuudr */}
            <a
              href="https://fuudr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-8 sm:py-10 border-b border-gray-300/70 flex items-center justify-between group cursor-pointer text-black hover:opacity-85 transition-all"
            >
              <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black group-hover:translate-x-2 transition-transform duration-300">
                  Fuudr
                </h3>
                {/* Pink Slanted RECENTLY Sticker */}
                <span className="bg-[#ff5ca8] text-black text-[11px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-sm rotate-[-8deg] shadow-xs select-none">
                  RECENTLY
                </span>
              </div>
              <FiArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 shrink-0 ml-4" />
            </a>

            {/* Row 2: Founderflow */}
            <a
              href="#founderflow"
              className="w-full py-8 sm:py-10 border-b border-gray-300/70 flex items-center justify-between group cursor-pointer text-black hover:opacity-85 transition-all"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black group-hover:translate-x-2 transition-transform duration-300">
                  Founderflow
                </h3>
              </div>
              <FiArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 shrink-0 ml-4" />
            </a>

          </div>

          {/* Centered More Work Pill Button */}
          <div className="w-full flex justify-center pt-4 sm:pt-8">
            <button
              onClick={() => {}}
              className="px-7 py-2.5 rounded-full border border-gray-400 text-sm font-medium text-black bg-transparent hover:bg-black hover:text-white transition-all duration-200 cursor-pointer shadow-xs"
            >
              More work
            </button>
          </div>

        </div>
      </section>

      {/* ── Key Figures Section (Exact Replica of Reference Design) ── */}
      <KeyFiguresSection />

      {/* ── Commented out subsequent sections as requested ── */}
      {/* 
      <div className="w-full px-4 sm:px-8 lg:px-14 pb-8 sm:pb-10 pt-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-3 sm:gap-4 w-full">
          <SocialPill href="tel:+919413973399" icon={FiPhone} label="Phone" />
          <SocialPill href="mailto:borbreak@gmail.com" icon={FiMail} label="Email" />
          <SocialPill href="https://www.linkedin.com/in/kshitijjain-dev/" icon={FiLinkedin} label="LinkedIn" />
          <SocialPill href="https://github.com/NEGO2522" icon={FiGithub} label="GitHub" />
          <SocialPill href="https://SocialPills" icon={FiUsers} label="Organization" />
          <SocialPill href="https://x.com/k_shit_jain" icon={FiTwitter} label="Twitter" className="hidden sm:flex" />
          <SocialPill href="https://thesolvers.online" icon={FiGlobe} label="Website" />
        </div>
      </div>

      <Projects />

      <Divider />

      <section id="about" className="py-16 sm:py-20 md:py-28 px-5 sm:px-8 lg:px-14 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <motion.p
                className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                About Me
              </motion.p>
              <motion.h2
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Crafting Code &amp;<br />
                <span className="text-gray-300">Intelligent Systems</span>
              </motion.h2>
            </div>
            <motion.p
              className="text-sm text-gray-400 max-w-sm leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full stack developer with a passion for building high-performance web applications and machine learning solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <motion.div
              className="p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col justify-between min-h-[220px]"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <span className="text-3xl sm:text-4xl font-black text-black">01</span>
                <h3 className="text-lg font-bold text-black mt-3">Full Stack Architecture</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-4">
                End-to-end web applications built with React, Next.js, Node.js, and modern cloud databases.
              </p>
            </motion.div>

            <motion.div
              className="p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col justify-between min-h-[220px]"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <span className="text-3xl sm:text-4xl font-black text-black">02</span>
                <h3 className="text-lg font-bold text-black mt-3">AI &amp; Machine Learning</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-4">
                Integrating intelligent AI models, computer vision, and NLP workflows into real-world applications.
              </p>
            </motion.div>

            <motion.div
              className="p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col justify-between min-h-[220px]"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <span className="text-3xl sm:text-4xl font-black text-black">03</span>
                <h3 className="text-lg font-bold text-black mt-3">UI/UX &amp; Performance</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-4">
                Creating sleek, responsive interfaces focused on micro-interactions and sub-second page loads.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      <Divider />

      <Services />

      <Divider />

      <Testimonials />

      <Divider />

      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-8 lg:px-14 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-14">
            
            <div className="md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black leading-tight">
                Frequently Asked<br />Questions
              </h2>
              <p className="text-sm text-gray-400 mt-4 max-w-sm leading-relaxed">
                Have questions about working together? Here are answers to common queries.
              </p>
            </div>

            <div className="md:col-span-7 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden bg-white transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-black hover:text-gray-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl font-mono text-gray-400 shrink-0">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

      */}

      <Footer />

      {/* Modal / Lightbox for Appreciation Letter with animation */}
      <AnimatePresence>
        {isHonorsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-10 cursor-zoom-out"
            onClick={() => setIsHonorsOpen(false)}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 26, stiffness: 290 }}
              className="relative max-w-lg sm:max-w-xl md:max-w-2xl w-full bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking card
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/70">
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg text-black leading-tight">Poornima Group</h3>
                  <p className="text-xs text-gray-500 font-medium">Letter of Appreciation</p>
                </div>
                <button
                  onClick={() => setIsHonorsOpen(false)}
                  className="text-gray-400 hover:text-black p-1.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Image Container with Scroll support */}
              <div className="p-4 sm:p-6 bg-[#fcfbfa] flex items-center justify-center max-h-[75vh] overflow-y-auto">
                <img
                  src={appreciationLetter}
                  alt="Letter of Appreciation"
                  className="max-w-full max-h-[70vh] object-contain rounded-xl border border-gray-200/50 shadow-lg select-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Projects Component ─────────────────────────────────────────────────── */
function Projects() {
  const projectsList = [
    {
      title: "Real-time AI Vision Platform",
      category: "AI & Computer Vision",
      description: "An intelligent edge-computing dashboard for real-time video analytics, object detection, and automated alerting.",
      tech: ["Python", "PyTorch", "React", "WebSockets"],
      year: "2025",
      github: "https://github.com/NEGO2522",
      demo: "https://thesolvers.online"
    },
    {
      title: "Enterprise Cloud SaaS Engine",
      category: "Full Stack SaaS",
      description: "Multi-tenant cloud management portal with automated billing, RBAC access controls, and real-time telemetry.",
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      year: "2024",
      github: "https://github.com/NEGO2522",
      demo: "https://thesolvers.online"
    },
    {
      title: "High-Frequency Data Pipeline",
      category: "Data & ML Infrastructure",
      description: "Scalable streaming pipeline processing 10k+ events/sec with sub-50ms latency and interactive analytics.",
      tech: ["Python", "FastAPI", "Redis", "Docker"],
      year: "2024",
      github: "https://github.com/NEGO2522"
    }
  ];

  return (
    <section id="work" className="py-16 sm:py-20 md:py-28 px-5 sm:px-8 lg:px-14 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-3">Selected Work</p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-black">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">
            A showcase of recent full stack applications, AI pipelines, and digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-3xl p-6 sm:p-10 hover:border-black transition-all bg-white shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{project.category}</span>
                  <h3 className="text-xl sm:text-3xl font-black text-black mt-1 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t, ti) => (
                      <span key={ti} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-colors"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
