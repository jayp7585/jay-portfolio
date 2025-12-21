import exp from '../data/experience.json'

export default function WorkExperience() {
  return (
    <section className="px-10 py-20">
      <h2 className="text-3xl font-semibold mb-10">Work Experience</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {exp.map((e, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-md
              hover:scale-[1.02]
              transition"
          >
            <h3 className="text-xl font-semibold">{e.company}</h3>
            <p className="mt-3 text-white/80">{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
