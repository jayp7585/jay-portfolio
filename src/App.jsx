import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import WorkExperience from "./components/WorkExperience"
import OrbitSkills from "./components/OrbitSkills"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"

import BackgroundDots from "./components/BackgroundDots"
import CursorGlow from "./components/CursorGlow"

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#07010f] text-white overflow-hidden">

      {/* Background effects */}
      <BackgroundDots />
      <CursorGlow />

      {/* UI */}
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <WorkExperience />
        <OrbitSkills />
        <Projects />
        <Footer />
      </main>
    <BackToTop />
    </div>
  )
}
