import PageWrapper from "../components/layout/PageWrapper";
import { Mail, Phone, Facebook, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    { 
      icon: Phone, 
      label: "Call Us", 
      value: "+254 734 668 826", 
      href: "tel:+254734668826", // Real link for mobile
      color: "bg-blue-50" 
    },
    { 
      icon: Mail, 
      label: "Email Us", 
      value: "info@mountainprayer.org", 
      href: "mailto:info@mountainprayer.org", // Real link
      color: "bg-green-50" 
    },
    { 
      icon: Facebook, 
      label: "Follow Us", 
      value: "Mountain Prayer Center", 
      href: "https://facebook.com", // Link to your page
      color: "bg-indigo-50" 
    },
  ];

  return (
    <PageWrapper>
      <section className="bg-stone-beige min-h-screen pt-32 pb-20 overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* HEADER AREA */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif font-bold text-spirit-green mb-6"
            >
              Get in Touch
            </motion.h2>
            <p className="text-lg md:text-xl text-gray-600 italic font-light max-w-2xl mx-auto">
              "Walk with us in this exceptional journey of worship and transformation."
            </p>
          </div>

          {/* ACTIONABLE CARDS - Horizontal scroll on mobile */}
          <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide snap-x">
            {contactInfo.map((item, i) => (
              <motion.a 
                href={item.href}
                key={i}
                whileTap={{ scale: 0.95 }}
                className="min-w-[75vw] md:min-w-0 snap-center bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-md"
              >
                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center text-spirit-green mb-4`}>
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-spirit-green mb-1 uppercase tracking-widest text-[10px]">{item.label}</h3>
                <p className="text-gray-700 font-medium text-sm break-all">{item.value}</p>
                <span className="mt-4 text-xs text-holy-gold font-bold md:hidden">Tap to Connect →</span>
              </motion.a>
            ))}
          </div>

          {/* THE PRAYER REQUEST / MESSAGE FORM */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-spirit-green/10 p-3 rounded-2xl text-spirit-green">
                <Send size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-serif font-bold text-spirit-green">Send a Prayer Request</h4>
                <p className="text-sm text-gray-500">Our team will join you in prayer.</p>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-stone-beige/50 border-transparent focus:border-holy-gold focus:bg-white focus:ring-0 transition-all outline-none" />
                <input type="email" placeholder="Email / Phone" className="w-full px-6 py-4 rounded-2xl bg-stone-beige/50 border-transparent focus:border-holy-gold focus:bg-white focus:ring-0 transition-all outline-none" />
              </div>
              <textarea rows="4" placeholder="How can we pray for you?" className="w-full px-6 py-4 rounded-2xl bg-stone-beige/50 border-transparent focus:border-holy-gold focus:bg-white focus:ring-0 transition-all outline-none resize-none"></textarea>
              <motion.button 
                whileTap={{ scale: 0.98 }}
                className="w-full bg-spirit-green text-white font-bold py-5 rounded-2xl shadow-lg shadow-spirit-green/20 hover:bg-[#152a12] transition-colors"
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>

          {/* LOCATION CARD - App Style */}
          <div className="mt-8 overflow-hidden rounded-[2.5rem] bg-spirit-green text-white shadow-lg relative group">
            <div className="p-8 md:p-12 relative z-10">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-holy-gold mb-2">
                       <MapPin size={18} />
                       <span className="uppercase tracking-[0.2em] text-[10px] font-bold">Location</span>
                    </div>
                    <h4 className="text-3xl font-serif mb-2">Visit the Mountain</h4>
                    <p className="opacity-70 text-sm max-w-sm">Kyevaluki Mountain Sanctuary, Machakos County, Kenya. A place set apart for you.</p>
                  </div>
                  <a 
                    href="https://maps.google.com" // Link to your location on Google Maps
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-white text-spirit-green px-8 py-4 rounded-2xl font-bold text-center hover:bg-holy-gold hover:text-white transition-all shadow-xl"
                  >
                    Open in Maps
                  </a>
               </div>
            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}