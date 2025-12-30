import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function StoryBlock({
  title,
  images = [], // NOW ACCEPTS AN ARRAY OF STRINGS
  caption,
  reverse = false,
  index = 0,
  children
}) {
  const ref = useRef(null)
  
  // 1. STATE FOR IMAGE CAROUSEL
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // 2. PARALLAX LOGIC
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"])

  // 3. AUTOMATIC IMAGE SWITCHER
  useEffect(() => {
    // If we don't have multiple images, don't run the timer
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(timer);
  }, [images]);

  const bgTone = index % 2 === 0 ? "bg-stone-beige" : "bg-white"

  // Fallback if images array is empty
  const activeImage = images.length > 0 ? images[currentImgIndex] : "";

  return (
    <section ref={ref} className={`${bgTone} py-20 md:py-28 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-0 md:gap-16 items-center">
        
        {/* IMAGE CONTAINER */}
        <motion.div
          style={{ y }} 
          className={`relative h-[50vh] md:h-[420px] w-full shadow-lg ${
            reverse ? "md:order-last" : ""
          }`}
        >
          <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gray-200">
             {/* 4. ANIMATE PRESENCE FOR SMOOTH FADING */}
             <AnimatePresence mode="wait">
                <motion.img
                  key={currentImgIndex} // Key is crucial for the transition to trigger
                  src={activeImage}
                  alt={title}
                  
                  // Animation: Fade in and slight zoom (Ken Burns effect)
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }} 
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  
                  className="absolute inset-0 w-full h-full object-cover"
                />
             </AnimatePresence>

             {/* Dark Gradient Overlay (Static on top of images) */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden pointer-events-none z-10" />
          </div>
        </motion.div>

        {/* TEXT CONTAINER */}
        <div className={`relative z-10 -mt-16 md:mt-0 ${reverse ? "md:order-first" : ""}`}>
          
          <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/95 backdrop-blur-sm md:bg-transparent p-6 md:p-0 rounded-t-2xl md:rounded-none mx-4 md:mx-0 shadow-xl md:shadow-none border-t border-holy-gold/20 md:border-none"
          >
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-spirit-green mb-4 md:mb-8">
                {title}
              </h2>

              <div className="space-y-4 text-base md:text-lg text-deep-charcoal leading-relaxed">
                {children}
              </div>

              {caption && (
                  <div className="mt-6 pt-4 border-t border-stone-200 md:hidden">
                      <p className="text-xs font-serif italic text-holy-gold">
                      {caption}
                      </p>
                  </div>
              )}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

