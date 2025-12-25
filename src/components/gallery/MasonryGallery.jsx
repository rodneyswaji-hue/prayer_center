import { motion } from "framer-motion"

const images = [
  "/public/bible-focus.jpeg",
  "/public/close-focus.jpeg",
  "/public/people_talking.jpeg",
  "/public/two-worshipers.jpeg",
  "/public/sitting-on-rock.jpeg.jpeg",
  "/public/worshiping-in-bush.jpeg.jpeg"
]

export default function MasonryGallery() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold text-primary mb-12">
        Moments from the Mountain
      </h2>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt=""
            className="
            w-full 
            rounded-xl 
            shadow-md 
            object-cover
            max-h-[320px] sm:max-h-[420px] md:max-h-none
            "
            whileHover={{ scale: 1.03 }}
          />
        ))}
      </div>
    </section>
  )
}
