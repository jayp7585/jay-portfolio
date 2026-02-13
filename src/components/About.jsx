import { about } from "../portfolio";

export default function About() {
    const { name, role, aboutDescription, stats } = about;

    return (
        <section id="about" className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">

            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="order-2 md:order-1">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        About Me
                    </h2>

                    <div className="glass-card">
                        {aboutDescription.map((paragraph, index) => (
                            <p key={index} className="text-white/80 leading-relaxed text-lg mb-6 last:mb-0">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Stats / Visuals */}
                <div className="order-1 md:order-2 flex flex-col gap-6">
                    {stats.map((stat, index) => {
                        const borderColors = ["border-l-purple-500", "border-l-pink-500", "border-l-blue-500"];
                        return (
                            <div key={index} className={`glass-card border-l-4 ${borderColors[index % 3]}`}>
                                <h3 className="text-4xl font-bold font-heading text-white mb-2">{stat.value}</h3>
                                <p className="text-white/60">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
