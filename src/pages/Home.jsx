import PageWrapper from "../components/layout/PageWrapper"
import HeroSection from "../components/hero/HeroSection"
import StoryBlock from "../components/story/StoryBlock"
import VisionGrid from "../components/vision/VisionGrid"
import MissionGrid from "../components/mission/MissionGrid"
import { motion, useScroll } from "framer-motion"

// --- 1. THE PROGRESS BAR ---
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-holy-gold z-[100]"
    />
  )
}

// --- 2. THE CLEAN EDITORIAL DEDICATION ---
const DedicationSection = () => {
  return (
    // CHANGED: Removed top margin/padding that might create gaps
    // Added 'pt-24' to create internal breathing room inside the white box
    <section className="relative pt-24 pb-32 bg-white text-spirit-green">
      
      {/* OPTIONAL: A small gradient at the very top to blend the transition from the Hero if needed */}
      {/* <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-spirit-green/10 to-transparent" /> */}

      {/* THE GOLD LINE (Moved inside) */}
      <div className="flex justify-center mb-16">
         <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-24 h-[2px] bg-spirit-green/20"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* COLUMN 1: The Title */}
          <div className="md:col-span-4 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-xs font-sans font-bold tracking-[0.2em] text-holy-gold uppercase mb-4">
                Foreword
              </span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-spirit-green">
                A Legacy of <br />
                <span className="italic text-holy-gold">Faith</span> & <br />
                Gratitude.
              </h2>
              {/* Decorative short line */}
              <div className="w-16 h-1 bg-spirit-green mt-8"></div>
            </motion.div>
          </div>

          {/* COLUMN 2: The Content */}
          <div className="md:col-span-8 md:pl-12 border-l-0 md:border-l border-stone-200">
            <div className="space-y-12">
              
              {/* Block 1: The Donors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-xl md:text-2xl font-serif leading-relaxed text-gray-800">
                  "The family—donors of the land upon which this sacred Center is being
                  established—offer heartfelt gratitude to God for His preservation and
                  faithfulness, even in the midst of illness and adversity."
                </p>
                <p className="mt-4 text-sm font-sans tracking-wide uppercase text-gray-400">
                  — To The Patriarch & Matriarchs
                </p>
              </motion.div>

              {/* Block 2: The Worshippers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-stone-beige/30 p-8 rounded-sm border-l-4 border-holy-gold"
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  To every worshiper—near and far—who claimed this mountain for God:
                  your faith and devotion became the family’s strength, inspiring them
                  to seek the Almighty fearlessly.
                </p>
                <p className="font-serif italic text-xl text-spirit-green">
                  May God hear and answer your prayers, now and forever.
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// --- 3. MAIN PAGE LAYOUT ---
export default function Home() {
  return (
    <PageWrapper>
      <ScrollProgress />
      
      {/* 1. HERO SECTION */}
      {/* Assuming this ends with a green tone/image */}
      <HeroSection />

      {/* 2. DEDICATION SECTION */}
      {/* Removed the 'bg-stone-beige' divider div. This section now sits flush against the Hero. */}
      <DedicationSection />

      {/* 3. STORY SECTION */}
      {/* This is where we bring back the beige background for contrast against the white above */}
      <div className="bg-stone-beige py-24 md:py-32">
        <StoryBlock
          index={0}
          title="From Ancient Paths to a New Vision"
          caption="A Sacred Turning Point"
          images={[
             "/worshiping-in-bush.jpeg", 
             "/sitting-on-rock.jpeg", 
             "/walking-bush.jpeg",
             "/environment.jpeg",
             "/people_talking.jpeg"
          ]} 
        >
          <div className="space-y-8">
            <div>
              <h4 className="font-serif text-2xl text-spirit-green mb-3">The Mountain of Faith</h4>
              <p className="text-gray-700">
                For decades, believers climbed Kyevaluki Mountain to pray and fast,
                driven not by comfort but by conviction. Thorny bushes and dangerous 
                terrain never stopped them. Faith outweighed fear.
              </p>
            </div>

            <div className="w-12 h-px bg-spirit-green/20"></div>

            <div>
              <h4 className="font-serif text-2xl text-spirit-green mb-3">The 2024 Vision</h4>
              <p className="text-gray-700">
                Then, a simple question changed everything: 
                <span className="italic text-spirit-green font-medium"> "How can this place better serve those who seek God?" </span>
                That moment marked the birth of a structured vision—a Prayer and
                Fasting Center designed for worship, rest, learning, and impact.
              </p>
            </div>
            
            
          </div>
        </StoryBlock>
      </div>

      <MissionGrid />

      <section id="vision" className="bg-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6 mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-spirit-green mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg">
              Building a future where spiritual heritage and community growth go
              hand in hand.
            </p>
          </motion.div>
        </div>
        <VisionGrid />
      </section>

    </PageWrapper>
  )
}