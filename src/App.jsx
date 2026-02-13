import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import WorkExperience from "./components/WorkExperience"
import OrbitSkills from "./components/OrbitSkills"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import BackToTop from "./components/BackToTop"

import BackgroundDots from "./components/BackgroundDots"
import GrainOverlay from "./components/GrainOverlay"

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#07010f] text-white overflow-hidden font-sans">

      {/* Background effects */}
      <BackgroundDots />
      <BackgroundDots />
      <GrainOverlay />

      {/* UI */}
      <Navbar />

      <main className="relative z-10 space-y-20">
        <Hero />
        <About />
        <OrbitSkills />
        <WorkExperience />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </div>
  )
}
