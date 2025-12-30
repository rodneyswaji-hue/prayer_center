import PageWrapper from "../components/layout/PageWrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Music, CloudRain, Users } from "lucide-react";
import { useRef, useState } from "react";
import VideoModal from "../components/ui/VideoModal";

// Placeholder data - Replace strings with your actual file paths
const DANCE_VIDEOS = [
  { 
    id: 1, 
    title: "The Entrance", 
    duration: "2:15", 
    thumbnail: "/video-thumb-1.jpg", 
    videoUrl: "/videos/dancing_video.mp4" // Path to your video file in public folder
  },
  { 
    id: 2, 
    title: "Rhythm of Rain", 
    duration: "3:40", 
    thumbnail: "/video-thumb-2.jpg", 
    videoUrl: "/videos/kilume_dance2.mp4" 
  },
  { 
    id: 3, 
    title: "Celebration", 
    duration: "1:30", 
    thumbnail: "/video-thumb-3.jpg", 
    videoUrl: "/videos/kilume_dance3.mp4" 
  }
];

const GALLERY_IMAGES = [
  "/cultural_drum.jpeg", // The one you attached
  "/prophetess.jpeg",   // Replace with your other photos
  "/preparing.jpeg"     // Replace with your other photos
];

export default function Culture() {
 
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { scrollYProgress } = useScroll({

    offset: ["start start", "end end"]
  });

  // Parallax effect for the drum image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <PageWrapper>
      
      {/* 1. CINEMATIC HERO (Video Background) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* If you can't upload the video, use the best group photo here with a zoom effect */}
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
             <div className="absolute inset-0 bg-black/60 z-10" />
             <img 
               src="/cultural_drum.jpeg" 
               className="w-full h-full object-cover grayscale brightness-50" 
               alt="Background" 
             />
          </motion.div>
        </div>

        <div className="relative z-20 text-center text-white px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-holy-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Heritage & History
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6">
              The Beat of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-holy-gold">Kilumi</span>
            </h1>
            <p className="text-lg md:text-2xl font-light text-gray-200 max-w-2xl mx-auto leading-relaxed">
              "When the drums speak, the heavens listen." <br/>
              Experience the sacred Kwakathule traditions.
            </p>
          </motion.div>
        </div>
      </section>


      {/* 2. THE ARTIFACT SPOTLIGHT (The Drums) */}
      <section className="bg-[#1a1a1a] text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 relative">
            {/* Artistic circle behind the drum */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-900/20 rounded-full blur-3xl" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rotate-[-2deg] hover:rotate-0 transition-transform duration-700"
            >
              <img 
                src="/kilumi_dancers.jpeg" 
                alt="Kilumi Drums" 
                className="rounded-2xl shadow-2xl border border-white/10 w-full"
              />
              {/* Caption Tag */}
              <div className="absolute -bottom-6 -right-6 bg-white text-black p-4 rounded-xl shadow-lg max-w-[200px] hidden md:block">
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-red-700">Artifact</p>
                <p className="text-sm font-serif italic">Original Kilumi Drums used for rain prayer ceremonies.</p>
              </div>
            </motion.div>
          </div>

          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6 text-red-500">
              <CloudRain size={32} />
              <span className="text-sm font-bold uppercase tracking-widest">The Prayer for Rain</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Voices of the Earth
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              The <strong>Kilumi dance</strong> is not just a performance; it is a sacred invocation. 
              Historically, when the land was dry and the skies were silent, the elders would bring out these drums.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-red-800 pl-6">
              The rhythmic beating was believed to reach the ears of the Divine, inviting the blessing of rain 
              to nourish the parched earth. Today, the <strong>Kwakathule Traditional Dancers</strong> keep this 
              powerful heritage alive.
            </p>
            
            <div className="flex gap-4">
               <div className="flex items-center gap-2 text-sm text-holy-gold border border-holy-gold/30 px-4 py-2 rounded-full">
                  <Music size={16} />
                  <span>Ritual Rhythms</span>
               </div>
               <div className="flex items-center gap-2 text-sm text-holy-gold border border-holy-gold/30 px-4 py-2 rounded-full">
                  <Users size={16} />
                  <span>Community Unity</span>
               </div>
            </div>
          </div>

        </div>
      </section>


      {/* 3. VIDEO SHOWCASE (Netflix Style) */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-spirit-green mb-2">Live Performances</h2>
              <p className="text-gray-500">Watch the Kwakathule Dancers in motion.</p>
            </div>
          </div>

            <div className="grid md:grid-cols-3 gap-6">
            {DANCE_VIDEOS.map((video, i) => (
                <motion.div 
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} // <--- THIS WAS MISSING!
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative aspect-video bg-black rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all hover:-translate-y-2"
                >
                {/* THUMBNAIL IMAGE */}
                <div className={`absolute inset-0 bg-stone-800 ${video.thumbnail ? '' : 'animate-pulse'}`}>
                    {/* We use the drum image as a fallback if the specific video thumb fails */}
                    <img 
                    src={video.thumbnail || "/cultural_drum.jpeg"} 
                    alt={video.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                    onError={(e) => {e.target.src = "/cultural_drum.jpeg"}} // Fallback if file not found
                    />
                </div>
                
                {/* PLAY BUTTON OVERLAY */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl border border-white/20">
                    <Play fill="white" className="text-white ml-1 w-8 h-8" />
                    </div>
                </div>

                {/* TITLE BAR */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <h3 className="text-white font-bold font-serif tracking-wide">{video.title}</h3>
                    <p className="text-holy-gold text-xs font-bold uppercase tracking-widest mt-1">{video.duration}</p>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
      </section>


      {/* 4. IMMERSIVE GALLERY (Masonry) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-spirit-green mb-6">
            Preserving the Tradition
          </h2>
          <div className="w-24 h-1 bg-red-800 mx-auto rounded-full" />
        </div>

        {/* Using a grid that focuses on the images */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {GALLERY_IMAGES.map((src, index) => (
             <motion.div 
               key={index}
               whileHover={{ scale: 1.02 }}
               className={`rounded-2xl overflow-hidden shadow-md ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
             >
               <img src={src} alt="Kwakathule Dancer" className="w-full h-full object-cover min-h-[300px]" />
             </motion.div>
           ))}
        </div>
      </section>
      {/* VIDEO MODAL */}
      {selectedVideo && (
        <VideoModal 
          video={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}

    </PageWrapper>
  );
}