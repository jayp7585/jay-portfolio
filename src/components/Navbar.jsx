import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="
            mt-3 sm:mt-4
            flex items-center justify-between
            rounded-2xl
            bg-purple-900/60
            backdrop-blur-xl
            border border-white/10
            shadow-[0_0_40px_rgba(168,85,247,0.2)]
          "
        >
          {/* LOGO */}
          <div className="px-5 py-4 flex items-center gap-2">
            <div
              className="
                w-10 h-10 rounded-full
                bg-purple-600/30
                flex items-center justify-center
                text-lg font-bold
                shadow-[0_0_20px_rgba(168,85,247,0.8)]
              "
            >
              J
            </div>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-10 px-10 py-4 text-sm">
            {["Home", "About", "Projects", "Lab"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  relative text-white/80 hover:text-white transition
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-purple-400
                  hover:after:w-full after:transition-all
                "
              >
                {item}
              </a>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              px-5 py-4
              text-white
              focus:outline-none
            "
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
            </div>
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div
            className="
              mt-3
              rounded-2xl
              bg-purple-900/80
              backdrop-blur-xl
              border border-white/10
              shadow-xl
              md:hidden
              overflow-hidden
            "
          >
            {["Home", "About", "Projects", "Lab"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="
                  block px-6 py-4
                  text-white/90
                  hover:bg-purple-600/20
                  transition
                "
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
