/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4620ED",
        secondary: "#ea5716",
        tertiary: "#F2F4FF",
        danger: "#c00",
        warning: "#f2a818",
        success: "#089171",
        info: "#17a2b8",
      },

      boxShadow: {
        "drawer-footer-shadow": "-2px -6px 8px #e6e6e6",
        "theme-1": "0 0 10px rgba(0,0,0,0.2)",
      },

      animation: {
        "slide-in": "slide-in 0.3s ease-in-out both",
        "slide-out": "slide-out 0.3s ease-in-out both",
        "fade-in": "fade-in 0.3s ease-in-out both",
        "fade-out": "fade-out 0.3s ease-in-out both",
      },

      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
