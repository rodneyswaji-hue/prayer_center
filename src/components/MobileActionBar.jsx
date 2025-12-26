import { Heart, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MobileActionBar() {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
    >
      <div className="bg-[#1B3618] text-white rounded-full shadow-2xl shadow-spirit-green/40 p-1 flex items-center justify-between border border-white/20 backdrop-blur-md">
        
        {/* Left Action */}
        <Link to="/contact" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-l-full hover:bg-white/10 transition">
          <Send size={18} className="text-holy-gold" />
          <span className="text-xs font-bold uppercase tracking-widest">Prayer</span>
        </Link>

        {/* Divider */}
        <div className="w-px h-6 bg-white/20"></div>

        {/* Right Action (Primary) */}
        <Link to="/donate" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-r-full hover:bg-white/10 transition">
           <Heart size={18} fill="currentColor" className="text-holy-gold" />
           <span className="text-xs font-bold uppercase tracking-widest">Give</span>
        </Link>

      </div>
    </motion.div>
  );
}