import { motion } from "framer-motion";
import PageWrapper from "../components/layout/PageWrapper";
import StoryBlock from "../components/story/StoryBlock";
import MasonryGallery from "../components/gallery/MasonryGallery";

export default function Journey() {
  return (
    <PageWrapper>
      {/* SECTION HEADER */}
      <section className="pt-32 pb-16 bg-stone-beige">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-spirit-green mb-4"
          >
            A Testimony of Faith
          </motion.h2>
          <div className="w-24 h-1 bg-holy-gold mx-auto rounded-full mb-8"></div>
        </div>
      </section>

      {/* STORY CONTENT */}
      <div className="bg-stone-beige pb-24 space-y-24">
        <StoryBlock 
          title="The Journey to Kyevaluki Mountain" 
          image="/public/top-view.jpeg" // Pass an image to the block
          reverse={false}
        >
          <p className="text-gray-700 leading-relaxed mb-4">
            Christians from Machakos County and beyond journeyed to this mountain
            individually and in groups, often risking injury and exhaustion.
          </p>
          <p className="text-gray-700 leading-relaxed italic border-l-4 border-holy-gold pl-4">
            Despite the challenges, worship never ceased. The mountain became a
            testimony of perseverance and faith.
          </p>
        </StoryBlock>

        <StoryBlock 
          title="More Than a Place of Prayer" 
          image="/public/close-focus.jpeg"
          reverse={true} // Alternating side
        >
          <p className="text-gray-700 leading-relaxed mb-4">
            Over time, the site also attracted Girl Guides, Scouts, and school
            teams who came to learn about natural phenomena such as wind tunneling
            and gravitational forces.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Faith and learning coexisted naturally on the mountain, creating a 
            unique environment for spiritual and mental growth.
          </p>
        </StoryBlock>
      </div>

      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-spirit-green mb-10 text-center uppercase tracking-widest">
            Snapshots of the Sacred
          </h3>
          <MasonryGallery />
        </div>
      </div>
    </PageWrapper>
  );
}
