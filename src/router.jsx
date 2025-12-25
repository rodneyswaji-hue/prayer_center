import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Journey from "./pages/Journey"
import Vision from "./pages/Vision"
import Partners from "./pages/Partners"
import Contact from "./pages/Contact"
import Donate from "./pages/Donate"

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/journey", element: <Journey /> },
  { path: "/vision", element: <Vision /> },
  { path: "/partners", element: <Partners /> },
  { path: "/contact", element: <Contact /> },
  { path: "/donate", element: <Donate /> },
])
