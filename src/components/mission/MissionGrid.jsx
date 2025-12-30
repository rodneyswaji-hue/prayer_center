import { motion } from "framer-motion";
import { Flame, HandHeart, BookOpen, Anchor } from "lucide-react";

const MISSION_POINTS = [
  {
    icon: Flame,
    title: "Sanctify",
    description: "To establish a consecrated altar for prayer and fasting, providing a serene environment for spiritual renewal and encounter with the Divine."
  },
  {
    icon: BookOpen,
    title: "Preserve",
    description: "To safeguard the rich spiritual heritage and history of the Kilumi tradition, passing down wisdom and identity to future generations."
  },
  {
    icon: HandHeart,
    title: "Empower",
    description: "To uplift the local community through holistic development programs, water projects, and educational support that reflects God's love."
  }
];

export default function MissionGrid() {
  return (
    <section id="mission" className="bg-white pt-24 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-holy-gold font-bold tracking-[0.2em] uppercase text-xs block mb-3"
          >
            Our Purpose
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-spirit-green"
          >
            The Mission
          </motion.h2>
          <div className="w-24 h-1 bg-holy-gold/30 mx-auto mt-6 rounded-full" />
        </div>

        {/* The Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {MISSION_POINTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/50 backdrop-blur-sm border border-white/60 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <item.icon size={28} className="text-holy-gold" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <h3 className="text-2xl font-serif font-bold text-spirit-green mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}