import { useEffect, useState } from "react"
import profile from "../data/profile.json"

const TEXT = "Judges a book by its cover"

export default function Hero() {
  const [displayed, setDisplayed] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < TEXT.length) {
      const t = setTimeout(() => {
        setDisplayed(TEXT.slice(0, index + 1))
        setIndex(index + 1)
      }, 70)
      return () => clearTimeout(t)
    }
  }, [index])

  return (
    <section
      id="home"
      className="relative pt-32 md:pt-40 pb-32 overflow-hidden"
    >
      {/* soft hero glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-glow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
        
        {/* Avatar (NO ring, only soft glow) */}
        <div className="relative">
          <div className="avatar-glow" />
          <img
            src="/jay-portfolio/public/avatar.png"
            alt="Avatar"
            className="relative w-40 h-40 md:w-56 md:h-56 object-cover rounded-xl"
          />
        </div>

        {/* Text */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-purple-400 mb-2">
            Hello, I’m {profile.name}
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            {displayed.split(" ").map((word, i) =>
              word === "cover" ? (
                <span key={i} className="text-purple-400 glow-text">
                  {" "}{word}
                </span>
              ) : (
                <span key={i}> {word}</span>
              )
            )}
            <span className="text-purple-400 animate-pulse">|</span>
          </h1>

          <h2 className="mt-6 text-xl md:text-2xl font-bold">
            {profile.title}
          </h2>

          <p className="mt-4 text-white/80">
            {profile.intro}
          </p>

          <a
            href="https://drive.google.com/file/d/13GKWr9CE1fjt1FdjQQnpAJ3a120iDeZ0/view"
            target="_blank"
            className="inline-block mt-8 px-7 py-3 rounded-full
              bg-white/10 border border-white/20
              hover:bg-white/20 transition"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  )
}
