import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      {/* ENHANCED HERO SECTION */}
      <section className="relative h-[90vh] pt-2 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105" 
          style={{ backgroundImage: "url(/bible-focus.jpeg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-beige"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-holy-gold font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Welcome to 
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight"
          >
            The Tabernacle of Moses <br />
            <span className="text-holy-gold italic font-light">Prayer & Fasting Ministry</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            A sacred sanctuary dedicated to spiritual renewal, community development, and the preservation of faith.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-holy-gold hover:bg-[#b08e4d] text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105">
              Support the Vision
            </Link>
            <Link to="/journey" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Explore the Mountain
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
