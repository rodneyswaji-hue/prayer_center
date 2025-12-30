import PageWrapper from "../components/layout/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import VideoModal from "../components/ui/VideoModal";

// 1. UNIFIED DATA STREAM (Mix of Images and Videos)
const SLIDES = [
  {
    id: 1,
    type: "image",
    src: "/cultural_drum.jpeg",
    title: "The Heartbeat of Kilumi",
    subtitle: "Sacred Heritage",
    description: "When the drums speak, the heavens listen. These are the original vessels used by our ancestors to invoke the rain."
  },
  {
    id: 2,
    type: "image",
    src: "/preparing.jpeg",
    title: "Ritual Preparation",
    subtitle: "Behind the Scenes",
    description: "The dancers adorn themselves in traditional regalia, every bead and feather carrying a specific spiritual meaning."
  },
  {
    id: 3,
    type: "video",
    src: "/video-thumb-1.jpg", // Fallback to a relevant image if you lack a thumb
    videoUrl: "/videos/dancing_video.mp4",
    title: "The Entrance",
    subtitle: "Live Performance",
    description: "Watch the powerful opening ceremony as the Kwakathule dancers enter the sacred circle.",
    duration: "2:15"
  },
  {
    id: 4,
    type: "video",
    src: "/video-thumb-2.jpg",
    videoUrl: "/videos/kilume_dance2.mp4",
    title: "Rhythm of Rain",
    subtitle: "Live Performance",
    description: "The intensity rises as the drum beats synchronize with the chanting to call upon the blessings of the sky.",
    duration: "3:40"
  },
  {
    id: 5,
    type: "image",
    src: "/prophetess.jpeg",
    title: "The Elders' Blessing",
    subtitle: "Community Leadership",
    description: "Guided by wisdom passed down through generations, we preserve these traditions for the future."
  }
];

// Animation Variants for the Slide Effect
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 1.1 // Subtle zoom effect on entry
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95
  })
};

export default function Culture() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Calculate current slide index based on page number
  const index = Math.abs(page % SLIDES.length);
  const currentSlide = SLIDES[index];

  // Navigation Handlers
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Auto-advance slides every 8 seconds (unless video is playing)
  useEffect(() => {
    if (selectedVideo) return;
    const timer = setInterval(() => paginate(1), 8000);
    return () => clearInterval(timer);
  }, [page, selectedVideo]);

  return (
    <PageWrapper>
      {/* FULL SCREEN SLIDER SECTION */}
      <section className="relative h-screen w-full overflow-hidden bg-black text-white">
        
        {/* 1. BACKGROUND IMAGE & TRANSITION */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            className="absolute inset-0 z-0"
          >
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/50 z-10" />
            
            <img 
              src={currentSlide.src} 
              alt={currentSlide.title} 
              className="w-full h-full object-cover"
              onError={(e) => {e.target.src = "/cultural_drum.jpeg"}} // Safety fallback
            />
          </motion.div>
        </AnimatePresence>

        {/* 2. TEXT CONTENT OVERLAY */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12">
            
            <motion.div 
              key={currentSlide.id} // Re-animate text on slide change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="md:pr-12"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-black/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-6 text-holy-gold">
                {currentSlide.type === 'video' ? <Play size={12} /> : null}
                {currentSlide.subtitle}
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                {currentSlide.title}
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-xl">
                {currentSlide.description}
              </p>

              {/* ACTION BUTTON (Only if it's a video) */}
              {currentSlide.type === 'video' && (
                <button
                  onClick={() => setSelectedVideo(currentSlide)}
                  className="group flex items-center gap-4 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl shadow-red-900/20"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Play size={16} className="text-red-700 ml-1" />
                  </div>
                  <span className="font-bold tracking-wide">Watch Performance</span>
                </button>
              )}
            </motion.div>

          </div>
        </div>

        {/* 3. NAVIGATION CONTROLS */}
        
        {/* Arrows */}
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all text-white hover:scale-110"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all text-white hover:scale-110"
          onClick={() => paginate(1)}
        >
          <ChevronRight size={32} />
        </button>

        {/* Progress Dots at Bottom */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setPage([i, i > index ? 1 : -1]); // Smart direction calculation
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? "w-12 bg-holy-gold" : "w-6 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

      </section>

      {/* VIDEO MODAL (Kept existing functionality) */}
      {selectedVideo && (
        <VideoModal 
          video={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}
    </PageWrapper>
  );
}