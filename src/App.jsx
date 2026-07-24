import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import SplashScreen from "./Components/SplashScreen";

import Home from "./Pages/Home";
import { Skills } from "./Pages/Skills";
import About from "./Pages/About";
import Work from "./Pages/Work";

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
    <div className="font-sans bg-white min-h-screen">
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;

