import { motion } from "framer-motion";

export default function VisionCard({ title, text, icon: Icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border-t-4 border-t-holy-gold hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Icon Container - Designed like a Sacred Seal */}
      <div className="w-16 h-16 bg-stone-beige rounded-full flex items-center justify-center mb-8 text-spirit-green border border-gray-100 group-hover:bg-spirit-green group-hover:text-white transition-colors duration-500">
        {Icon && <Icon size={30} strokeWidth={1.2} />}
      </div>

      <h3 className="text-xl font-serif font-bold mb-4 text-spirit-green leading-tight">
        {title}
      </h3>
      
      <p className="text-deep-charcoal/70 leading-relaxed text-[15px]">
        {text}
      </p>

      {/* Decorative Corner Element */}
      <div className="mt-auto pt-6 flex justify-end">
        <div className="w-8 h-8 opacity-10 group-hover:opacity-100 transition-opacity">
           <svg viewBox="0 0 24 24" fill="none" className="text-holy-gold">
              <path d="M12 4L12 20M4 12L20 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
           </svg>
        </div>
      </div>
    </motion.div>
  );
}