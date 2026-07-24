import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import avatarImg from '../assets/avatar.png';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: 'mailto:borbreak@gmail.com' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/ai.bykshitij' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/kshitijjain-dev/' },
  { label: 'Twitter', href: 'https://x.com/k_shit_jain' },
  { label: 'Github', href: 'https://github.com/NEGO2522' },
];

const Footer = () => {
  return (
    <footer id="contact" className="w-full min-h-[70vh] bg-[#b8f500] text-black relative overflow-hidden pt-8 sm:pt-12 pb-5 flex flex-col justify-between font-sans select-none">
      
      {/* ── Top CTA Row ─────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 w-full">
        
        {/* Left Avatar + Headline */}
        <div className="flex items-center gap-4 sm:gap-6 max-w-3xl">
          <img
            src={avatarImg}
            alt="Kshitij"
            className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover shrink-0"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight text-black font-serif">
            Great things can happen with a simple "hello!"
          </h2>
        </div>

        {/* Right CTA Button */}
        <motion.a
          href="mailto:borbreak@gmail.com"
          className="inline-flex items-center gap-2 border border-black rounded-full px-6 py-3 text-sm font-semibold text-black hover:bg-black hover:text-[#b8f500] transition-colors duration-500 ease-in-out shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          <span>Contact me</span>
          <FiArrowUpRight className="w-4 h-4" />
        </motion.a>
      </div>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 my-12 md:my-14 w-full">
        <div className="w-full h-px bg-black/20" />
      </div>

      {/* ── Main Links & Info Grid ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-sm mb-12 w-full">
        
        {/* Col 1: Brand & Contact Info */}
        <div className="flex flex-col gap-4">
          <span className="font-semibold text-base tracking-tight text-black">kshitij.</span>
          
          <div className="text-gray-900 leading-relaxed font-medium space-y-0.5 text-sm">
            <p className="font-bold">Kshitij Software Forge Technologies</p>
            <p>Jaipur, Rajasthan, India</p>
            <p className="text-xs text-gray-700 font-mono">GSTIN: 08DBFPJ8049K1Z6</p>
          </div>

          <div className="flex flex-col gap-1 pt-2 text-sm">
            <a
              href="tel:+919413973399"
              className="font-medium text-black underline underline-offset-4 hover:opacity-70 transition-opacity w-fit"
            >
              +91 94139 73399
            </a>
            <a
              href="mailto:borbreak@gmail.com"
              className="font-medium text-black underline underline-offset-4 hover:opacity-70 transition-opacity w-fit"
            >
              borbreak@gmail.com
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium text-black hover:opacity-70 transition-opacity w-fit text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Col 3: Social Links */}
        <div className="flex flex-col gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black hover:opacity-70 transition-opacity flex items-center justify-between max-w-[180px] text-sm"
            >
              <span>{link.label}</span>
              <FiArrowUpRight className="w-4 h-4 opacity-80" />
            </a>
          ))}
        </div>
      </div>

      {/* ── Translucent Name & Copyright ── */}
      <div className="relative w-full overflow-hidden flex flex-col items-center justify-center pt-6 pb-6 pointer-events-none select-none">
        {/* Watermark Text */}
        <h1 className="text-[14vw] md:text-[16vw] font-serif leading-none tracking-tight text-black/15 font-bold text-center">
          Kshitij
        </h1>

        {/* Copyright Text */}
        <p className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-black/80 mt-4 pointer-events-auto z-10">
          ©2026 THE SOLVERS. ALL RIGHTS RESERVED
        </p>
      </div>

    </footer>
  );
};

export default Footer;
