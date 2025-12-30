import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Journey from "./pages/Journey";

import Partners from "./pages/Partners"; // Assuming you have this
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Culture from "./pages/Culture"; // <--- 1. IMPORT THIS

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/journey", element: <Journey /> },
  
  { path: "/partners", element: <Partners /> },
  { path: "/culture", element: <Culture /> }, // <--- 2. ADD THIS LINE
  { path: "/contact", element: <Contact /> },
  { path: "/donate", element: <Donate /> },
]);