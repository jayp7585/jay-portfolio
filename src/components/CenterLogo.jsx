export default function CenterLogo() {
  return (
    <div className="absolute z-20 flex items-center justify-center">

      {/* Outer slow ring */}
      <div className="absolute
        w-[160px] h-[160px]
        sm:w-[220px] sm:h-[220px]
        rounded-full border
        border-purple-500/20
        animate-spin-slow"></div>

      {/* Inner fast ring */}
      <div className="absolute
        w-[120px] h-[120px]
        sm:w-[160px] sm:h-[160px]
        rounded-full border
        border-purple-400/30
        border-t-transparent
        animate-spin-fast"></div>

      {/* Glow */}
      <div className="absolute
        w-24 h-24
        bg-purple-600/40
        rounded-full blur-3xl animate-pulse"></div>

      {/* J Logo */}
      <div className="relative
        w-16 h-16
        sm:w-20 sm:h-20
        rounded-full
        glass-card p-0
        flex items-center justify-center
        text-2xl sm:text-3xl
        font-bold font-heading
        text-white
        border border-purple-500/30
        shadow-[0_0_40px_rgba(168,85,247,0.5)]">
        JP
      </div>
    </div>
  )
}
