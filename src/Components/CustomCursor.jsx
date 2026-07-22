import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePosition({ x, y });
      if (!isVisible) setIsVisible(true);

      const element = document.elementFromPoint(x, y);
      if (element) {
        // 1. Check if cursor is over a button, link, or interactive element
        const interactiveEl = element.closest('button, a, .cursor-pointer');
        if (interactiveEl) {
          setIsHovered(true);
        } else {
          setIsHovered(false);
        }

        // 2. Class check for dark background section
        const darkParent = element.closest('.bg-black, .bg-gray-900, .bg-zinc-900, [data-theme="dark"]');
        if (darkParent) {
          setIsOverDarkSection(true);
          return;
        }

        // 3. Computed RGB Luminance formula fallback
        let current = element;
        let foundDark = false;
        while (current && current !== document.body && current !== document.documentElement) {
          const style = window.getComputedStyle(current);
          const bg = style.backgroundColor;
          if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
            const match = bg.match(/\d+/g);
            if (match && match.length >= 3) {
              const [r, g, b] = match.map(Number);
              const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
              if (luminance < 120) {
                foundDark = true;
              }
              break;
            }
          }
          current = current.parentElement;
        }
        setIsOverDarkSection(foundDark);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  // Determine cursor background color
  const cursorBg = isOverDarkSection ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[99999] hidden md:block transition-colors duration-150 ring-1 ring-black/10"
      style={{ backgroundColor: cursorBg }}
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        scale: isHovered ? 1.4 : 1,
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 900,
        damping: 38,
        mass: 0.15
      }}
    />
  );
}
