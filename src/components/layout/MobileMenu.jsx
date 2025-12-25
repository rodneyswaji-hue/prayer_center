import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function MobileMenu({ open, onClose }) {
  if (!open) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/60 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute right-0 top-0 h-full w-4/5 bg-white p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col gap-6 text-lg font-medium">
          <Link to="/" onClick={onClose}>Home</Link>
          <Link to="/journey" onClick={onClose}>Journey</Link>
          <Link to="/vision" onClick={onClose}>Vision</Link>
          <Link to="/partners" onClick={onClose}>Partners</Link>
          <Link to="/contact" onClick={onClose}>Contact</Link>
        </nav>
      </motion.div>
    </motion.div>
  )
}
