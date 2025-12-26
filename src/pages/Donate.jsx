import PageWrapper from "../components/layout/PageWrapper";
import { CreditCard, Smartphone, ShieldCheck, Copy, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Donate() {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <PageWrapper>
      <section className="bg-stone-beige min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-holy-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              Partner with Us
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-spirit-green mb-6">Support the Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your generosity helps us build prayer cells, provide clean water, and support the community. 
              Every gift is a seed planted in sacred ground.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            
            {/* M-PESA CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-green-900/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                  <Smartphone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">M-Pesa</h3>
                  <p className="text-xs text-green-600 font-bold uppercase tracking-wider">Mobile Money</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <button 
                  onClick={() => handleCopy("XXXXXX", "paybill")}
                  className="w-full text-left group/btn"
                >
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Paybill Number</p>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-mono font-bold text-spirit-green">XXXXXX</p>
                    <Copy size={18} className="text-gray-300 group-hover/btn:text-holy-gold transition-colors" />
                  </div>
                </button>

                <div className="p-4 bg-stone-50 rounded-2xl border border-dashed border-stone-200">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Account Name</p>
                  <p className="text-lg font-bold text-gray-700">MOUNTAIN PRAYER</p>
                </div>
              </div>
            </motion.div>

            {/* BANK CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-stone-900/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-holy-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-holy-gold rounded-2xl flex items-center justify-center shadow-lg shadow-holy-gold/30">
                  <CreditCard className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Bank Transfer</h3>
                  <p className="text-xs text-holy-gold font-bold uppercase tracking-wider">Direct Deposit</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Bank Name</p>
                    <p className="text-md font-bold text-gray-700">Kenya Commercial Bank</p>
                  </div>
                </div>

                <button 
                  onClick={() => handleCopy("012345678910", "bank")}
                  className="w-full text-left group/btn"
                >
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Account Number</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-mono font-bold text-spirit-green tracking-wider">0123 4567 8910</p>
                    <Copy size={18} className="text-gray-300 group-hover/btn:text-holy-gold transition-colors" />
                  </div>
                </button>
                
                <div className="pt-4 border-t border-stone-100">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Branch</p>
                  <p className="text-md font-medium text-gray-600">Machakos Branch</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* IMPACT SECTION - The "Vision" part */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Prayer Sanctuary", desc: "Building the physical Tabernacle" },
              { label: "Community", desc: "Supporting local development" },
              { label: "Conservation", desc: "Preserving the Mountain landscape" }
            ].map((impact, i) => (
              <div key={i} className="bg-spirit-green/5 border border-spirit-green/10 p-6 rounded-3xl">
                <h4 className="text-spirit-green font-bold text-sm mb-1">{impact.label}</h4>
                <p className="text-gray-500 text-xs">{impact.desc}</p>
              </div>
            ))}
          </div>

          {/* SECURITY FOOTER */}
          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-gray-500">
            <div className="flex items-center gap-2">
               <ShieldCheck size={20} className="text-spirit-green" />
               <p className="text-sm font-medium">Secure & Direct Giving</p>
            </div>
            <p className="text-xs italic text-center opacity-70">
              Your data is never stored. All contributions go directly to the registered <br className="hidden md:block"/> 
              Ministry accounts for the development of the Tabernacle of Moses.
            </p>
          </div>

        </div>
      </section>

      {/* TOAST NOTIFICATION FOR COPYING */}
      <AnimatePresence>
        {copiedText && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[300] bg-spirit-green text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3"
          >
            <CheckCircle2 size={18} className="text-holy-gold" />
            <span className="text-sm font-bold">Number Copied to Clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}