import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Used to highlight the current page

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Journey", path: "/journey" },
    { name: "Vision", path: "/vision" },
    { name: "Contact", path: "/contact" },
    { name: "Donate", path: "/donate" },
  ];

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-4 left-0 w-full z-[60] px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md shadow-lg rounded-2xl border border-white/20 px-4 py-3 flex justify-between items-center relative">
        
        {/* LOGO SECTION - Link leads back Home */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-white p-1 rounded-lg shadow-inner flex items-center justify-center overflow-hidden h-10 w-10 md:h-12 md:w-12 border border-gray-100 group-hover:border-holy-gold transition-colors">
            <img src="logo.png" alt="Logo" className="h-full w-full object-contain" />
          </div>
          <div>
            <h1 className="text-sm md:text-lg font-bold leading-tight text-spirit-green uppercase tracking-tight">
              Mountain Prayer <span className="hidden sm:inline">Center</span>
            </h1>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-holy-gold font-bold">
              Tabernacle of Moses
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION - Uses react-router-dom Link */}
        <nav className="hidden lg:flex gap-8 text-xs font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`transition-colors relative pb-1 ${
                isActive(link.path) ? "text-spirit-green" : "text-gray-500 hover:text-spirit-green"
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.div 
                  layoutId="underline" 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-holy-gold" 
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA & MOBILE TOGGLE */}
        <div className="flex items-center gap-2">
          <Link 
            to="/donate" 
            className="hidden sm:flex bg-spirit-green text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-opacity-90 transition-all items-center gap-2 shadow-md shadow-spirit-green/20"
          >
            <Heart size={14} fill="currentColor" />
            Support
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-spirit-green hover:bg-stone-beige rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[calc(100%+12px)] left-0 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 lg:hidden flex flex-col gap-6 z-50"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-serif font-bold border-b border-stone-beige pb-2 ${
                      isActive(link.path) ? "text-holy-gold" : "text-spirit-green"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <Link 
                to="/donate" 
                onClick={() => setIsOpen(false)}
                className="bg-holy-gold text-white text-center py-4 rounded-xl font-bold shadow-md"
              >
                Support the Mission
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
