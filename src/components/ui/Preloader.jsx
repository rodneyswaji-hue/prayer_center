import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const slideUp = {
    initial: { top: 0 },
    exit: { 
      top: "-100vh", 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
    }
  };

  const opacity = {
    initial: { opacity: 0 },
    entered: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1B3618] overflow-hidden" 
      // ^ Ensure this hex code matches your 'bg-spirit-green' variable
    >
      <motion.div 
        variants={opacity} 
        initial="initial" 
        animate="entered" 
        exit="exit"
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
      >
        {/* LOGO AREA */}
        <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-sm rounded-full p-4 mb-6 border border-white/10 shadow-2xl relative">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-[#C5A059]/20 rounded-full blur-xl"
            // ^ Matches holy-gold
          />
          {/* Ensure logo.png is in your public folder */}
          <img src="/logo.png" alt="Logo" className="w-full h-full object-contain relative z-10" />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2 tracking-wide">
          Mountain Prayer
        </h1>
        <p className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-8">
          Tabernacle of Moses
        </p>

        {/* LOADING PROGRESS LINE */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }} 
            className="h-full bg-[#C5A059] shadow-[0_0_10px_#C5A059]"
          />
        </div>
        
        {/* QUOTE */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 text-white/40 italic font-serif text-sm"
        >
          "Prepare the way..."
        </motion.p>
      </motion.div>
    </motion.div>
  );
}