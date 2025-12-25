import PageWrapper from "../components/layout/PageWrapper";
import { CreditCard, Smartphone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Donate() {
  return (
    <PageWrapper>
      <section className="bg-stone-beige min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-spirit-green mb-6">Support the Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your generosity helps us build prayer cells, provide clean water, and support the community. 
              Every gift is a seed planted in sacred ground.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* M-PESA CARD */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 shadow-xl border-b-8 border-green-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Smartphone className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">M-Pesa</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Paybill Number</p>
                  <p className="text-3xl font-mono font-bold text-spirit-green">XXXXXX</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Account Name</p>
                  <p className="text-xl font-medium text-gray-700">MOUNTAIN PRAYER</p>
                </div>
              </div>
            </motion.div>

            {/* BANK CARD */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 shadow-xl border-b-8 border-holy-gold"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
                  <CreditCard className="text-holy-gold" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Bank Transfer</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Bank Name</p>
                  <p className="text-lg font-bold text-spirit-green text-gray-700">Kenya Commercial Bank (KCB)</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Account Number</p>
                  <p className="text-xl font-mono font-bold text-spirit-green tracking-wider">0123 4567 8910</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Branch</p>
                  <p className="text-lg font-medium text-gray-700">Machakos Branch</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* SECURITY FOOTER */}
          <div className="mt-12 flex items-center justify-center gap-2 text-gray-500">
            <ShieldCheck size={18} className="text-spirit-green" />
            <p className="text-sm italic">All contributions go directly to the development of the Tabernacle of Moses.</p>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}