export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="mt-4 flex items-center justify-between
          rounded-2xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_40px_rgba(168,85,247,0.15)]"
        >
          {/* Logo */}
          <div className="px-6 py-4 flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-full
              bg-purple-600/30
              flex items-center justify-center
              text-xl font-bold
              shadow-[0_0_20px_rgba(168,85,247,0.8)]"
            >
              J
            </div>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex gap-10 px-10 py-4 text-sm">
            {["Home", "About", "Lab"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white/80 hover:text-white transition
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-purple-400
                hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
