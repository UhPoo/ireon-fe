import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green_2BAE66: "#2BAE66",
        green_209957: "#209957",
        green_1D7846: "#1D7846",
        red_EF4444: "#EF4444",
        red_DC2626: "#DC2626",
        gray_E5E5E5: "#E5E5E5",
        gray_64748B: "#64748B",
        gray_999999: "#999999",
      },
    },
  },
  plugins: [],
};
export default config;
