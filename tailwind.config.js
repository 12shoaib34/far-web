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
    },
  },
  plugins: [],
};
