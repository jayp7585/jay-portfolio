import Hero from "./components/Hero"
import WorkExperience from "./components/WorkExperience"
import OrbitSkills from "./components/OrbitSkills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


function App() {
  return (
    <div
      className="min-h-screen text-white
      bg-[radial-gradient(ellipse_at_top,_#2b124c_0%,_#0b021a_45%,_#07010f_100%)]"
    >
      <Navbar />
      <Hero />
      <WorkExperience />
      <OrbitSkills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
