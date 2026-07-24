import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
    // Force scroll to top on reload or page change
    window.scrollTo(0, 0);
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

