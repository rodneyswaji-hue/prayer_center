import Navbar from "./Navbar"
import Footer from "./Footer"

export default function PageWrapper({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-0">{children}</main>
      <Footer />
    </>
  )
}
