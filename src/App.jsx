import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CustomCursor from "./Components/CustomCursor";

import Home from "./Pages/Home";
import { Skills } from "./Pages/Skills";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Force scroll to top on reload or page change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="font-sans bg-white min-h-screen">
      <CustomCursor />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
