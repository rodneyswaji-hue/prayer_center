import VisionGrid from "../components/vision/VisionGrid";
import PageWrapper from "../components/layout/PageWrapper";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <PageWrapper>
      {/* Header Section */}
      <section className="bg-stone-beige pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-holy-gold font-bold tracking-[0.2em] uppercase text-sm block mb-4"
          >
            Looking Ahead
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-spirit-green mb-8">
            Our Vision
          </h2>
          <p className="text-xl text-deep-charcoal leading-relaxed font-light">
            To create a sanctuary on Kyevaluki Mountain that nurtures spiritual growth,
            fosters community, and empowers individuals to lead impactful lives.
          </p>
          <div className="w-16 h-1 bg-holy-gold mx-auto mt-10 rounded-full"></div>
        </div>
      </section>

      {/* Grid Section */}
      <VisionGrid />
    </PageWrapper>
  );
}