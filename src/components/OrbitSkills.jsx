import { skills } from "../portfolio";

export default function OrbitSkills() {
  const { data, title, description } = skills;

  // Duplicate array for seamless loop
  const row1 = [...data, ...data, ...data]
  const row2 = [...data.reverse(), ...data, ...data]

  return (
    <section id="skills" className="relative py-24 overflow-hidden">

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {title}
        </h2>
        <p className="text-white/60">
          {description}
        </p>
      </div>

      {/* GRADIENT MASKS */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#07010f] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#07010f] to-transparent z-10 pointer-events-none" />

      {/* ROW 1 */}
      <div className="flex mb-8 w-max animate-marquee hover:[animation-play-state:paused]">
        {row1.map((skill, i) => (
          <div key={i} className="mx-3 group">
            <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/5 text-white/80 font-medium whitespace-nowrap backdrop-blur-md group-hover:bg-purple-600/20 group-hover:border-purple-500/40 group-hover:text-white transition-colors duration-300 flex items-center gap-2 text-lg">
              <span>{skill.icon || "💻"}</span>
              {skill.name}
            </div>
          </div>
        ))}
      </div>

      {/* ROW 2 */}
      <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
        {row2.map((skill, i) => (
          <div key={i} className="mx-3 group">
            <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/5 text-white/80 font-medium whitespace-nowrap backdrop-blur-md group-hover:bg-purple-600/20 group-hover:border-purple-500/40 group-hover:text-white transition-colors duration-300 flex items-center gap-2 text-lg">
              <span>{skill.icon || "🔧"}</span>
              {skill.name}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
