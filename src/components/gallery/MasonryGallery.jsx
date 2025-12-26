import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  "/bible-focus.jpeg",
  "/close-focus.jpeg",
  "/people_talking.jpeg",
  "/two-worshipers.jpeg",
  "/sitting-on-rock.jpeg",
  "/worshiping-in-bush.jpeg"
];

export default function MasonryGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-spirit-green mb-8 md:mb-12 text-center md:text-left">
        Moments from the Mountain
      </h2>

      {/* CHANGES:
          - Use columns-2 on mobile for a "Pinterest" feel.
          - Added gap-4 for tighter mobile spacing.
      */}
      <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedImage(src)}
            className="relative group cursor-pointer break-inside-avoid"
          >
            <motion.img
              src={src}
              alt="Mountain prayer moment"
              className="w-full rounded-2xl shadow-sm md:shadow-md object-cover hover:shadow-xl transition-shadow border border-stone-100"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            />
            
            {/* Overlay hint for mobile - shows it's clickable */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors rounded-2xl md:hidden" />
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-holy-gold p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              className="max-w-full max-h-full rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
