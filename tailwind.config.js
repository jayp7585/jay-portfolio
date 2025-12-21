/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      /* =========================
         ANIMATIONS
      ========================= */
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "spin-fast": "spin 6s linear infinite",
        "float": "float 6s ease-in-out infinite"
      },

      /* =========================
         KEYFRAMES
      ========================= */
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        }
      }
    }
  },
  plugins: []
}
