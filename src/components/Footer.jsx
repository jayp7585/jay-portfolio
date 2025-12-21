export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-40 py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[420px] h-[420px] bg-purple-700/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-20"></div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Jay Panchal
            </h3>
            <p className="text-white/70 leading-relaxed">
              MCA student & software developer focused on building clean,
              scalable, and real-world web applications.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-medium mb-4">
              Contact
            </h4>

            <p className="text-white/70 mb-2">
              jayp56837@gmail.com
            </p>

            <p className="text-white/70 mb-6">
              +91 7575853542
            </p>

            {/* CTA */}
            <a
              href="mailto:jayp56837@gmail.com"
              className="inline-block px-6 py-3 rounded-full
              bg-purple-600/30 border border-purple-400/40
              text-sm text-white font-medium
              backdrop-blur-md
              hover:bg-purple-600/50
              hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
              transition"
            >
              Email Me
            </a>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-lg font-medium mb-4">
              Links
            </h4>

            <div className="flex flex-col gap-3 text-white/70">
              <a
                href="https://github.com/jayp7585"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jay-panchal0324"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="/resume/Jay_Panchal_Resume.pdf"
                download
                className="hover:text-purple-400 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 flex flex-col md:flex-row
          items-center justify-between text-sm text-white/40">

          <span>
            © {new Date().getFullYear()} Jay Panchal. All rights reserved.
          </span>

          <a
            href="#home"
            className="mt-6 md:mt-0 hover:text-purple-400 transition"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
