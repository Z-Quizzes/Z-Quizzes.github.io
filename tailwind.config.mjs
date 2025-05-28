// tailwind.config.mjs
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F57C00",         // vibrant orange (buttons, headers)
        secondary: "#FFE0B2",       // peachy background (cards)
        accent: "#388E3C",          // green (quizzes, success)
        warning: "#EF6C00",         // darker orange (choices)
        info: "#81D4FA",            // optional light blue
        background: "#FFF8F1",      // light creamy background
        surface: "#FAEAD6",         // cards, soft beige
        text: "#4E342E",            // deep brown text
        lightText: "#8D6E63",       // lighter text
        success: "#4CAF50",         // correct answers
        danger: "#E53935",          // for incorrect or danger
        classA: "#FFCDD2",          // soft red/pink (Class A)
        classB: "#FFE082",          // yellowish (Class B)
        classC: "#B2EBF2",          // light teal (Class C)
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
