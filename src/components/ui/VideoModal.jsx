import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function VideoModal({ video, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (video) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => (document.body.style.overflow = "unset");
  }, [video]);

  if (!video) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
        onClick={onClose} // Close when clicking background
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] text-white/70 hover:text-white hover:scale-110 transition-all p-2 bg-white/10 rounded-full"
        >
          <X size={32} />
        </button>

        {/* Video Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          onClick={(e) => e.stopPropagation()} // Prevent close when clicking video area
        >
          {/* NOTE: Since you likely don't have YouTube links yet, 
             this uses a standard HTML5 video tag. 
             Replace 'src' with your actual video path or YouTube iframe.
          */}
          <video 
            src={video.videoUrl || "#"} 
            controls 
            autoPlay 
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Title Bar inside video */}
          <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
             <h3 className="text-white text-xl font-bold font-serif">{video.title}</h3>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}