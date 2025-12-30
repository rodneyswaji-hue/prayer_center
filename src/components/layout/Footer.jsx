import { Facebook, Mail, Phone, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B3618] text-stone-100/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* LEFT: Brand Identity */}
          <div className="flex items-center gap-3">
             <div className="h-9 w-9 rounded-md overflow-hidden border border-white/20 bg-black/20 shrink-0">
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div>
               <h3 className="text-white font-bold font-serif text-sm tracking-wide">The Tabernacle</h3>
               <p className="text-[10px] text-green-200/60 uppercase tracking-wider">Prayer Mountain</p>
             </div>
          </div>

          {/* RIGHT: Contact & Actions (Rearranged for clean look) */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-xs font-medium">
            
            {/* Contact Details */}
            <div className="flex items-center gap-6">
               <a href="tel:+254734668826" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <Phone size={14} className="text-green-400 group-hover:text-white transition-colors" />
                  <span>+254 734 668 826</span>
               </a>
               <a href="mailto:info@mountainprayer.org" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <Mail size={14} className="text-green-400 group-hover:text-white transition-colors" />
                  <span>info@mountainprayer.org</span>
               </a>
            </div>

            <div className="w-px h-4 bg-white/20 hidden md:block"></div>

            {/* Social & Action */}
            <div className="flex items-center gap-4">
               <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={16} />
               </a>
               
               {/* Mini Donate Button */}
               <a 
                 href="#donate"
                 className="flex items-center gap-2 bg-white/10 hover:bg-green-600 text-white px-3 py-1.5 rounded-full transition-all border border-white/10"
               >
                 <Heart size={12} className="text-red-400 fill-current" />
                 <span>Give</span>
               </a>
            </div>

          </div>

        </div>

        {/* BOTTOM: Copyright (Subtle) */}
        <div className="mt-4 pt-4 border-t border-white/5 text-center md:text-left">
           <p className="text-[10px] opacity-40">
             © {currentYear} Tabernacle of Moses. All rights reserved.
           </p>
        </div>

      </div>
    </footer>
  );
}