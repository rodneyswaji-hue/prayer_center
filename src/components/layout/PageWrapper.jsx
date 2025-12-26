import Navbar from "./Navbar"
import Footer from "./Footer"
import MobileActionBar from "../MobileActionBar" // If you added this earlier

export default function PageWrapper({ children }) {
  return (
    <div className="overflow-x-hidden w-full relative"> {/* Added overflow-x-hidden here */}
      <Navbar />
      <main className="pt-0 min-h-screen">
        {children}
      </main>
      <MobileActionBar /> 
      <Footer />
    </div>
  )
}
