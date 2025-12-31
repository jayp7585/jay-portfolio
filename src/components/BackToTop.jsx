import { useEffect, useRef, useState } from "react"

export default function BackToTop() {
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(false)
  const btnRef = useRef(null)

  // Scroll progress + show/hide
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const percent = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(percent)

      setShow(scrollTop > 300)

      // Hide when footer visible
      const footer = document.querySelector("footer")
      if (footer) {
        const rect = footer.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          setShow(false)
        }
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Magnetic hover
  const onMouseMove = (e) => {
    const btn = btnRef.current
    if (!btn) return

    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  }

  const reset = () => {
    if (btnRef.current) {
      btnRef.current.style.transform = "translate(0,0)"
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      className={`back-to-top ${show ? "visible" : ""}`}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      onClick={scrollToTop}
      ref={btnRef}
    >
      <svg viewBox="0 0 36 36" className="progress-ring">
        <path
          className="ring-bg"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="ring-progress"
          strokeDasharray={`${progress * 100}, 100`}
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>

      <span className="arrow">↑</span>
      <span className="tooltip">Back to top</span>
    </div>
  )
}
