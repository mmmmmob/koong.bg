/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Komika Hand"],
        serif: ["Lora"],
      },
      keyframes: {
        slowpan: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "65% 60%" },
        },
      },
      animation: { slowpan: "slowpan 15s linear forwards" },
      backgroundSize: {
        "200%": "200%",
      },
    },
  },
};
