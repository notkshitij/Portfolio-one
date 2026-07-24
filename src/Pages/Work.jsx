import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';

const FONT = {
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
};

const filterTabs = [
  { name: 'Product',    color: 'bg-[#c3f53c] text-black' },
  { name: 'AI',         color: 'bg-[#fef076] text-black' },
  { name: 'Web',        color: 'bg-[#cce5ff] text-black' },
  { name: 'App',        color: 'bg-[#abebd0] text-black' },
  { name: 'Blockchain', color: 'bg-[#eac8fc] text-black' },
  { name: 'UI/UX',      color: 'bg-[#f4b97d] text-black' }
];

// Dynamic background watermark generator based on project topic
const getWatermarkSVG = (id) => {
  switch (id) {
    case 'fuudr':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-4 -bottom-6 w-36 h-36 text-[#ff0054]/8 fill-current rotate-12 pointer-events-none z-0">
          <path d="M50,10 L90,80 L10,80 Z M35,45 C38,45 40,42 40,39 Z M65,45 C68,45 70,42 70,39 Z M50,65 C55,65 58,62 58,57 Z" />
        </svg>
      );
    case 'thesolvers':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-6 -bottom-6 w-40 h-40 text-emerald-500/[0.04] fill-none stroke-current stroke-[2] pointer-events-none z-0">
          <path d="M10,10 L90,10 L90,90 L10,90 Z M30,30 L70,30 L70,70 L30,70 Z" />
          <line x1="10" y1="10" x2="90" y2="90" />
          <line x1="90" y1="10" x2="10" y2="90" />
        </svg>
      );
    case 'lathishop':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-4 -bottom-6 w-36 h-36 text-orange-600/[0.07] fill-none stroke-current stroke-[3] pointer-events-none z-0">
          <path d="M20,30 H80 L75,80 H25 Z M35,30 V20 C35,12 65,12 65,20 V30" />
          <circle cx="50" cy="55" r="10" />
        </svg>
      );
    case 'clientsample':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-8 -bottom-8 w-44 h-44 text-[#334155]/[0.05] fill-none stroke-current stroke-[1.5] pointer-events-none z-0">
          <rect x="10" y="20" width="80" height="50" rx="4" />
          <line x1="10" y1="35" x2="90" y2="35" />
          <circle cx="20" cy="27" r="2" fill="currentColor" />
          <circle cx="28" cy="27" r="2" fill="currentColor" />
          <circle cx="36" cy="27" r="2" fill="currentColor" />
          <rect x="20" y="45" width="30" height="6" rx="1" />
          <rect x="55" y="45" width="25" height="18" rx="1" />
        </svg>
      );
    case 'linkaura':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-6 -bottom-6 w-36 h-36 text-[#6b21a8]/[0.06] fill-none stroke-current stroke-[2] pointer-events-none z-0">
          <circle cx="30" cy="30" r="8" fill="currentColor" />
          <circle cx="70" cy="30" r="8" fill="currentColor" />
          <circle cx="50" cy="70" r="8" fill="currentColor" />
          <line x1="30" y1="30" x2="70" y2="30" />
          <line x1="30" y1="30" x2="50" y2="70" />
          <line x1="70" y1="30" x2="50" y2="70" />
        </svg>
      );
    case 'zorvyn':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-4 -bottom-6 w-36 h-36 text-[#38bdf8]/[0.05] fill-none stroke-current stroke-[3] pointer-events-none z-0">
          <path d="M10,80 L30,55 L50,65 L90,20" />
          <circle cx="90" cy="20" r="4" fill="currentColor" />
          <line x1="10" y1="80" x2="90" y2="80" />
        </svg>
      );
    case 'founderflow':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-6 -bottom-6 w-36 h-36 text-white/[0.05] fill-none stroke-current stroke-[2.5] pointer-events-none z-0">
          <rect x="15" y="15" width="25" height="20" rx="3" />
          <rect x="55" y="55" width="30" height="25" rx="3" />
          <path d="M30,35 V65 H55" />
          <polygon points="55,60 62,65 55,70" fill="currentColor" />
        </svg>
      );
    case 'clyro':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-6 -bottom-6 w-36 h-36 text-orange-100/[0.06] fill-none stroke-current stroke-[2] pointer-events-none z-0">
          <rect x="15" y="15" width="40" height="45" rx="3" />
          <rect x="40" y="30" width="45" height="50" rx="3" className="rotate-12" />
        </svg>
      );
    case 'portfolio':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-4 -bottom-4 w-32 h-32 text-white/[0.03] fill-current pointer-events-none z-0 font-sans font-black">
          <text x="10" y="80" fontSize="75">K</text>
        </svg>
      );
    case 'autoslay':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-6 -bottom-6 w-36 h-36 text-[#0f3c21]/[0.05] fill-none stroke-current stroke-[2] pointer-events-none z-0">
          <circle cx="50" cy="50" r="20" />
          <path d="M50,15 V30 M50,70 V85 M15,50 H30 M70,50 H85" />
          <path d="M25,25 L35,35 M65,65 L75,75 M75,25 L65,35 M35,65 L25,75" />
        </svg>
      );
    case 'cuetpro':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-4 -bottom-6 w-36 h-36 text-white/[0.04] fill-none stroke-current stroke-[2] pointer-events-none z-0">
          <rect x="20" y="15" width="55" height="70" rx="4" />
          <line x1="30" y1="30" x2="65" y2="30" />
          <line x1="30" y1="45" x2="65" y2="45" />
          <path d="M30,65 L40,75 L65,50" />
        </svg>
      );
    case 'solversstudio':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-6 -bottom-6 w-36 h-36 text-neutral-900/[0.04] fill-none stroke-current stroke-[2] pointer-events-none z-0">
          <rect x="15" y="15" width="70" height="70" rx="4" />
          <line x1="15" y1="50" x2="85" y2="50" />
          <line x1="50" y1="15" x2="50" y2="85" />
        </svg>
      );
    case 'campusleague':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-6 -bottom-6 w-36 h-36 text-[#f43f5e]/[0.05] fill-none stroke-current stroke-[2] pointer-events-none z-0">
          <circle cx="50" cy="50" r="30" />
          <path d="M20,50 Q50,70 80,50 M50,20 Q50,50 50,80" />
        </svg>
      );
    case 'zkshield':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-6 -bottom-6 w-36 h-36 text-[#a855f7]/[0.06] fill-none stroke-current stroke-[2] pointer-events-none z-0">
          <polygon points="50,15 80,30 80,65 50,85 20,65 20,30" />
          <path d="M50,15 V85 M20,30 L80,65 M20,65 L80,30" />
        </svg>
      );
    case 'dailywages':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-4 -bottom-6 w-36 h-36 text-[#5c3e21]/[0.05] fill-none stroke-current stroke-[2.5] pointer-events-none z-0">
          <rect x="15" y="25" width="70" height="50" rx="4" />
          <circle cx="50" cy="50" r="14" />
          <text x="44" y="58" fontSize="20" fill="currentColor" stroke="none" className="font-bold">$</text>
        </svg>
      );
    case 'sih-college':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-6 -bottom-6 w-36 h-36 text-[#0f766e]/[0.06] fill-none stroke-current stroke-[2] pointer-events-none z-0">
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="20" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
      );
    case 'sted':
      return (
        <svg viewBox="0 0 100 100" className="absolute -right-6 -bottom-6 w-36 h-36 text-[#b43c5c]/[0.06] fill-none stroke-current stroke-[2] pointer-events-none z-0">
          <path d="M20,20 L35,15 L50,22 L65,15 L80,20" />
          <path d="M20,40 Q50,20 80,40" />
          <polygon points="50,45 60,65 80,65 65,75 70,95 50,80 30,95 35,75 20,65 40,65" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Work() {
  const [activeTab, setActiveTab] = useState(null); // null means "All" are active / shown

  const handleTabClick = (tabName) => {
    if (activeTab === tabName) {
      setActiveTab(null); // Toggle off -> shows all
    } else {
      setActiveTab(tabName);
    }
  };

  // Row 1 Projects (8 projects) - Studio Grade Visuals & Premium Gradients
  const row1Cards = [
    {
      id: "fuudr",
      tags: ["Product", "App"],
      element: (
        <a 
          href="https://fuudr.com"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-gradient-to-br from-[#fff0f3] via-[#ffccd5] to-[#ffb3c6] p-7 flex flex-col justify-between select-none relative text-left block"
        >
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#ff0054]/70">E-Commerce</div>
          <div className="flex flex-col items-center justify-center my-auto">
            {/* Miniature UI frame outline for a premium look */}
            <div className="w-12 h-14 border-2 border-[#ff0054]/30 rounded-lg flex items-center justify-center bg-white/40 mb-3 relative">
              <span className="text-xl">🍕</span>
              <div className="absolute bottom-1 w-6 h-1 bg-[#ff0054]/25 rounded-full" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-[#ff0054] font-serif leading-none">fuudr</h3>
          </div>
          <div className="text-[10px] text-[#ff0054]/60 font-semibold tracking-wide">REELS FOOD DELIVERY</div>
        </a>
      )
    },
    {
      id: "thesolvers",
      tags: ["Product", "AI", "Web"],
      element: (
        <a 
          href="https://thesolvers.online"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] p-7 flex flex-col justify-between select-none relative text-left block text-white"
        >
          <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">Product Incubator</div>
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="relative mb-3 flex items-center justify-center">
              {/* Outer glowing network circle */}
              <div className="w-11 h-11 rounded-full border border-emerald-500/30 flex items-center justify-center bg-emerald-950/20">
                <svg viewBox="0 0 100 100" className="w-6 h-6 text-emerald-400 fill-none stroke-current" strokeWidth="6">
                  <polygon points="50,15 90,85 10,85" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-sans text-emerald-50">the solvers</h3>
          </div>
          <div className="text-[10px] text-slate-400 font-semibold tracking-wide">BUILDING & SHIPPING PRODUCTS</div>
        </a>
      )
    },
    {
      id: "lathishop",
      tags: ["Product", "Web"],
      element: (
        <a 
          href="https://lathishop.com"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-[#ffe600] p-0 flex flex-col justify-between select-none relative overflow-hidden text-left block"
        >
          {/* Top blocks representing Lille design exactly */}
          <div className="grid grid-cols-2 w-full h-[35%]">
            <div className="bg-[#4d0e1b] flex items-center justify-center p-4">
              <svg viewBox="0 0 100 100" className="w-9 h-9 text-[#bcfc00] fill-current">
                <path d="M50,15 C40,15 40,30 50,30 C60,30 60,15 50,15 Z" />
                <path d="M50,70 C40,70 40,85 50,85 C60,85 60,70 50,70 Z" />
                <circle cx="50" cy="50" r="14" />
              </svg>
            </div>
            <div className="bg-[#ff5d00] flex items-center justify-center p-4">
              <svg viewBox="0 0 100 100" className="w-9 h-9 text-[#ffe600] fill-current">
                <path d="M50,15 C35,35 15,50 50,50 Z" />
                <path d="M50,85 C35,65 15,50 50,50 Z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center my-auto relative">
            <div className="w-20 h-20 rounded-full bg-white border border-black/80 flex flex-col items-center justify-center relative p-1.5 shadow-xs">
              <div className="flex items-center gap-1">
                <svg viewBox="0 0 100 80" className="w-6.5 h-5 text-[#1e293b] fill-none stroke-current" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M50,22 C50,8 15,8 15,35 C15,55 50,75 50,75 C50,75 85,55 85,35 C85,8 50,8 50,22 Z" />
                  <circle cx="15" cy="35" r="3.5" fill="white" className="stroke-current" strokeWidth="2.5" />
                  <circle cx="85" cy="35" r="3.5" fill="white" className="stroke-current" strokeWidth="2.5" />
                  <circle cx="50" cy="75" r="3.5" fill="white" className="stroke-current" strokeWidth="2.5" />
                  <path d="M30,22 V53" strokeWidth="2.2" />
                </svg>
              </div>
              <span className="text-[6.5px] font-bold text-gray-700 tracking-wider uppercase mt-1">Lathishop</span>
            </div>

            {/* Hover sticker representing Freelance Project */}
            <div className="absolute top-[80%] left-[46%] flex flex-col items-start z-10">
              <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-black fill-current drop-shadow-xs ml-1.5">
                <path d="M4.5,3 L4.5,21 L9.5,16 L17.5,16 Z" />
              </svg>
              <div className="bg-[#1e293b] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-xs border border-white/10 shadow-xs -mt-1 select-none whitespace-nowrap">
                Freelance Project
              </div>
            </div>
          </div>
        </a>
      )
    },
    {
      id: "clientsample",
      tags: ["UI/UX", "Web"],
      element: (
        <a 
          href="https://client-sample-project-gray.vercel.app"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-7 flex flex-col justify-between select-none relative text-left block text-[#334155]"
        >
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#334155]/60">Client Project</div>
          <div className="flex flex-col items-center justify-center my-auto w-full">
            {/* Miniature Figma-style wireframe grid layout */}
            <div className="w-24 h-12 border border-[#94a3b8] rounded bg-white/60 p-1 flex items-center justify-between gap-1.5 mb-3 relative">
              <div className="w-4 h-full bg-[#cbd5e1] rounded-sm" />
              <div className="flex-1 h-full flex flex-col justify-between py-0.5">
                <div className="w-8 h-1 bg-[#94a3b8] rounded" />
                <div className="w-12 h-1 bg-[#cbd5e1] rounded" />
                <div className="w-6 h-1 bg-[#cbd5e1] rounded" />
              </div>
              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#334155]" />
              <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#334155]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-sans text-[#334155]">client sample</h3>
          </div>
          <div className="text-[10px] text-[#334155]/50 font-semibold tracking-wide">INTERFACE PROTOTYPE</div>
        </a>
      )
    },
    {
      id: "linkaura",
      tags: ["Product", "Web"],
      element: (
        <a 
          href="https://linkaura.in"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-gradient-to-br from-[#f3e8ff] via-[#e9d5ff] to-[#d8b4fe] p-7 flex flex-col justify-between select-none relative text-left block text-[#6b21a8]"
        >
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#6b21a8]/70">Student Network</div>
          <div className="flex flex-col items-center justify-center my-auto">
            {/* Bento-card grid mockup icon */}
            <div className="grid grid-cols-3 gap-1 w-12 h-9 mb-3 opacity-80">
              <div className="col-span-2 bg-[#6b21a8]/20 rounded-xs border border-[#6b21a8]/35" />
              <div className="bg-[#6b21a8]/40 rounded-xs" />
              <div className="bg-[#6b21a8]/30 rounded-xs" />
              <div className="col-span-2 bg-[#6b21a8]/15 rounded-xs border border-[#6b21a8]/35" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight font-sans leading-none">linkaura</h3>
          </div>
          <div className="text-[10px] text-[#6b21a8]/60 font-semibold tracking-wide">CONNECTING STUDENTS & SENIORS</div>
        </a>
      )
    },
    {
      id: "zorvyn",
      tags: ["UI/UX", "Web"],
      element: (
        <a 
          href="https://zorvyn-assignment-lyart.vercel.app"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-gradient-to-br from-[#0c0a09] via-[#1c1917] to-[#292524] p-7 flex flex-col justify-between select-none relative text-left block text-[#38bdf8]"
        >
          <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Finance SaaS</div>
          <div className="flex flex-col items-center justify-center my-auto">
            {/* Mini dashboard chart graphic */}
            <div className="w-14 h-9 border border-slate-700 rounded bg-black/40 flex items-end justify-between p-1.5 mb-3 gap-1">
              <div className="w-2 h-[40%] bg-slate-700 rounded-2xs" />
              <div className="w-2 h-[75%] bg-[#38bdf8]/60 rounded-2xs" />
              <div className="w-2 h-[95%] bg-[#38bdf8] rounded-2xs" />
              <div className="w-2 h-[55%] bg-slate-700 rounded-2xs" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-sans text-slate-50">zorvyn</h3>
          </div>
          <div className="text-[10px] text-slate-500 font-semibold tracking-wide">ANALYTICS INTERFACE</div>
        </a>
      )
    },
    {
      id: "founderflow",
      tags: ["Product", "AI", "Web"],
      element: (
        <a 
          href="https://github.com/notkshitij/FounderFlow"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-gradient-to-tr from-[#14b8a6] via-[#0d9488] to-[#0f766e] p-7 flex flex-col justify-between select-none relative text-left block text-white"
        >
          <div className="text-[10px] uppercase font-bold tracking-widest text-teal-200">AI SaaS Product</div>
          <div className="flex flex-col items-center justify-center my-auto">
            <h3 className="text-3xl sm:text-4xl font-black tracking-widest text-white leading-none font-sans">
              FOUNDER
            </h3>
            <div className="w-16 h-0.5 bg-white/40 my-2.5" />
            <span className="text-xs font-semibold tracking-[0.25em] text-white/90 uppercase font-sans">
              FLOW
            </span>
          </div>
          <div className="text-[10px] text-teal-200/60 font-semibold tracking-wide">RECENT WORK // AI SYSTEM</div>
        </a>
      )
    },
    {
      id: "clyro",
      tags: ["Product", "Web"],
      element: (
        <a 
          href="https://clyro-swart.vercel.app"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-gradient-to-br from-[#ff7e5f] to-[#feb47b] p-7 flex flex-col justify-between select-none relative text-left block text-white"
        >
          <div className="text-[10px] uppercase font-bold tracking-widest text-orange-100">Personal Project</div>
          <div className="flex flex-col items-center justify-center my-auto">
            {/* Gallery cards representation */}
            <div className="flex gap-1.5 h-8 mb-3.5 items-end justify-center">
              <div className="w-4 h-6 bg-white/70 rounded-xs border border-white/20" />
              <div className="w-6 h-8 bg-white rounded-xs" />
              <div className="w-4 h-5 bg-white/50 rounded-xs" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight font-serif leading-none">clyro</h3>
          </div>
          <div className="text-[10px] text-orange-100/60 font-semibold tracking-wide">IMAGE GALLERY PLATFORM</div>
        </a>
      )
    }
  ];

  // Row 2 Projects (9 projects) - Premium Gradients & Creative Textures
  const row2Cards = [
    {
      id: "portfolio",
      tags: ["UI/UX", "Web"],
      element: (
        <a 
          href="https://kshitijjain.me"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-[#0b0c10] p-6 flex flex-col items-center justify-center select-none relative text-center block"
        >
          <div className="relative flex flex-col items-center">
            {/* Clean sticker label */}
            <div className="absolute -top-6 bg-[#c3f53c] text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded shadow-xs rotate-[-8deg] border border-black/10 select-none">
              Portfolio
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white font-sans mt-2.5">
              kshitij.
            </h3>
          </div>
        </a>
      )
    },
    {
      id: "autoslay",
      tags: ["Product", "AI", "Web"],
      element: (
        <a 
          href="https://autoslay.online"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-gradient-to-br from-[#d4fc79] to-[#96e6a1] p-7 flex flex-col justify-between select-none relative text-left block text-[#0f3c21]"
        >
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#0f3c21]/60">AI Automation</div>
          <div className="flex flex-col items-center justify-center my-auto">
            {/* Dynamic arrow icon */}
            <div className="w-11 h-11 rounded-xl bg-white/50 flex items-center justify-center mb-3 border border-[#0f3c21]/15">
              <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 text-[#0f3c21] fill-none stroke-current" strokeWidth="6" strokeLinecap="round">
                <path d="M20,30 L60,50 L20,70 Z M60,30 L80,50 L60,70" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight font-sans leading-none">autoslay</h3>
          </div>
          <div className="text-[10px] text-[#0f3c21]/60 font-semibold tracking-wide">WORKFLOW ENGINE</div>
        </a>
      )
    },
    {
      id: "cuetpro",
      tags: ["Product", "Web"],
      element: (
        <a 
          href="https://cuetpro.com"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-gradient-to-b from-[#005cff] to-[#0039b3] p-6 flex flex-col items-center justify-center select-none relative text-center block text-white"
        >
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-5 bg-[#ffdc00] text-black text-[8px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded shadow-sm rotate-[-8deg] border border-black/10 select-none">
              Prep Tools
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans mt-2">
              CuetPro
            </h3>
          </div>
        </a>
      )
    },
    {
      id: "solversstudio",
      tags: ["UI/UX", "Web"],
      element: (
        <a 
          href="https://the-solvers-studio-sample-one.vercel.app"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] p-7 flex flex-col justify-between select-none relative text-left block text-neutral-900"
        >
          <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-900/60">Creative Studio</div>
          <div className="flex flex-col items-center justify-center my-auto">
            {/* Grid structure wireframe icon */}
            <div className="w-10 h-10 border border-neutral-900/25 rounded-md flex items-center justify-center bg-white/40 p-1 mb-3 relative">
              <div className="w-full h-full border border-dashed border-neutral-900/30 rounded-xs flex items-center justify-center">
                <circle cx="50" cy="50" r="5" className="fill-neutral-900" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-sans leading-none">solvers studio</h3>
          </div>
          <div className="text-[10px] text-neutral-900/50 font-semibold tracking-wide">PORTFOLIO DEMO SPEC</div>
        </a>
      )
    },
    {
      id: "campusleague",
      tags: ["Product", "App"],
      element: (
        <a 
          href="https://campusleague.in"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-gradient-to-br from-[#2e0854] to-[#1e1b4b] p-7 flex flex-col justify-between select-none relative text-left block text-[#f43f5e]"
        >
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#f43f5e]/60">Student Network</div>
          <div className="flex flex-col items-center justify-center my-auto">
            {/* Shield/Emblem outline icon */}
            <div className="w-11 h-11 border-2 border-[#f43f5e]/30 rounded-full flex items-center justify-center bg-[#f43f5e]/10 mb-3">
              <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 text-[#f43f5e] fill-none stroke-current" strokeWidth="6">
                <path d="M50,15 L80,35 L80,70 L50,90 L20,70 L20,35 Z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight font-sans leading-none">campus league</h3>
          </div>
          <div className="text-[10px] text-[#f43f5e]/50 font-semibold tracking-wide">COLLEGIATE PORTAL</div>
        </a>
      )
    },
    {
      id: "zkshield",
      tags: ["Blockchain", "AI", "Product", "Web"],
      element: (
        <a 
          href="https://zkshield-ruby.vercel.app"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-gradient-to-br from-[#4c1d95] to-[#2e1065] p-7 flex flex-col justify-between select-none relative text-left block text-[#a855f7]"
        >
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#a855f7]/60">Security Suite</div>
          <div className="flex flex-col items-center justify-center my-auto">
            {/* Security Guard Shield */}
            <div className="w-10 h-11 border border-[#a855f7]/30 rounded bg-white/5 flex items-center justify-center mb-3">
              <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 text-[#a855f7] fill-none stroke-current" strokeWidth="6" strokeLinecap="round">
                <path d="M50,15 C70,25 80,30 80,45 C80,65 50,85 50,85 C50,85 20,65 20,45 C20,30 30,25 50,15 Z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight font-sans leading-none">zkshield</h3>
          </div>
          <div className="text-[10px] text-[#a855f7]/40 font-semibold tracking-wide">ZERO KNOWLEDGE SECURE</div>
        </a>
      )
    },
    {
      id: "dailywages",
      tags: ["Product", "UI/UX", "App"],
      element: (
        <a 
          href="https://gig-worker-daily-wages.vercel.app"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-gradient-to-tr from-[#f5ebe0] to-[#d5bdaf] p-7 flex flex-col justify-between select-none relative text-left block text-[#5c3e21]"
        >
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#5c3e21]/60">Hackathon Spec</div>
          <div className="flex flex-col items-center justify-center my-auto">
            {/* Coin shape outline for premium work feel */}
            <div className="w-10 h-10 rounded-full border-2 border-[#5c3e21]/20 flex items-center justify-center bg-white/40 mb-3">
              <svg viewBox="0 0 100 100" className="w-4.5 h-4.5 text-[#5c3e21] fill-none stroke-current" strokeWidth="6">
                <circle cx="50" cy="50" r="25" />
                <path d="M50,35 V65 M38,45 H62" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight font-sans leading-none">daily wages</h3>
          </div>
          <div className="text-[10px] text-[#5c3e21]/50 font-semibold tracking-wide">GIG-WORKER PAYMENTS</div>
        </a>
      )
    },
    {
      id: "sih-college",
      tags: ["Product", "AI", "Web"],
      element: (
        <a 
          href="https://sih-25-smoky.vercel.app"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-gradient-to-tr from-[#e8f5e9] to-[#c8e6c9] p-7 flex flex-col justify-between select-none relative text-left block text-[#0f766e]"
        >
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#0f766e]/70">National Level</div>
          <div className="flex flex-col items-center justify-center my-auto">
            {/* Center target circle representing SIH badge */}
            <div className="w-10 h-10 border border-[#0f766e]/30 rounded-full flex items-center justify-center bg-white/50 mb-3 relative">
              <circle cx="50" cy="50" r="10" className="fill-[#0f766e]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight font-sans leading-none">sih '25</h3>
          </div>
          <div className="text-[10px] text-[#0f766e]/50 font-semibold tracking-wide">SMART INDIA HACKATHON</div>
        </a>
      )
    },
    {
      id: "sted",
      tags: ["Product", "AI", "UI/UX", "Web"],
      element: (
        <a 
          href="https://sted.co.in"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full bg-gradient-to-tr from-[#ffe3e0] via-[#ffd6cc] to-[#ffc2d1] p-7 flex flex-col justify-between select-none relative text-left block text-[#b43c5c]"
        >
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#b43c5c]/70">AI Ed-Tech</div>
          <div className="flex flex-col items-center justify-center my-auto">
            {/* Checklist with sparkles AI design */}
            <div className="flex items-center gap-1 mb-3">
              <div className="w-9 h-9 border border-[#b43c5c]/25 rounded-md flex items-center justify-center bg-white/40">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#b43c5c] fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <span className="text-xl">✨</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight font-sans leading-none">sted</h3>
          </div>
          <div className="text-[10px] text-[#b43c5c]/60 font-semibold tracking-wide">AI-GENERATED TASK LEARNING</div>
        </a>
      )
    }
  ];

  const filterRow = (row) => {
    if (activeTab === null) return row;
    return row.filter(card => card.tags.includes(activeTab));
  };

  const filteredRow1 = filterRow(row1Cards);
  const filteredRow2 = filterRow(row2Cards);

  const allCards = [...row1Cards, ...row2Cards];
  const filteredAll = activeTab === null ? allCards : allCards.filter(card => card.tags.includes(activeTab));

  const hasMatches = filteredAll.length > 0;

  return (
    <div 
      data-scrollbar-thumb="#b8f500"
      data-scrollbar-track="#f4f2ec"
      className="text-black bg-[#f4f2ec] overflow-x-clip min-h-screen pt-24 sm:pt-28 font-sans select-none flex flex-col justify-between relative" 
      style={FONT}
    >
      
      {/* Soft window blinds light shadow */}
      <div className="absolute inset-0 pointer-events-none z-40 select-none overflow-hidden">
        <div className="absolute inset-0 bg-repeat bg-[size:400px_400px]" style={{
          backgroundImage: `repeating-linear-gradient(130deg, transparent, transparent 140px, rgba(0, 0, 0, 0.012) 140px, rgba(0, 0, 0, 0.025) 200px, rgba(0, 0, 0, 0.012) 260px, transparent 260px, transparent 400px)`,
          filter: 'blur(10px)'
        }} />
      </div>

      {/* Saturated Lime-Yellow Top Mesh Glow Backdrop */}
      <div 
        className="absolute top-0 left-0 right-0 h-[480px] pointer-events-none z-0 opacity-80" 
        style={{
          background: 'radial-gradient(circle at 35% -10%, rgba(184, 245, 0, 0.45) 0%, rgba(254, 240, 118, 0.35) 45%, transparent 85%)'
        }}
      />

      {/* Organic Grain/Noise Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.24] mix-blend-overlay">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Main Page Layout */}
      <div className="w-full flex-grow relative z-10">
        
        {/* Editorial Page Header */}
        <div className="flex flex-col items-center text-center mt-8 sm:mt-12 mb-8 sm:mb-12 px-6">
          <h1 
            className="text-3xl sm:text-5xl font-semibold leading-[1.12] tracking-tight text-neutral-950 font-serif"
            style={{ fontFamily: '"Playfair Display", "DM Serif Display", Georgia, serif' }}
          >
            Here is my work,<br />which I am proud of:
          </h1>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-10 max-w-3xl">
            {filterTabs.map((tab) => {
              const isSelected = activeTab === tab.name;
              const anySelected = activeTab !== null;
              const opacityClass = !anySelected || isSelected ? 'opacity-100' : 'opacity-[0.32] hover:opacity-60';

              return (
                <button
                  key={tab.name}
                  onClick={() => handleTabClick(tab.name)}
                  className={`px-3.5 py-1 rounded-[10px] text-xs sm:text-[13px] font-bold text-neutral-950 tracking-tight cursor-pointer transition-all duration-300 shadow-3xs hover:scale-102 border-none ${tab.color} ${opacityClass}`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. WORK CAROUSEL / LIST SECTION */}
        <div className="w-full py-1 sm:py-2 scrollbar-none relative z-20 mb-16 sm:mb-24">
          
          <style>{`
            @keyframes workMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes workMarqueeReverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-work-marquee {
              animation: workMarquee 26s linear infinite;
            }
            .animate-work-marquee-reverse {
              animation: workMarqueeReverse 26s linear infinite;
            }
            .scrollbar-none::-webkit-scrollbar { display: none; }
            .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>

          {!hasMatches ? (
            <div className="w-full text-center py-20">
              <p className="text-gray-400 font-medium">No projects found in this category.</p>
            </div>
          ) : (
            <>
              {/* Desktop Scrolling Tracks (Hidden on Mobile) */}
              <div className="hidden sm:flex flex-col gap-5 sm:gap-6 w-full overflow-hidden">
                {/* Row 1: Leftwards Scrolling */}
                {filteredRow1.length > 0 && (
                  <div className="w-full overflow-hidden">
                    <div className="flex w-max animate-work-marquee hover:[animation-play-state:paused]">
                      {/* Group 1 */}
                      <div className="flex gap-5 pr-5">
                        {filteredRow1.map((card) => (
                          <div
                            key={`g1-r1-${card.id}`}
                            className="w-[240px] sm:w-[300px] h-[310px] sm:h-[390px] rounded-[32px] overflow-hidden shadow-3xs hover:shadow-md hover:-translate-y-1 transition-all duration-500 border border-black/5 shrink-0 origin-center bg-white relative group cursor-pointer"
                          >
                            {card.element}
                            {getWatermarkSVG(card.id)}
                            {/* Glass overlay + organic noise texture */}
                            <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.06] mix-blend-overlay">
                              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                <filter id={`noise-g1-r1-${card.id}`}>
                                  <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
                                </filter>
                                <rect width="100%" height="100%" filter={`url(#noise-g1-r1-${card.id})`} />
                              </svg>
                            </div>
                            {/* Subtle inner border */}
                            <div className="absolute inset-0 rounded-[32px] border border-white/10 pointer-events-none z-20" />
                            {/* Diagonal shine sweep on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
                              <div className="w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/15 to-transparent -translate-x-[50%] -translate-y-[50%] group-hover:translate-x-[50%] group-hover:translate-y-[50%] transition-transform duration-[1.2s] ease-in-out" />
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Group 2 */}
                      <div className="flex gap-5 pr-5" aria-hidden="true">
                        {filteredRow1.map((card) => (
                          <div
                            key={`g2-r1-${card.id}`}
                            className="w-[240px] sm:w-[300px] h-[310px] sm:h-[390px] rounded-[32px] overflow-hidden shadow-3xs hover:shadow-md hover:-translate-y-1 transition-all duration-500 border border-black/5 shrink-0 origin-center bg-white relative group cursor-pointer"
                          >
                            {card.element}
                            {getWatermarkSVG(card.id)}
                            {/* Glass overlay + organic noise texture */}
                            <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.06] mix-blend-overlay">
                              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                <filter id={`noise-g2-r1-${card.id}`}>
                                  <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
                                </filter>
                                <rect width="100%" height="100%" filter={`url(#noise-g2-r1-${card.id})`} />
                              </svg>
                            </div>
                            {/* Subtle inner border */}
                            <div className="absolute inset-0 rounded-[32px] border border-white/10 pointer-events-none z-20" />
                            {/* Diagonal shine sweep on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
                              <div className="w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/15 to-transparent -translate-x-[50%] -translate-y-[50%] group-hover:translate-x-[50%] group-hover:translate-y-[50%] transition-transform duration-[1.2s] ease-in-out" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Row 2: Rightwards Scrolling */}
                {filteredRow2.length > 0 && (
                  <div className="w-full overflow-hidden">
                    <div className="flex w-max animate-work-marquee-reverse hover:[animation-play-state:paused]">
                      {/* Group 1 */}
                      <div className="flex gap-5 pr-5">
                        {filteredRow2.map((card) => (
                          <div
                            key={`g1-r2-${card.id}`}
                            className="w-[240px] sm:w-[300px] h-[310px] sm:h-[390px] rounded-[32px] overflow-hidden shadow-3xs hover:shadow-md hover:-translate-y-1 transition-all duration-500 border border-black/5 shrink-0 origin-center bg-white relative group cursor-pointer"
                          >
                            {card.element}
                            {getWatermarkSVG(card.id)}
                            {/* Glass overlay + organic noise texture */}
                            <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.06] mix-blend-overlay">
                              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                <filter id={`noise-g1-r2-${card.id}`}>
                                  <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
                                </filter>
                                <rect width="100%" height="100%" filter={`url(#noise-g1-r2-${card.id})`} />
                              </svg>
                            </div>
                            {/* Subtle inner border */}
                            <div className="absolute inset-0 rounded-[32px] border border-white/10 pointer-events-none z-20" />
                            {/* Diagonal shine sweep on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
                              <div className="w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/15 to-transparent -translate-x-[50%] -translate-y-[50%] group-hover:translate-x-[50%] group-hover:translate-y-[50%] transition-transform duration-[1.2s] ease-in-out" />
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Group 2 */}
                      <div className="flex gap-5 pr-5" aria-hidden="true">
                        {filteredRow2.map((card) => (
                          <div
                            key={`g2-r2-${card.id}`}
                            className="w-[240px] sm:w-[300px] h-[310px] sm:h-[390px] rounded-[32px] overflow-hidden shadow-3xs hover:shadow-md hover:-translate-y-1 transition-all duration-500 border border-black/5 shrink-0 origin-center bg-white relative group cursor-pointer"
                          >
                            {card.element}
                            {getWatermarkSVG(card.id)}
                            {/* Glass overlay + organic noise texture */}
                            <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.06] mix-blend-overlay">
                              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                <filter id={`noise-g2-r2-${card.id}`}>
                                  <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
                                </filter>
                                <rect width="100%" height="100%" filter={`url(#noise-g2-r2-${card.id})`} />
                              </svg>
                            </div>
                            {/* Subtle inner border */}
                            <div className="absolute inset-0 rounded-[32px] border border-white/10 pointer-events-none z-20" />
                            {/* Diagonal shine sweep on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
                              <div className="w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/15 to-transparent -translate-x-[50%] -translate-y-[50%] group-hover:translate-x-[50%] group-hover:translate-y-[50%] transition-transform duration-[1.2s] ease-in-out" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Vertical Grid - One by One (Visible on Mobile Only) */}
              <div className="flex sm:hidden flex-col items-center gap-6 w-full px-6">
                {filteredAll.map((card) => (
                  <div
                    key={`mob-stacked-${card.id}`}
                    className="w-full max-w-[310px] h-[380px] rounded-[32px] overflow-hidden shadow-3xs hover:shadow-md hover:-translate-y-1 transition-all duration-500 border border-black/5 bg-white shrink-0 relative group cursor-pointer"
                  >
                    {card.element}
                            {getWatermarkSVG(card.id)}
                    {/* Glass overlay + organic noise texture */}
                    <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.06] mix-blend-overlay">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <filter id={`noise-mob-${card.id}`}>
                          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter={`url(#noise-mob-${card.id})`} />
                      </svg>
                    </div>
                    {/* Subtle inner border */}
                    <div className="absolute inset-0 rounded-[32px] border border-white/10 pointer-events-none z-20" />
                    {/* Diagonal shine sweep on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
                      <div className="w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/15 to-transparent -translate-x-[50%] -translate-y-[50%] group-hover:translate-x-[50%] group-hover:translate-y-[50%] transition-transform duration-[1.2s] ease-in-out" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

      </div>
 
      {/* Full-width Footer */}
      <div className="w-full mt-auto relative z-30">
        <Footer />
      </div>
    </div>
  );
}
