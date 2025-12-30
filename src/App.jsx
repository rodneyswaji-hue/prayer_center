import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { router } from "./router";
import Preloader from "./components/ui/Preloader"; // Import the component
import "./index.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Lock the scrollbar so user can't scroll while loading
    document.body.style.overflow = "hidden";

    // 2. Set timer for 2.5 seconds (adjust to match the progress bar duration)
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset"; // Unlock scroll
      window.scrollTo(0, 0); // Ensure we start at top
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      {/* The Preloader sits on top (z-index 9999) */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* The App is rendered behind it, ready to be revealed */}
      <RouterProvider router={router} />
    </>
  );
}
