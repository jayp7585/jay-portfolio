export default function HolographicCard({ children, className = "" }) {
    return (
        <div className={`relative group rounded-3xl p-[1px] overflow-hidden ${className}`}>
            {/* Animated Border Gradient */}
            <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,_#a855f7_120deg,transparent_180deg)] animate-border-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Static Border (fallback) */}
            <div className="absolute inset-0 rounded-3xl border border-white/10" />

            {/* Inner Content Background */}
            <div className="relative h-full bg-[#0a0518]/90 backdrop-blur-xl rounded-3xl p-8 transition-colors group-hover:bg-[#0f0724]/90">
                {children}
            </div>
        </div>
    );
}
