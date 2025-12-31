import { useEffect, useState } from "react"

const DOT_COUNT = 14

export default function BackgroundDots() {
  const [dots, setDots] = useState([])

  useEffect(() => {
    const generated = Array.from({ length: DOT_COUNT }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      speed: Math.random() * 0.015 + 0.005,
      opacity: Math.random() * 0.4 + 0.2
    }))
    setDots(generated)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev =>
        prev.map(dot => ({
          ...dot,
          y: dot.y - dot.speed * 100,
          x: dot.x + Math.sin(dot.y / 10) * 0.05,
          ...(dot.y < -5 && {
            y: 105,
            x: Math.random() * 100
          })
        }))
      )
    }, 30) // ⬅ SPEED CONTROLLER (lower = faster)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {dots.map((dot, i) => (
        <span
          key={i}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity
          }}
          className="absolute rounded-full bg-purple-400 blur-[0.5px]"
        />
      ))}
    </div>
  )
}
