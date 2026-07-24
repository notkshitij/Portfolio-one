import { motion } from 'framer-motion';

export default function SplashScreen() {
  const totalColumns = 4;

  const panelTransition = {
    duration: 0.85,
    ease: [0.76, 0, 0.24, 1], // premium cubic-bezier
  };

  return (
    <div className="fixed inset-0 z-[999999] flex overflow-hidden pointer-events-auto select-none">
      {/* 4 Green Columns */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: totalColumns }).map((_, idx) => (
          <motion.div
            key={idx}
            className="w-1/4 h-full bg-[#b8f500] origin-top"
            initial={{ y: "0%" }}
            exit={{
              y: "-100%",
              transition: {
                ...panelTransition,
                delay: idx * 0.08, // staggered panels
              },
            }}
          />
        ))}
      </div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-normal text-black text-center tracking-tight px-4"
          style={{
            fontFamily: '"Playfair Display", "DM Serif Display", Georgia, serif',
            fontWeight: 600,
            fontStyle: 'italic',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: -60,
            transition: {
              duration: 0.45,
              ease: "easeIn",
            },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Oh hi Everyone !
        </motion.h1>
      </div>
    </div>
  );
}
