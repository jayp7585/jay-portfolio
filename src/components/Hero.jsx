import { useRef, useEffect, useState } from "react";
import { about } from "../portfolio";

export default function Hero() {
  const { name, role, description, resume, social } = about;
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000"
    >
      {/* Background Blobs (CSS Animation) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-breathe" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen animate-float-delayed" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div
          className={`text-center md:text-left transition-all duration-1000 transform ${loaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
        >
          <div
            className={`inline-block px-5 py-2 mb-6 text-sm font-bold tracking-wide text-purple-300 uppercase bg-purple-900/10 rounded-full border border-purple-500/20 backdrop-blur-md transition-all duration-700 delay-500 transform ${loaded ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
          >
            {role}
          </div>

          <h1 className="text-6xl md:text-8xl font-black font-heading leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl">
            <span className="block overflow-hidden">
              <span className={`block text-white transition-transform duration-1000 ${loaded ? "translate-y-0" : "translate-y-full"}`}>Design.</span>
            </span>
            <span className="block overflow-hidden">
              <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 transition-transform duration-1000 delay-100 ${loaded ? "translate-y-0" : "translate-y-full"}`}>Code.</span>
            </span>
            <span className="block overflow-hidden">
              <span className={`block text-white/40 transition-transform duration-1000 delay-200 ${loaded ? "translate-y-0" : "translate-y-full"}`}>Create.</span>
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-purple-100/60 mb-10 max-w-lg mx-auto md:mx-0 font-light leading-relaxed transition-all duration-1000 delay-300 transform ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {description}
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start transition-all duration-1000 delay-500 transform ${loaded ? "opacity-100" : "opacity-0"}`}
          >
            <a
              href="#projects"
              className="px-10 py-4 rounded-full bg-white text-black font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300"
            >
              See My Work
            </a>
            <a
              href={resume}
              target="_blank"
              className="px-10 py-4 rounded-full border border-white/20 bg-white/5 font-medium text-lg text-white backdrop-blur-md hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>

        {/* 3D Visual / Avatar Area */}
        <div className="relative flex justify-center md:justify-end perspective-1000">
          <TiltContainer>
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
              {/* Main Image */}
              <div
                className={`absolute inset-4 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl z-20 transition-all duration-1000 transform ${loaded ? "scale-100 opacity-100 rotate-0" : "scale-90 opacity-0 -rotate-6"}`}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 mix-blend-overlay z-10" />
                <img src="./avatar.png" alt="Avatar" className="w-full h-full object-cover bg-[#0a0518]" />
              </div>

              {/* Floating Elements (Parallax via CSS Animation) */}
              <div className="absolute -top-12 -right-12 z-30 p-6 glass-card rounded-2xl shadow-xl animate-float">
                <span className="text-4xl">🚀</span>
              </div>
              <div className="absolute bottom-12 -left-12 z-30 p-6 glass-card rounded-2xl shadow-xl animate-float-delayed">
                <span className="text-4xl">✨</span>
              </div>

              {/* Gradient Orbs */}
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-purple-500/40 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
            </div>
          </TiltContainer>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  )
}

function TiltContainer({ children }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 20; // Max rotation deg
    const yPct = (mouseY / height - 0.5) * -20; // Max rotation deg

    setTransform(`perspective(1000px) rotateX(${yPct}deg) rotateY(${xPct}deg) scale3d(1.05, 1.05, 1.05)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.1s ease-out"
      }}
      className="relative transform-style-3d will-change-transform"
    >
      {children}
    </div>
  );
}
