import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import avatarImg from '../assets/avatar.png';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const heroHeight = heroEl.offsetHeight;
        // Visible ONLY when scroll position is within the Hero section
        const isStillInHero = window.scrollY < (heroHeight - 150);
        setIsHeroVisible(isStillInHero);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'contact') {
      window.location.href = 'mailto:borbreak@gmail.com';
      return;
    }
    if (sectionId === 'about') {
      navigate('/about');
      return;
    }
    if (sectionId === 'work') {
      navigate('/work');
      return;
    }
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'About',   id: 'about' },
    { name: 'Work',    id: 'work' },
    { name: 'Contact', id: 'contact' },
  ];

  const isSubPage = location.pathname === '/about' || location.pathname === '/skills' || location.pathname === '/work';

  // Completely unmount/remove navbar when scrolled past Hero section (only on home page)
  if (!isSubPage && !isHeroVisible) {
    return null;
  }

  return (
    <header className={`${isSubPage ? 'absolute' : 'fixed'} top-3 sm:top-5 left-0 right-0 z-[100] w-full bg-transparent`}>
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 py-3 flex items-center justify-between">
        
        {/* Left: Avatar + kshitij. */}
        <button
          onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 group cursor-pointer border-none bg-transparent px-2 py-1 rounded-xl hover:bg-gray-100/90 transition-all duration-500 ease-in-out select-none"
        >
          <img
            src={avatarImg}
            alt="Kshitij avatar"
            className="w-6.5 h-6.5 md:w-7 md:h-7 rounded-full object-cover transition-transform group-hover:scale-105"
          />
          <span className="hidden sm:inline text-sm md:text-base font-semibold tracking-tight text-gray-900 group-hover:text-black transition-colors">
            kshitij.
          </span>
        </button>

        {/* Nav Links directly visible on both Mobile and Desktop */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xs sm:text-sm md:text-[15px] font-semibold text-gray-700 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl hover:bg-gray-100/90 transition-all duration-500 ease-in-out cursor-pointer border-none bg-transparent"
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
