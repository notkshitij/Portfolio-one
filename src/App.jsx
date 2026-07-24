import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import Navbar from "./Components/Navbar";
import SplashScreen from "./Components/SplashScreen";

import Home from "./Pages/Home";
import { Skills } from "./Pages/Skills";
import About from "./Pages/About";
import Work from "./Pages/Work";

// Premium Page Transition Wrapper
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -18 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full flex flex-col min-h-screen"
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Disable browser scroll restoration on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.25,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, [location.pathname]);

  useEffect(() => {
    // Dynamic Scrollbar Color Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const thumb = entry.target.getAttribute("data-scrollbar-thumb");
            const track = entry.target.getAttribute("data-scrollbar-track");
            if (thumb) {
              document.documentElement.style.setProperty("--scrollbar-thumb-color", thumb);
            }
            if (track) {
              document.documentElement.style.setProperty("--scrollbar-track-color", track);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    // Observe all elements with custom data-scrollbar-thumb attributes
    const targets = document.querySelectorAll("[data-scrollbar-thumb]");
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
      observer.disconnect();
    };
  }, [location.pathname]);

  useEffect(() => {
    // Start the timer to hide the splash screen after 2 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Disable body scroll and touch movements when splash screen is active
    if (showSplash) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [showSplash]);

  return (
    <div className="font-sans bg-white min-h-screen overflow-x-hidden relative">
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      <Navbar />

      <AnimatePresence mode="popLayout">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

