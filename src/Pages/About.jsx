import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiArrowDownRight, FiCode, FiCpu, FiLayout, FiMail, FiMapPin } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiFigma, SiGit } from 'react-icons/si';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import jaipurMap from '../assets/jaipur_map.png';
import Footer from './Footer';

const FONT = { fontFamily: '"Clash Display", "DM Sans", "Segoe UI", system-ui, sans-serif' };

export default function About() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const skills = [
    { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)", "HTML5 / CSS3"] },
    { category: "Backend & DB", items: ["Node.js", "Express.js", "Python (Django/FastAPI)", "MongoDB", "PostgreSQL", "REST APIs"] },
    { category: "AI & Workflows", items: ["AI Model Integration", "LLM Fine-tuning / APIs", "Computer Vision", "NLP Workflows", "Python ML Stack"] },
    { category: "Tools & Deploy", items: ["Git & GitHub", "Vercel / Netlify", "AWS Basics", "Docker", "Vite", "NPM / Yarn"] }
  ];

  return (
    <div 
      data-scrollbar-thumb="#000000"
      data-scrollbar-track="#f4f2ec"
      className="text-black bg-[#f4f2ec] overflow-x-clip min-h-screen pt-24 sm:pt-28 font-sans select-none flex flex-col justify-between" 
      style={FONT}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Center Editorial Profile Hero */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col items-center text-center mt-8 mb-8 sm:mb-12"
        >
          {/* Profile Photo */}
          <div className="w-32 h-32 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-black/10 shadow-md select-none">
            <img src={img1} alt="Profile" className="w-full h-full object-cover" />
          </div>

          {/* Headline */}
          <h1 
            className="text-[42px] sm:text-6xl font-semibold tracking-tight text-neutral-950 mt-8 font-serif leading-[1.12]"
            style={{ fontFamily: '"Playfair Display", "DM Serif Display", Georgia, serif' }}
          >
            I am the one<br className="block sm:hidden" /> who knocks
          </h1>

          {/* Bio Paragraph (Desktop View - Single Block) */}
          <p className="hidden sm:block max-w-2xl text-base text-neutral-800 font-medium leading-[1.65] mt-6 px-4">
            I'm just a curious guy who loves creating cool and fun stuff. I work at the intersection of clean full-stack dev and smart AI workflows, shipping responsive web apps that look premium and run fast. Based in Jaipur, India, I'm all about clean code, smooth animations, and building interfaces that actually feel alive. Whether I'm integrating LLMs or polishing micro-interactions in the IDE, I'm constantly cooking up digital experiences that bridge the gap between design and pure functionality.
          </p>

          {/* Bio Paragraph (Mobile View - Split into 4 lines with close line spacing) */}
          <div className="block sm:hidden max-w-2xl text-[17px] text-neutral-800 font-medium leading-[1.65] mt-6 px-4">
            <p>
              I'm just a curious guy who loves creating cool and fun stuff.
            </p>
            <p className="mt-1.5">
              I work at the intersection of clean full-stack dev and smart AI workflows, shipping responsive web apps that look premium and run fast.
            </p>
            <p className="mt-1.5">
              Based in Jaipur, India, I'm all about clean code, smooth animations, and building interfaces that actually feel alive.
            </p>
            <p className="mt-1.5">
              Whether I'm integrating LLMs or polishing micro-interactions in the IDE, I'm constantly cooking up digital experiences that bridge the gap between design and pure functionality.
            </p>
          </div>
        </motion.div>

        {/* Fanned Editorial Photo Cards (Desktop / Tablet View Only) */}
        {(() => {
          const cards = [
            { id: 1, src: img1, rotate: -10, translateX: -165, mobileTranslateX: -95, zIndex: 10 },
            { id: 2, src: img2, rotate: -3, translateX: -55, mobileTranslateX: -32, zIndex: 20 },
            { id: 3, src: img3, rotate: 3, translateX: 55, mobileTranslateX: 32, zIndex: 30 },
            { id: 4, src: img4, rotate: 10, translateX: 165, mobileTranslateX: 95, zIndex: 40 }
          ];
          return (
            <motion.div 
              variants={itemVariants} 
              className="hidden sm:flex justify-center items-center h-[530px] mt-6 mb-24 overflow-visible select-none max-w-4xl mx-auto px-4"
            >
              <div className="relative flex items-center justify-center w-full h-full">
                {cards.map((card, idx) => {
                  const isHovered = hoveredIdx === idx;
                  const isAnyHovered = hoveredIdx !== null;
                  
                  // Calculate translation shift when another card is hovered
                  let shiftX = 0;
                  if (isAnyHovered && !isHovered) {
                    shiftX = idx < hoveredIdx ? -35 : 35; // Shift left or right by 35px
                  }
                  
                  return (
                    <motion.div
                      key={card.id}
                      className="absolute w-44 h-58 sm:w-72 sm:h-96 rounded-2xl sm:rounded-3xl border-2 border-white overflow-hidden bg-white origin-bottom cursor-pointer transition-shadow duration-300"
                      style={{
                        zIndex: isHovered ? 50 : card.zIndex,
                        boxShadow: isHovered 
                          ? "0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.15)"
                          : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                      }}
                      animate={{
                        x: isMobile 
                          ? card.mobileTranslateX + (shiftX * 0.5)
                          : card.translateX + shiftX,
                        y: isHovered ? -30 : 0,
                        rotate: isHovered ? 0 : card.rotate,
                        scale: isHovered ? 1.12 : (isAnyHovered ? 0.92 : 1),
                        opacity: isHovered ? 1 : (isAnyHovered ? 0.55 : 1),
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 24
                      }}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
                      <img 
                        src={card.src} 
                        alt={`Portrait ${card.id}`} 
                        className="w-full h-full object-cover pointer-events-none" 
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })()}

        {/* Infinite Scrolling Photo Carousel (Mobile Phone View Only - Full bleed edge-to-edge) */}
        <motion.div 
          variants={itemVariants}
          className="block sm:hidden w-screen -ml-6 overflow-hidden mt-6 mb-12 relative select-none"
        >
          <style>{`
            @keyframes aboutMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-about-marquee {
              animation: aboutMarquee 15s linear infinite;
            }
          `}</style>
          
          <div className="w-full overflow-hidden">
            <div className="flex w-max animate-about-marquee">
              {/* Group 1 */}
              <div className="flex gap-4 pr-4">
                {[img1, img2, img3, img4].map((src, idx) => (
                  <div 
                    key={`about-m-g1-${idx}`} 
                    className="w-[145px] h-[200px] rounded-[20px] overflow-hidden border border-black/5 shrink-0 bg-white shadow-xs"
                  >
                    <img 
                      src={src} 
                      className="w-full h-full object-cover pointer-events-none" 
                      alt={`Gallery ${idx}`} 
                    />
                  </div>
                ))}
              </div>
              {/* Group 2 (Identical loop copy) */}
              <div className="flex gap-4 pr-4" aria-hidden="true">
                {[img1, img2, img3, img4].map((src, idx) => (
                  <div 
                    key={`about-m-g2-${idx}`} 
                    className="w-[145px] h-[200px] rounded-[20px] overflow-hidden border border-black/5 shrink-0 bg-white shadow-xs"
                  >
                    <img 
                      src={src} 
                      className="w-full h-full object-cover pointer-events-none" 
                      alt={`Gallery copy ${idx}`} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid Section ("Beyond Portfolio") */}
        <motion.div variants={itemVariants} className="mt-16 sm:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column: Title Block & Spoken Languages (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="flex flex-col items-start gap-3">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-500 select-none">
                  Beyond Portfolio
                </span>
                <h2 
                  className="text-[38px] sm:text-4xl lg:text-[42px] font-bold leading-[1.08] tracking-tight text-black font-serif"
                  style={{ fontFamily: '"Playfair Display", "DM Serif Display", Georgia, serif' }}
                >
                  Let's know more<br />about me
                </h2>
              </div>

              {/* Spoken Language Card */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.012 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[32px] p-6 sm:p-8 border border-black/10 shadow-2xs relative flex flex-col justify-between overflow-hidden min-h-[200px] h-fit cursor-pointer group"
              >
                {/* Lime Radial Gradient Hover Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(195,245,60,0.65)_0%,rgba(195,245,60,0.2)_45%,transparent_75%)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center border border-black/5 text-gray-600 shrink-0">
                      <svg className="w-4.5 h-4.5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-black text-lg">Spoken language</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-medium ml-12">Two languages, double the perspective.</p>
                </div>

                {/* Static Side-by-Side Language Tags (Desktop only) */}
                <div className="hidden sm:flex flex-row justify-center items-center gap-3 my-6 relative z-10">
                  {/* English Card */}
                  <div className="bg-white border border-black/8 rounded-2xl p-2 px-3 flex items-center gap-2.5 w-38 shadow-xs cursor-default">
                    <div className="w-9 h-9 rounded-full bg-[#f4f2ec] flex items-center justify-center overflow-hidden shrink-0 border border-black/5 select-none shadow-3xs">
                      <svg viewBox="0 0 60 30" className="w-6.5 h-auto">
                        <rect width="60" height="30" fill="#012169" />
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#c8102e" strokeWidth="4" />
                        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
                        <path d="M30,0 V30 M0,15 H60" stroke="#c8102e" strokeWidth="6" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold leading-tight">
                      <p className="text-black text-xs font-bold">English</p>
                      <p className="text-gray-400 font-medium">Fluent</p>
                    </div>
                  </div>
                  {/* Hindi Card */}
                  <div className="bg-white border border-black/8 rounded-2xl p-2 px-3 flex items-center gap-2.5 w-38 shadow-xs cursor-default">
                    <div className="w-9 h-9 rounded-full bg-[#f4f2ec] flex items-center justify-center overflow-hidden shrink-0 border border-black/5 select-none shadow-3xs">
                      <svg viewBox="0 0 90 60" className="w-6.5 h-auto">
                        <rect width="90" height="20" fill="#FF9933" />
                        <rect y="20" width="90" height="20" fill="#FFFFFF" />
                        <rect y="40" width="90" height="20" fill="#138808" />
                        <circle cx="45" cy="30" r="8" fill="none" stroke="#000080" strokeWidth="1.2" />
                        <circle cx="45" cy="30" r="1.5" fill="#000080" />
                        <path d="M45,22 V38 M37,30 H53 M39.4,24.4 L50.6,35.6 M39.4,35.6 L50.6,24.4" stroke="#000080" strokeWidth="0.6" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold leading-tight">
                      <p className="text-black text-xs font-bold">Hindi</p>
                      <p className="text-gray-500 font-medium">Native</p>
                    </div>
                  </div>
                </div>

                {/* Overlapping Language Tags (Mobile only) */}
                <div className="flex sm:hidden justify-center items-center h-28 my-6 relative z-10 w-full">
                  {/* English Card */}
                  <div className="absolute left-[8%] top-0 -rotate-8 bg-white border border-black/8 rounded-2xl p-2 px-3 flex items-center gap-2.5 w-36 shadow-xs select-none">
                    <div className="w-8 h-8 rounded-full bg-[#f4f2ec] flex items-center justify-center overflow-hidden shrink-0 border border-black/5 shadow-3xs">
                      <svg viewBox="0 0 60 30" className="w-6.5 h-auto">
                        <rect width="60" height="30" fill="#012169" />
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#c8102e" strokeWidth="4" />
                        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
                        <path d="M30,0 V30 M0,15 H60" stroke="#c8102e" strokeWidth="6" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold leading-tight">
                      <p className="text-black text-xs font-bold">English</p>
                      <p className="text-gray-400 font-medium">Fluent</p>
                    </div>
                  </div>

                  {/* Hindi Card (Overlapping) */}
                  <div className="absolute right-[8%] top-3 rotate-6 bg-white border border-black/10 rounded-2xl p-2.5 px-3.5 flex items-center gap-2.5 w-38 shadow-md select-none">
                    <div className="w-8 h-8 rounded-full bg-[#f4f2ec] flex items-center justify-center overflow-hidden shrink-0 border border-black/5 shadow-3xs">
                      <svg viewBox="0 0 90 60" className="w-6.5 h-auto">
                        <rect width="90" height="20" fill="#FF9933" />
                        <rect y="20" width="90" height="20" fill="#FFFFFF" />
                        <rect y="40" width="90" height="20" fill="#138808" />
                        <circle cx="45" cy="30" r="8" fill="none" stroke="#000080" strokeWidth="1.2" />
                        <circle cx="45" cy="30" r="1.5" fill="#000080" />
                        <path d="M45,22 V38 M37,30 H53 M39.4,24.4 L50.6,35.6 M39.4,35.6 L50.6,24.4" stroke="#000080" strokeWidth="0.6" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold leading-tight">
                      <p className="text-black text-xs font-bold">Hindi</p>
                      <p className="text-gray-500 font-medium">Native</p>
                    </div>
                  </div>
                </div>

                {/* 3D Wireframe Globe (Desktop only) */}
                <div className="hidden sm:flex relative w-full aspect-square bg-black rounded-full overflow-hidden items-center justify-center -mb-28 sm:-mb-36 mt-4 z-10">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-white/30 stroke-current fill-none animate-[spin_32s_linear_infinite]">
                    <g className="fill-white/8 stroke-white/12" strokeWidth="0.75">
                      <path d="M120,40 Q130,30 150,35 Q170,40 180,60 Q185,75 175,90 Q160,110 170,130 Q165,140 150,135 Q135,130 130,120 Q120,115 115,100 Q105,95 110,80 Q100,70 120,40 Z" />
                      <path d="M80,50 Q95,45 105,60 Q100,75 90,80 Q85,95 75,100 Q70,120 60,110 Q55,95 65,85 Q60,70 80,50 Z" />
                      <path d="M30,60 Q45,55 55,70 Q50,90 45,100 Q48,120 40,130 Q35,145 38,160 Q32,150 25,130 Q28,110 32,95 Q25,80 30,60 Z" />
                      <path d="M140,145 Q155,140 165,150 Q160,165 145,160 Q135,155 140,145 Z" />
                    </g>
                    <circle cx="100" cy="100" r="90" strokeWidth="1" strokeDasharray="2 4" />
                    <ellipse cx="100" cy="100" rx="90" ry="30" strokeWidth="1" strokeDasharray="2 4" />
                    <ellipse cx="100" cy="100" rx="90" ry="60" strokeWidth="1" strokeDasharray="2 4" />
                    <ellipse cx="100" cy="100" rx="30" ry="90" strokeWidth="1" strokeDasharray="2 4" />
                    <ellipse cx="100" cy="100" rx="60" ry="90" strokeWidth="1" strokeDasharray="2 4" />
                    <line x1="10" y1="100" x2="190" y2="100" strokeWidth="1" strokeDasharray="2 4" />
                    <line x1="100" y1="10" x2="100" y2="190" strokeWidth="1" strokeDasharray="2 4" />
                  </svg>
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/85 pointer-events-none" />
                </div>

                {/* Constrained Dotted Globe (Mobile only) */}
                <div className="flex sm:hidden relative w-48 h-48 bg-black rounded-full overflow-hidden items-center justify-center -mb-20 mt-4 mx-auto z-10">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-white/30 stroke-current fill-none animate-[spin_32s_linear_infinite]">
                    <g className="fill-white/8 stroke-white/12" strokeWidth="0.75">
                      <path d="M120,40 Q130,30 150,35 Q170,40 180,60 Q185,75 175,90 Q160,110 170,130 Q165,140 150,135 Q135,130 130,120 Q120,115 115,100 Q105,95 110,80 Q100,70 120,40 Z" />
                      <path d="M80,50 Q95,45 105,60 Q100,75 90,80 Q85,95 75,100 Q70,120 60,110 Q55,95 65,85 Q60,70 80,50 Z" />
                      <path d="M30,60 Q45,55 55,70 Q50,90 45,100 Q48,120 40,130 Q35,145 38,160 Q32,150 25,130 Q28,110 32,95 Q25,80 30,60 Z" />
                      <path d="M140,145 Q155,140 165,150 Q160,165 145,160 Q135,155 140,145 Z" />
                    </g>
                    <circle cx="100" cy="100" r="90" strokeWidth="1" strokeDasharray="2 4" />
                    <ellipse cx="100" cy="100" rx="90" ry="30" strokeWidth="1" strokeDasharray="2 4" />
                    <ellipse cx="100" cy="100" rx="90" ry="60" strokeWidth="1" strokeDasharray="2 4" />
                    <ellipse cx="100" cy="100" rx="30" ry="90" strokeWidth="1" strokeDasharray="2 4" />
                    <ellipse cx="100" cy="100" rx="60" ry="90" strokeWidth="1" strokeDasharray="2 4" />
                    <line x1="10" y1="100" x2="190" y2="100" strokeWidth="1" strokeDasharray="2 4" />
                    <line x1="100" y1="10" x2="100" y2="190" strokeWidth="1" strokeDasharray="2 4" />
                  </svg>
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/85 pointer-events-none" />
                </div>
              </motion.div>
            </div>

            {/* Middle Column: Tech Stacks & Values (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Tech Stack Card */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.012 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[32px] p-6 sm:p-8 border border-black/10 shadow-2xs flex flex-col justify-between min-h-[220px] cursor-pointer relative overflow-hidden group"
              >
                {/* Lime Radial Gradient Hover Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(195,245,60,0.65)_0%,rgba(195,245,60,0.2)_45%,transparent_75%)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center border border-black/5 text-gray-600 shrink-0">
                      <svg className="w-4.5 h-4.5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M4.5 12l-3 3m3-3l3 3" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-black text-lg">My tech staks</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-medium ml-12">If you like using these tools too, we'll get along just fine.</p>
                </div>

                {/* Scrolling Tech Marquees (Desktop only) */}
                <div className="hidden sm:flex flex-col gap-3 py-1 relative w-full overflow-hidden mt-6 z-10">
                  {/* Left & Right Fade Overlay */}
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                  {/* Row 1 (Scrolling Left) */}
                  <div className="flex w-full overflow-hidden">
                    <motion.div 
                      className="flex gap-2 shrink-0 pr-2"
                      animate={{ x: [0, "-50%"] }}
                      transition={{
                        ease: "linear",
                        duration: 18,
                        repeat: Infinity
                      }}
                    >
                      {/* Set 1 */}
                      {["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript", "Git & GitHub", "Vercel", "Docker", "Vite", "Figma"].map((item, i) => (
                        <span key={i} className="px-3.5 py-1.5 rounded-full border border-black/8 bg-gray-50/40 text-[10px] sm:text-xs font-bold text-gray-700 select-none">
                          {item}
                        </span>
                      ))}
                      {/* Duplicate for loop */}
                      {["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript", "Git & GitHub", "Vercel", "Docker", "Vite", "Figma"].map((item, i) => (
                        <span key={`dup1-${i}`} className="px-3.5 py-1.5 rounded-full border border-black/8 bg-gray-50/40 text-[10px] sm:text-xs font-bold text-gray-700 select-none">
                          {item}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Row 2 (Scrolling Right) */}
                  <div className="flex w-full overflow-hidden">
                    <motion.div 
                      className="flex gap-2 shrink-0 pr-2"
                      animate={{ x: ["-50%", 0] }}
                      transition={{
                        ease: "linear",
                        duration: 18,
                        repeat: Infinity
                      }}
                    >
                      {/* Set 2 */}
                      {["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL", "REST APIs", "AI Models", "LLM APIs", "Computer Vision", "NLP Workflows"].map((item, i) => (
                        <span key={i} className="px-3.5 py-1.5 rounded-full border border-black/8 bg-gray-50/40 text-[10px] sm:text-xs font-bold text-gray-700 select-none">
                          {item}
                        </span>
                      ))}
                      {/* Duplicate for loop */}
                      {["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL", "REST APIs", "AI Models", "LLM APIs", "Computer Vision", "NLP Workflows"].map((item, i) => (
                        <span key={`dup2-${i}`} className="px-3.5 py-1.5 rounded-full border border-black/8 bg-gray-50/40 text-[10px] sm:text-xs font-bold text-gray-700 select-none">
                          {item}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Tech icon grid/row (Mobile only) */}
                <div className="flex sm:hidden flex-wrap justify-center items-center gap-3 mt-6 py-1 relative w-full z-10">
                  {[
                    { icon: <SiReact className="w-6 h-6 text-[#61dafb]" /> },
                    { icon: <SiNextdotjs className="w-6 h-6 text-black" /> },
                    { icon: <SiNodedotjs className="w-6 h-6 text-[#339933]" /> },
                    { icon: <SiPython className="w-6 h-6 text-[#3776ab]" /> },
                    { icon: <SiFigma className="w-6 h-6 text-[#f24e1e]" /> },
                    { icon: <SiGit className="w-6 h-6 text-[#f05032]" /> }
                  ].map((item, idx) => (
                    <div 
                      key={`tech-icon-m-${idx}`} 
                      className="w-13 h-13 rounded-[16px] bg-[#f4f2ec] border border-black/5 flex items-center justify-center shadow-3xs shrink-0 hover:scale-105 transition-transform duration-300"
                    >
                      {item.icon}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Take a Look at My Values Card */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.012 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[32px] p-6 sm:p-8 border border-black/10 shadow-2xs flex flex-col justify-between cursor-pointer relative overflow-hidden group"
              >
                {/* Lime Radial Gradient Hover Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(195,245,60,0.65)_0%,rgba(195,245,60,0.2)_45%,transparent_75%)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center border border-black/5 text-gray-600 shrink-0">
                      <svg className="w-4.5 h-4.5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-black text-lg">Take a look at my values</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-medium ml-12">Through various projects, I've acquired valuable skills.</p>
                </div>

                {/* Staggered overlapping pill badges */}
                <div className="flex flex-col items-start gap-2.5 mt-6 font-semibold text-xs sm:text-sm relative z-10">
                  <div className="px-4.5 py-2.5 rounded-full border border-black/10 bg-white text-black hover:border-black transition-colors self-end mr-6 shadow-2xs hover:scale-102 transition-transform duration-300">
                    Super fast delivery
                  </div>
                  <div className="px-4.5 py-2.5 rounded-full border border-black/10 bg-white text-black hover:border-black transition-colors shadow-2xs hover:scale-102 transition-transform duration-300">
                    Focus on high-quality
                  </div>
                  <div className="px-4.5 py-2.5 rounded-full border border-black/10 bg-white text-black hover:border-black transition-colors self-center shadow-2xs hover:scale-102 transition-transform duration-300">
                    Attention to detail
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Map (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col">
              {/* Map Card */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.012 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full flex-grow min-h-[300px] rounded-[32px] border border-black/10 overflow-hidden shadow-2xs group cursor-pointer"
              >
                {/* Map image */}
                <img src={jaipurMap} alt="Jaipur Map" className="absolute inset-0 w-full h-full object-cover scale-[1.22] select-none group-hover:scale-[1.3] group-active:scale-[1.3] transition-transform duration-700 ease-out" />
                
                {/* Lime Radial Gradient Hover Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(195,245,60,0.65)_0%,rgba(195,245,60,0.2)_45%,transparent_75%)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                
                {/* Center Avatar Pin */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring */}
                    <span className="absolute w-16 h-16 rounded-full bg-[#b8f500]/40 border border-[#b8f500] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                    {/* Inner circle with avatar */}
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-white overflow-hidden shadow-md relative z-10 select-none">
                      <img src={img1} alt="Kshitij Avatar" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Floating Location Tag */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs border border-black/10 rounded-xl px-3.5 py-2 flex items-center gap-2 shadow-xs select-none">
                  <span className="text-xs">📍</span>
                  <span className="text-xs font-bold text-black tracking-tight">Jaipur, RJ</span>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>




      </motion.div>

      {/* Experience Section (Full Width Black Section with Arch) */}
      <div className="relative bg-black text-white w-full pt-20 pb-32 px-6 md:px-12 mt-16 z-20">
        {/* Arch top border */}
        <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 -translate-y-[99%] overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full fill-black">
            <path d="M0,100 C360,20 1080,20 1440,100 L1440,100 L0,100 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500">My Experiences</span>
            <h2 
              className="text-3xl sm:text-5xl font-normal tracking-tight text-white mt-3 font-serif"
              style={{ fontFamily: '"Playfair Display", "DM Serif Display", Georgia, serif' }}
            >
              Basically, this is my journey
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Label */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 flex items-center gap-3 text-white/40 font-bold text-lg sm:text-xl uppercase tracking-wider select-none">
                <span>💼</span>
                <span>Experience</span>
              </div>
            </div>

            {/* Right Column: Experience Items */}
            <div className="lg:col-span-8 flex flex-col gap-10 sm:gap-12">
              {/* Item 1 */}
              <div className="flex flex-col items-start">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Real-time Problem Solving, <a href="https://poornima.edu.in/life-at-poornima/menu-facility/" target="_blank" rel="noopener noreferrer" className="text-[#b8f500] cursor-pointer">Poornima University</a>
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-1">
                  Sept. 2024 – Nov. 2024 / Jaipur, RJ
                </p>
                <ul className="text-sm sm:text-base text-gray-400 leading-relaxed mt-4 list-disc pl-4 flex flex-col gap-2">
                  <li>Engineered and deployed a real-time digital mess menu system to solve campus cafeteria food scheduling updates and latency issues.</li>
                  <li>Streamlined daily dining coordination, making dynamic menu schedules instantly accessible to over 3,000+ students and hostel staff.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["React.js", "Node.js", "Express.js", "Tailwind CSS", "SQL", "Real-time API"].map((tag, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs text-white/70 font-semibold select-none">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-white/10" />

              {/* Item 2 */}
              <div className="flex flex-col items-start">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Freelancing, <a href="https://lathishop.com" target="_blank" rel="noopener noreferrer" className="text-[#b8f500] cursor-pointer ml-1.5">(Lathishop)</a>
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-1">
                  Jan. 2024 – May 2026 / Jaipur, RJ (Remote)
                </p>
                <ul className="text-sm sm:text-base text-gray-400 leading-relaxed mt-4 list-disc pl-4 flex flex-col gap-2">
                  <li>Designed and shipped high-performance web applications, including building a custom headless e-commerce store for Lathishop.</li>
                  <li>Connected OpenAI/Anthropic APIs and customized LLM prompts for smart AI workflow integrations.</li>
                  <li>Optimized rendering metrics, Web Vitals performance, and custom SVG animations for visual excellence.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["React.js", "Next.js", "Node.js", "Tailwind CSS", "Framer Motion", "MongoDB", "AI APIs"].map((tag, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs text-white/70 font-semibold select-none">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-white/10" />

              {/* Item 2 */}
              <div className="flex flex-col items-start">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Tech Intern, <a href="https://cuetpro.com" target="_blank" rel="noopener noreferrer" className="text-[#b8f500] cursor-pointer">CuetPro</a>
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-1">
                  June 2026 – July 2026 / Jaipur, RJ (Hybrid)
                </p>
                <ul className="text-sm sm:text-base text-gray-400 leading-relaxed mt-4 list-disc pl-4 flex flex-col gap-2">
                  <li>Developed custom web utility tools integrated across 3-4 different company portals to streamline operational workflows.</li>
                  <li>Engineered a high-performance student preparation tool that scaled rapidly, reaching over 5,000+ active student users.</li>
                  <li>Built secure full-stack modules and implemented relational database integrations using Supabase and SQL.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["React.js", "Node.js", "Express.js", "MongoDB", "Supabase", "SQL", "MERN Stack"].map((tag, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs text-white/70 font-semibold select-none">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-white/10" />

              {/* Item 3 */}
              <div className="flex flex-col items-start">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug flex flex-wrap items-center gap-x-2">
                  <span>Product Building,</span>
                  <a href="https://fuudr.com" target="_blank" rel="noopener noreferrer" className="text-[#b8f500] cursor-pointer">Fuudr</a>
                  <span className="inline-block bg-[#ff73b5] text-black text-[9px] font-bold px-2 py-0.5 rounded-[5px] rotate-[6deg] tracking-wider uppercase ml-1.5 select-none shrink-0">
                    CURRENT
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-1">
                  Aug. 2026 – Current / Jaipur, RJ (Hybrid)
                </p>
                <ul className="text-sm sm:text-base text-gray-400 leading-relaxed mt-4 list-disc pl-4 flex flex-col gap-2">
                  <li>Co-founded and engineered Fuudr, an interactive food delivery platform allowing users to discover dishes and order directly through video reels instead of static photos.</li>
                  <li>Developed and deployed the official web platform, optimizing media pipelines for video streaming with minimal latency.</li>
                  <li>Leading the architecture of the native mobile app, preparing for upcoming deployment on the Google Play Store.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["React.js", "Next.js", "React Native", "Tailwind CSS", "Supabase", "SQL", "HLS Streaming"].map((tag, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs text-white/70 font-semibold select-none">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider between Experience and Education */}
          <div className="w-full h-px bg-white/10 my-16 sm:my-24" />

          {/* Education Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Label */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 flex items-center gap-3 text-white/40 font-bold text-lg sm:text-xl uppercase tracking-wider select-none">
                <span>📜</span>
                <span>Education</span>
              </div>
            </div>

            {/* Right Column: Education Items */}
            <div className="lg:col-span-8 flex flex-col gap-10 sm:gap-12">
              {/* Item 1 */}
              <div className="flex flex-col items-start">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Bachelor of Technology (B.Tech), <span className="text-[#b8f500]">Poornima University</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-1">
                  2024 – 2028 (Present) / Jaipur, Rajasthan, India
                </p>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed mt-3">
                  Computer Science &amp; Engineering. Specialized in software architectures, full-stack frameworks, database design, and machine learning models.
                </p>
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-white/10" />

              {/* Item 2 */}
              <div className="flex flex-col items-start">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Higher Secondary Education, <span className="text-[#b8f500]">Bright Future Sr. Sec. School</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-1">
                  Jaipur, Rajasthan, India
                </p>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed mt-3">
                  Science &amp; Mathematics (PCM). Focus on logic building, algorithm design basics, and advanced physics/math principles.
                </p>
              </div>
            </div>
          </div>

          {/* Fanned Polaroids and Download CV Section */}
          <div className="flex flex-col items-center mt-20 sm:mt-28">
            {/* Polaroids Container */}
            <div className="relative flex items-center justify-center w-full h-[320px] overflow-visible select-none">
              
              {/* Product Builder Tag (Floats on top of both cards) */}
              <div 
                className="absolute top-[40%] left-[50%] -translate-x-[42px] sm:-translate-x-[62px] -rotate-[8deg] flex items-center z-30 select-none whitespace-nowrap"
              >
                {/* Small orange pointer triangle */}
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-[#ffb076] -mr-[1px]" />
                {/* The tag body */}
                <div className="bg-[#ffb076] text-black text-[11px] sm:text-xs font-bold tracking-tight px-2.5 py-1 rounded-xs shadow-xs">
                  Product Builder
                </div>
              </div>
              {/* Polaroid 1 (Left) */}
              <motion.div 
                className="absolute bg-white p-3 pb-5 sm:pb-6 shadow-xl border border-black/5 rounded-xs w-48 sm:w-56 -translate-x-[60px] sm:-translate-x-[80px] -rotate-[8deg] z-10 transition-all duration-300 origin-center cursor-default"
              >
                <div className="relative aspect-[4/4.8] w-full bg-gray-100 overflow-hidden border border-black/5">
                  <img src={img2} alt="Meetup presentation" className="w-full h-full object-cover filter grayscale contrast-115 brightness-95" />
                </div>
                {/* Custom Brand Logo (Heart) */}
                <div className="flex items-center justify-start mt-2 w-full select-none pl-1">
                  <svg viewBox="0 0 100 80" className="w-7.5 h-6 text-[#4b351e] fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M50,22 C50,8 15,8 15,35 C15,55 50,75 50,75 C50,75 85,55 85,35 C85,8 50,8 50,22 Z" />
                    <circle cx="15" cy="35" r="3.5" fill="white" className="stroke-current" strokeWidth="2.5" />
                    <circle cx="85" cy="35" r="3.5" fill="white" className="stroke-current" strokeWidth="2.5" />
                    <circle cx="50" cy="75" r="3.5" fill="white" className="stroke-current" strokeWidth="2.5" />
                    {/* Stripes inside */}
                    <path d="M30,22 V53" strokeWidth="2" />
                    <path d="M40,16 V63" strokeWidth="2" />
                    <path d="M50,15 V72" strokeWidth="2" />
                    <path d="M60,16 V63" strokeWidth="2" />
                    <path d="M70,22 V53" strokeWidth="2" />
                    {/* "life" hand-drawn letter strokes inside heart slots */}
                    <path d="M30,30 V42" strokeWidth="3" />
                    <path d="M40,32 V42" strokeWidth="3" />
                    <circle cx="40" cy="27" r="1.5" fill="currentColor" stroke="none" />
                    <path d="M50,30 V42" strokeWidth="3" />
                    <path d="M47,33 H53" strokeWidth="2" />
                    <path d="M60,33 C60,30 65,30 65,34 C65,37 60,37 60,37 H65" strokeWidth="2" />
                  </svg>
                </div>
              </motion.div>

              {/* Polaroid 2 (Right) */}
              <motion.div 
                className="absolute bg-white p-3 pb-5 sm:pb-6 shadow-xl border border-black/5 rounded-xs w-48 sm:w-56 translate-x-[60px] sm:translate-x-[80px] rotate-[8deg] z-20 transition-all duration-300 origin-center cursor-default"
              >
                <div className="relative aspect-[4/4.8] w-full bg-gray-100 overflow-hidden border border-black/5">
                  <img src={img3} alt="ChatGPT Slide Presentation" className="w-full h-full object-cover filter grayscale contrast-115 brightness-95" />
                </div>
                {/* Custom Brand Logo (Heart) */}
                <div className="flex items-center justify-start mt-2 w-full select-none pl-1">
                  <svg viewBox="0 0 100 80" className="w-7.5 h-6 text-[#4b351e] fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M50,22 C50,8 15,8 15,35 C15,55 50,75 50,75 C50,75 85,55 85,35 C85,8 50,8 50,22 Z" />
                    <circle cx="15" cy="35" r="3.5" fill="white" className="stroke-current" strokeWidth="2.5" />
                    <circle cx="85" cy="35" r="3.5" fill="white" className="stroke-current" strokeWidth="2.5" />
                    <circle cx="50" cy="75" r="3.5" fill="white" className="stroke-current" strokeWidth="2.5" />
                    {/* Stripes inside */}
                    <path d="M30,22 V53" strokeWidth="2" />
                    <path d="M40,16 V63" strokeWidth="2" />
                    <path d="M50,15 V72" strokeWidth="2" />
                    <path d="M60,16 V63" strokeWidth="2" />
                    <path d="M70,22 V53" strokeWidth="2" />
                    {/* "life" hand-drawn letter strokes inside heart slots */}
                    <path d="M30,30 V42" strokeWidth="3" />
                    <path d="M40,32 V42" strokeWidth="3" />
                    <circle cx="40" cy="27" r="1.5" fill="currentColor" stroke="none" />
                    <path d="M50,30 V42" strokeWidth="3" />
                    <path d="M47,33 H53" strokeWidth="2" />
                    <path d="M60,33 C60,30 65,30 65,34 C65,37 60,37 60,37 H65" strokeWidth="2" />
                  </svg>
                </div>
              </motion.div>

            </div>

            {/* Download CV Button */}
            <div className="mt-12 sm:mt-16 mb-4">
              <a 
                href="/data/Kshitij Jain- Resume.pdf" 
                download="Kshitij_Jain_Resume.pdf"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white rounded-full px-8 py-3.5 text-sm font-semibold text-white bg-transparent hover:bg-white hover:text-black transition-all duration-500 ease-in-out cursor-pointer shadow-xs select-none"
              >
                <span>Download my CV</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer is placed here to span full width */}
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
