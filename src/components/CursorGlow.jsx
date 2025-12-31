import { useEffect, useState } from "react"

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 })

  useEffect(() => {
    if ("ontouchstart" in window) return

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(
          220px at ${pos.x}px ${pos.y}px,
          rgba(168,85,247,0.18),
          transparent 70%
        )`
      }}
    />
  )
}
