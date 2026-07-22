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

  // Completely unmount/remove navbar when scrolled past Hero section
  if (!isHeroVisible) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        
        {/* Left: Avatar + kshitij. */}
        <button
          onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 group cursor-pointer border-none bg-transparent px-2.5 py-1.5 rounded-2xl hover:bg-gray-100/90 transition-all duration-200 select-none"
        >
          <img
            src={avatarImg}
            alt="Kshitij avatar"
            className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover transition-transform group-hover:scale-105"
          />
          <span className="hidden sm:inline text-base md:text-lg font-medium tracking-tight text-gray-900 group-hover:text-black transition-colors">
            kshitij.
          </span>
        </button>

        {/* Nav Links directly visible on both Mobile and Desktop */}
        <nav className="flex items-center gap-1.5 sm:gap-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm sm:text-base md:text-lg font-medium text-gray-700 px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl hover:bg-gray-100/90 transition-all duration-200 cursor-pointer border-none bg-transparent"
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
