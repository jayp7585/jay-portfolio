import { useState, useRef, useEffect } from "react";
import { experience } from "../portfolio";

export default function WorkExperience() {
  const { title, description, data } = experience;
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section id="experience" className="relative py-24 px-6 max-w-7xl mx-auto">
      {/* Background Lighting Effect */}
      <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="mb-20 space-y-4">
        <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          {title}
        </h2>
        <p className="text-xl text-white/50 max-w-2xl">
          {description}
        </p>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 group/container"
      >
        {data.map((e, i) => (
          <SpotlightCard key={i} data={e} mousePosition={mousePosition} index={i} />
        ))}
      </div>
    </section>
  );
}

function SpotlightCard({ data, mousePosition, index }) {
  return (
    <div
      className="relative h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover/container:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.15), transparent 40%)`,
        }}
      />
      <div className="relative p-8 h-full flex flex-col z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <img
              src={`./logos/${data.logo}`}
              alt={data.company}
              className="w-10 h-10 object-contain brightness-0 invert opacity-80"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
          <span className="px-3 py-1 text-xs font-bold bg-white/5 rounded-full text-white/40 border border-white/5">
            {data.duration}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{data.role}</h3>
        <p className="text-lg text-white/60 mb-6">{data.company}</p>

        <ul className="space-y-3 mb-8 flex-grow">
          {data.description.map((item, i) => (
            <li key={i} className="flex items-start text-sm text-white/50 group-hover:text-white/70 transition-colors">
              <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-purple-500/50 rounded-full" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-auto">
          {data.skills.map((skill, i) => (
            <span key={i} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 text-purple-200/60 rounded border border-white/5 group-hover:border-purple-500/20 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
