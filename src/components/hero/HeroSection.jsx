import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative pt-2 h-[100svh] flex flex-col justify-end md:justify-center md:items-center overflow-hidden">
      
      {/* BACKGROUND LAYER */}
      <div 
        className="absolute inset-0 z-0"
      >
        {/* The Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-in-out scale-110 hover:scale-100" 
          style={{ backgroundImage: "url(/bible-focus.jpeg)" }} // Ensure this image is high quality
        />

        {/* The Gradient Overlay - Adjusted for Mobile Legibility */}
        {/* Mobile: Heavy gradient at bottom to read text. Desktop: Balanced overlay. */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3618] via-black/40 to-black/20 md:via-black/50 md:to-stone-beige/10" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-24 md:pb-0 text-left md:text-center">
        
        {/* Eyebrow Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 md:justify-center mb-4"
        >
          <span className="h-px w-8 bg-holy-gold hidden md:block" />
          <span className="text-holy-gold font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
            Welcome to
          </span>
          <span className="h-px w-8 bg-holy-gold hidden md:block" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]"
        >
          The Tabernacle of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-300">
           Moses Prayer Center
          </span>
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base sm:text-lg text-gray-200 mb-8 max-w-xl md:mx-auto leading-relaxed border-l-2 border-holy-gold pl-4 md:pl-0 md:border-none"
        >
          <span className="md:hidden font-bold text-holy-gold block mb-1">Prayer & Fasting Ministry.</span>
          A sacred sanctuary dedicated to spiritual renewal, community development, and the preservation of faith.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 md:justify-center"
        >
          <Link 
            to="/donate" 
            className="w-full sm:w-auto bg-holy-gold text-white px-8 py-4 rounded-xl font-bold text-center shadow-lg shadow-holy-gold/20 hover:bg-[#b08e4d] active:scale-95 transition-all"
          >
            Support the Vision
          </Link>
          
          <Link 
            to="/journey" 
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-white/20 active:scale-95 transition-all"
          >
            Explore the Mountain
          </Link>
        </motion.div>

      </div>

      {/* OPTIONAL: Scroll Indicator for Mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
      </motion.div>

    </section>
  )
}
