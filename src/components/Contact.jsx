import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { contact, about } from "../portfolio";

export default function Contact() {
    const { title, description, email, location } = contact;
    const { social } = about;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log("Form submitted:", formData);
        alert("Message sent! (This is a demo form)");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="relative py-24 px-6 max-w-7xl mx-auto">
            {/* Background decorations */}
            <div className="absolute -left-20 top-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute -right-20 bottom-20 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] -z-10" />

            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left: Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-5xl font-black font-heading tracking-tight text-white mb-6">
                            {title.split(" ")[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{title.split(" ")[1]}</span>
                        </h2>
                        <p className="text-lg text-white/60 leading-relaxed max-w-md">
                            {description}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <ContactItem icon={<Mail className="w-5 h-5" />} text={email} label="Email" href={`mailto:${email}`} />
                        <ContactItem icon={<MapPin className="w-5 h-5" />} text={location} label="Location" />
                    </div>

                    <div className="flex gap-4">
                        <SocialBtn href={social.github} icon={<Github className="w-5 h-5" />} />
                        <SocialBtn href={social.linkedin} icon={<Linkedin className="w-5 h-5" />} />
                        <SocialBtn href={social.twitter} icon={<Twitter className="w-5 h-5" />} />
                    </div>
                </div>

                {/* Right: Form */}
                <div className="glass-card p-8 md:p-10 rounded-[2.5rem]">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-sans"
                        
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-sans"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-sans resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full group bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                        >
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

function ContactItem({ icon, text, label, href }) {
    const content = (
        <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all">
                {icon}
            </div>
            <div>
                <div className="text-xs text-white/40 font-medium mb-0.5">{label}</div>
                <div className="text-white/80 font-medium">{text}</div>
            </div>
        </div>
    );

    return href ? <a href={href} className="block">{content}</a> : <div>{content}</div>;
}

function SocialBtn({ href, icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/40 transition-all"
        >
            {icon}
        </a>
    );
}
