import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "The Journey", path: "/journey" },
 
    { name: "Contact", path: "/contact" },
    { name: "Partners", path: "/partners" },
    { name: "Culture", path: "/culture" },
  ];

  const isActive = (path) => location.pathname === path;

  // Animation Variants
  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 * i, duration: 0.5 }
    })
  };

  return (
    <>
      <header className="fixed top-4 left-0 w-full z-[100] px-4 md:px-6">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-lg shadow-lg rounded-[2rem] border border-white/40 px-4 py-3 flex justify-between items-center transition-all duration-500">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 z-[110]">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl overflow-hidden bg-white shadow-sm border border-stone-100 p-1">
              <img src="logo.png" alt="Logo" className="h-full w-full object-contain" />
            </div>
            <div className={isOpen ? "hidden" : "block"}>
              <h1 className="text-sm font-bold leading-tight text-spirit-green uppercase tracking-tight">
                Mountain Prayer
              </h1>
              <p className="text-[9px] uppercase tracking-[0.2em] text-holy-gold font-bold">
                Tabernacle of Moses
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`transition-all relative ${
                  isActive(link.path) ? "text-spirit-green" : "text-gray-400 hover:text-spirit-green"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-0.5 bg-holy-gold rounded-full" />
                )}
              </Link>
            ))}

          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <Link 
              to="/donate" 
              className="hidden sm:flex bg-spirit-green text-white px-6 py-2.5 rounded-full text-xs font-bold hover:scale-105 transition-all items-center gap-2 shadow-lg shadow-spirit-green/20"
            >
              <Heart size={14} fill="currentColor" />
              Support
            </Link>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="z-[110] p-3 bg-stone-100 text-spirit-green rounded-full hover:bg-stone-200 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* FULL SCREEN MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[90] bg-white flex flex-col lg:hidden"
          >
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-full h-full bg-stone-beige/30 -z-10" />
            
            <div className="flex flex-col h-full pt-32 pb-12 px-8">
              <p className="text-holy-gold font-bold tracking-widest text-xs uppercase mb-8">Navigation</p>
              
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div key={link.name} custom={i} variants={linkVariants}>
                    <Link 
                      to={link.path} 
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between"
                    >
                      <span className={`text-4xl font-serif font-bold ${isActive(link.path) ? 'text-holy-gold' : 'text-spirit-green'}`}>
                        {link.name}
                      </span>
                      <ArrowRight className="opacity-0 group-hover:opacity-100 text-holy-gold transition-all -translate-x-4 group-hover:translate-x-0" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto space-y-6">
                <motion.div variants={linkVariants} custom={navLinks.length}>
                  <Link 
                    to="/donate"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-3 bg-spirit-green text-white w-full py-5 rounded-[2rem] font-bold text-lg shadow-xl shadow-spirit-green/20"
                  >
                    <Heart size={20} fill="currentColor" />
                    Support the Mission
                  </Link>
                </motion.div>
                
                <div className="flex justify-center gap-8 text-stone-400">
                  <span className="text-[10px] uppercase tracking-widest font-bold">Facebook</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Instagram</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold">YouTube</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}