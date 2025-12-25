import PageWrapper from "../components/layout/PageWrapper"
import HeroSection from "../components/hero/HeroSection"
import StoryBlock from "../components/story/StoryBlock"
import VisionGrid from "../components/vision/VisionGrid"
import { motion, useScroll } from "framer-motion"

function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-holy-gold z-[100]"
    />
  )
}


export default function Home() {
  return (
    <PageWrapper>
      <ScrollProgress />
      <HeroSection />

      {/* TRANSITIONAL DIVIDER */}
      <div className="bg-stone-beige pt-20">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="w-24 h-px bg-holy-gold/40"
          />
        </div>
      </div>

      {/* STORY SECTION */}
      <div className="bg-stone-beige space-y-32 pb-32">
        <StoryBlock
          index={0}
          title="Foreword: A Legacy of Faith and Gratitude"
          image="/sitting-on-rock.jpeg"
          caption="A place preserved by faith, entrusted for generations."
        >
          <p>
            The family—donors of the land upon which this sacred Center is being
            established—offer heartfelt gratitude to God for His preservation and
            faithfulness, even in the midst of illness and adversity.
          </p>

          <p>
            To the Patriarch and Matriarchs who entrusted this holy ground to their
            beloved son, may the Almighty God be with you always, and may your
            legacy endure for generations.
          </p>

          <p className="font-serif italic text-lg text-spirit-green">
            To every worshiper—near and far—who claimed this mountain for God:
            your faith and devotion became the family’s strength, inspiring them
            to seek the Almighty fearlessly. May God hear and answer your prayers,
            now and forever.
          </p>
        </StoryBlock>

        <StoryBlock
          index={1}
          caption="A sacred Mountain of Faith"
          title="A Sacred Mountain of Faith"
          image="/walking-bush.jpeg"
          reverse
        >
          <p>
            For decades, believers climbed Kyevaluki Mountain to pray and fast,
            driven not by comfort but by conviction.
          </p>

          <p className="font-serif italic text-lg text-spirit-green">
            “Thorny bushes, steep stones, and dangerous terrain never stopped them.
            Faith outweighed fear.”
          </p>
        </StoryBlock>

        <StoryBlock
          index={2}
          caption="A Vision Realized"
          title="A Turning Point"
          image="/sitting-on-rock.jpeg"
        >
          <p>
            In 2024, a simple question changed everything:
            <strong className="block mt-2 text-xl font-serif text-spirit-green">
              How can this place better serve those who seek God?
            </strong>
          </p>

          <p>
            That moment marked the birth of a structured vision—a Prayer and
            Fasting Center designed for worship, rest, learning, and impact.
          </p>
        </StoryBlock>
      </div>

      {/* VISION GRID */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6 mb-16">
          <h2 className="text-4xl font-serif font-bold text-spirit-green mb-4">
            Our Commitment
          </h2>
          <p className="text-gray-600">
            Building a future where spiritual heritage and community growth go
            hand in hand.
          </p>
        </div>

        <VisionGrid />
      </section>
    </PageWrapper>
  )
}
