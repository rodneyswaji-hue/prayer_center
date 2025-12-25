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

  return (
    <section ref={ref} className={`${bgTone} py-28`}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className={`relative h-[420px] rounded-2xl overflow-hidden shadow-lg ${
            reverse ? "md:order-last" : ""
          }`}
        >
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* IMAGE CAPTION */}
          {caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm px-4 py-3">
              <p className="text-sm font-serif italic text-holy-gold">
                {caption}
              </p>
            </div>
          )}
        </motion.div>

        {/* TEXT */}
        <div className={reverse ? "md:order-first" : ""}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold text-spirit-green mb-8"
          >
            {title}
          </motion.h2>

          <div className="space-y-6 text-lg text-deep-charcoal leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

