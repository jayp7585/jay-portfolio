import { useEffect, useState } from "react"
import skills from "../data/skills.json"
import CenterLogo from "./CenterLogo"

export default function OrbitSkills() {
  const isMobile = window.innerWidth < 640
  const radius = isMobile ? 100 : 140
  const size = isMobile ? 260 : 360
  const center = size / 2

  const [angle, setAngle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.3)
    }, 16)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="lab"
      className="relative py-24 sm:py-32 flex items-center justify-center"
    >
      {/* Background glow */}
      <div className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px]
        bg-purple-600/30 rounded-full blur-3xl"></div>

      <CenterLogo />

      {/* ORBIT CONTAINER */}
      <div
        className="relative"
        style={{ width: size, height: size }}
      >
        {/* ================= SVG CONNECTORS ================= */}
        <svg
          width={size}
          height={size}
          className="absolute top-0 left-0"
        >
          {skills.map((_, index) => {
            const angleOffset = (360 / skills.length) * index
            const totalAngle = angle + angleOffset
            const rad = (totalAngle * Math.PI) / 180

            const x = center + radius * Math.cos(rad)
            const y = center + radius * Math.sin(rad)

            return (
              <g key={index}>
                {/* Line */}
                <line
                  x1={center}
                  y1={center}
                  x2={x}
                  y2={y}
                  stroke="rgba(168,85,247,0.35)"
                  strokeWidth="1"
                />

                {/* Dot */}
                <circle
                  cx={x}
                  cy={y}
                  r="3"
                  fill="rgba(168,85,247,0.9)"
                />
              </g>
            )
          })}
        </svg>

        {/* ================= SKILLS ================= */}
        {skills.map((skill, index) => {
          const angleOffset = (360 / skills.length) * index
          const totalAngle = angle + angleOffset
          const rad = (totalAngle * Math.PI) / 180

          const x = radius * Math.cos(rad)
          const y = radius * Math.sin(rad)

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(${x}px, ${y}px)`
              }}
            >
              <div
                className="px-3 py-1
                text-xs sm:text-sm
                rounded-full
                bg-white/10 backdrop-blur-md
                border border-white/20
                hover:bg-purple-600/40
                transition"
              >
                {skill}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
