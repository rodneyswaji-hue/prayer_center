import { Facebook, Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B3618] text-stone-beige/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* BRAND SECTION */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
               <div className="bg-white p-1 rounded-lg w-10 h-10 flex items-center justify-center overflow-hidden">
                  <img src="logo.png" alt="Logo" className="object-contain" />
               </div>
               <span className="text-white font-serif font-bold text-lg leading-tight">
                 Mountain <br/> Prayer Center
               </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              A sanctuary dedicated to spiritual growth and community transformation in the heart of Machakos County.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/" className="hover:text-holy-gold transition-colors">Our Story</a></li>
              <li><a href="/vision" className="hover:text-holy-gold transition-colors">Our Vision</a></li>
              <li><a href="/journey" className="hover:text-holy-gold transition-colors">The Journey</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-holy-gold shrink-0" />
                <span>Kyevaluki Mountain, Machakos, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-holy-gold shrink-0" />
                <span>+254 734 668 826</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-holy-gold shrink-0" />
                <span>info@mountainprayer.org</span>
              </li>
            </ul>
          </div>

          {/* DONATION CALL TO ACTION */}
          <div className="hidden md:block bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
            <Heart className="text-holy-gold mx-auto mb-4" fill="currentColor" size={28} />
            <h4 className="text-white font-serif font-bold mb-2">Support the Vision</h4>
            <p className="text-xs mb-4">Help us develop the sanctuary and support our community programs.</p>
            <a 
              href="/donate" 
              className="block w-full bg-holy-gold hover:bg-[#b08e4d] text-white py-2 rounded-xl text-sm font-bold transition-all"
            >
              Donate Now
            </a>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Mountain Prayer Center. Tabernacle of Moses.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          <div className="flex gap-4">
             <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-holy-gold transition-all">
                <Facebook size={16} />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
