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
      className="
        relative
        pt-28 sm:pt-32 md:pt-40
        pb-20 md:pb-40
        overflow-x-hidden
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div
          className="
            w-[280px] h-[280px]
            sm:w-[360px] sm:h-[360px]
            md:w-[520px] md:h-[520px]
            bg-purple-700/30
            rounded-full
            blur-3xl
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10
          max-w-6xl mx-auto
          px-5 sm:px-6
          flex flex-col md:flex-row
          items-center
          gap-10 md:gap-14
        "
      >
        {/* Avatar */}
        <div className="relative flex-shrink-0 animate-float mb-2 md:mb-0">
          <div
            className="
              absolute inset-0
              bg-purple-600/35
              rounded-full
              blur-2xl
              scale-125
            "
          />
          <img
            src={new URL("../assets/avatar.png", import.meta.url).href}
            alt="Avatar"
            className="
              relative
              w-36 h-36
              sm:w-44 sm:h-44
              md:w-56 md:h-56
              rounded-full
              object-cover
            "
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left max-w-xl">
          <p className="text-purple-400 mb-2 sm:mb-4">
            Hello, I’m {profile.name}
          </p>

          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-semibold
              leading-tight
            "
          >
            {displayed.split(" ").map((word, i) =>
              word === "cover" ? (
                <span
                  key={i}
                  className="
                    text-purple-400
                    drop-shadow-[0_0_12px_rgba(168,85,247,0.9)]
                  "
                >
                  {" "}{word}
                </span>
              ) : (
                <span key={i}> {word}</span>
              )
            )}
            <span className="animate-pulse text-purple-400">|</span>
          </h1>

          <h2 className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl font-bold">
            {profile.title}
          </h2>

          <p className="mt-4 sm:mt-6 text-white/80 text-sm sm:text-base">
            {profile.intro}
          </p>

          <a
            href={profile.resume}
            download
            className="inline-block mt-8 px-7 py-3
              rounded-full text-sm sm:text-base
              bg-purple-600/30 border border-purple-400/40
              text-white font-medium backdrop-blur-md
              hover:bg-purple-600/50
              hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]
              transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
