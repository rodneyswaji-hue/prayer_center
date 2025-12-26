import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function StoryBlock({
  title,
  image,
  caption,
  reverse = false,
  index = 0,
  children
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // subtle parallax
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"])

  const bgTone =
    index % 2 === 0 ? "bg-stone-beige" : "bg-white"

// inside StoryBlock.jsx

  return (
    <section ref={ref} className={`${bgTone} py-20 md:py-28 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-0 md:gap-16 items-center">
        
        {/* IMAGE CONTAINER */}
        <motion.div
          style={{ y }} // Keep your parallax
          className={`relative h-[50vh] md:h-[420px] w-full shadow-lg ${
            reverse ? "md:order-last" : ""
          }`}
        >
          <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark Gradient Overlay for Mobile Text Readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
          </div>
        </motion.div>

        {/* TEXT CONTAINER - THE "MAGAZINE" OVERLAP FIX */}
        <div className={`relative z-10 -mt-16 md:mt-0 ${reverse ? "md:order-first" : ""}`}>
          
          {/* The Card Box */}
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

              {/* Mobile Caption moved inside the card */}
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

