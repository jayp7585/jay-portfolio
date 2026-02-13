/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
      /* =========================
         ANIMATIONS
      ========================= */
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "spin-fast": "spin 6s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "breathe": "breathe 6s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marquee 25s linear infinite reverse",
        "border-spin": "border-spin 4s linear infinite",
      },

      /* =========================
         KEYFRAMES
      ========================= */
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        breathe: {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.1)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "border-spin": {
          "100%": { transform: "rotate(-360deg)" },
        }
      }
    }
  },
  plugins: []
}
