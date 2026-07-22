import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import avatarImg from '../assets/avatar.png';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      setMobileMenuOpen(false);
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
    setMobileMenuOpen(false);
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* Left: Avatar + kshitij. */}
        <button
          onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2.5 group cursor-pointer border-none bg-transparent px-3.5 py-1.5 ml-6 rounded-2xl hover:bg-gray-100/90 transition-all duration-200 select-none"
        >
          <img
            src={avatarImg}
            alt="Kshitij avatar"
            className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover transition-transform group-hover:scale-105"
          />
          <span className="text-base md:text-lg font-medium tracking-tight text-gray-900 group-hover:text-black transition-colors">
            kshitij.
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-3 mr-12 md:mr-20">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-base md:text-lg font-medium text-gray-700 px-3.5 py-1.5 rounded-2xl hover:bg-gray-100/90 transition-all duration-200 cursor-pointer border-none bg-transparent"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-lg px-6 py-5 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-base font-medium text-gray-800 hover:text-black py-2 transition-colors border-b border-gray-100 last:border-none"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
