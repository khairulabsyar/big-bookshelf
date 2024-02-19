import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      white: "#FFFFFF",
      yellow: "#F4CE47",
      orange: "#F1A72B",
      gray: "#646464",
      black: "#141414",
      false: "#FF2727",
      mainBackground: "#F6F4F0",
      backgroundBlack: "#2A2C2E",
    },
    fontSize: {
      h1: [
        "96px",
        {
          lineHeight: "120px",
          fontWeight: "600",
        },
      ],
      h2: [
        "60px",
        {
          lineHeight: "72px",
          fontWeight: "600",
        },
      ],
      h3: [
        "48px",
        {
          lineHeight: "56px",
          fontWeight: "400",
        },
      ],
      h4: [
        "32px",
        {
          lineHeight: "40px",
          fontWeight: "500",
        },
      ],
      h5: [
        "24x",
        {
          lineHeight: "32px",
          fontWeight: "500",
        },
      ],
      h5Regular: [
        "24px",
        {
          lineHeight: "28px",
          fontWeight: "400",
        },
      ],
      h6: [
        "20px",
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      sub1: [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      button: [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "500",
        },
      ],
      sub2: [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "400",
        },
      ],
      body1: [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      body2: [
        "14px",
        {
          lineHeight: "240px",
          fontWeight: "400",
        },
      ],
      caption: [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "400",
        },
      ],
      overline: [
        "10px",
        {
          lineHeight: "16px",
          fontWeight: "400",
        },
      ],
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
