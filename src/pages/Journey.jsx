import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react"; // Icons for the sound toggle
import PageWrapper from "../components/layout/PageWrapper";
import StoryBlock from "../components/story/StoryBlock";
import MasonryGallery from "../components/gallery/MasonryGallery";

export default function Journey() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  const toggleSound = () => {
    if (isMuted) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsMuted(!isMuted);
  };

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
      <div className="bg-stone-beige pb-24 space-y-0"> {/* Changed space-y to 0 to manage gaps manually */}
        
        <StoryBlock 
          title="The Journey to Kyevaluki Mountain" 
          images={["/bible-focus.jpeg", "/close-focus.jpeg"]}
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

        {/* --- ENVIRONMENTAL INTERMISSION START --- */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Audio Element (Hidden) */}
          <audio ref={audioRef} loop>
            <source src="/nature-wind.mp3" type="audio/mpeg" />
          </audio>

          <motion.div 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="/environment.jpeg" 
              className="w-full h-full object-cover"
              alt="Mountain Thickets"
            />
            <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-beige via-transparent to-transparent" />
          </motion.div>

          <div className="relative z-10 max-w-2xl px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl relative"
            >
              {/* Sound Toggle Button */}
              <button 
                onClick={toggleSound}
                className="absolute -top-12 left-1/2 -translate-x-1/2 bg-holy-gold text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="animate-pulse" />}
              </button>

              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4 text-holy-gold">
                The Natural Sanctuary
              </h2>
              <p className="text-base md:text-lg leading-relaxed italic font-light">
                "The thorns and thickets were once barriers; today, they are the 
                sanctuary's natural walls, preserving a silence that allows the soul 
                to hear God clearly."
              </p>
            </motion.div>
          </div>
        </section>
        {/* --- ENVIRONMENTAL INTERMISSION END --- */}

        <StoryBlock 
          title="More Than a Place of Prayer" 
          images={["/environment.jpeg", "/far-focus.jpeg"]}
          reverse={true}
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


    </PageWrapper>
  );
}