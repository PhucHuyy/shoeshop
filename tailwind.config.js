/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      height: {
        header: "100px",
      },
      keyframes: {
        flame: {
          "0%": { transform: "translateY(-3px)", color: "#FF4500" }, // Đỏ đậm
          "50%": { transform: "translateY(3px)", color: "#FF8C00" }, // Cam rực
          "100%": { transform: "translateY(-3px)", color: "#FFD700" }, // Vàng sáng
        },
        flicker: {
          "0%": { opacity: "1", color: "#FFD700" }, // Vàng sáng
          "25%": { opacity: "0.85", color: "#FF8C00" }, // Cam rực
          "50%": { opacity: "0.9", color: "#FF4500" }, // Đỏ đậm
          "75%": { opacity: "0.8", color: "#FF8C00" }, // Cam rực
          "100%": { opacity: "1", color: "#FFD700" }, // Vàng sáng
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        flame: "flame 0.7s infinite ease-in-out",
        flicker: "flicker 1s infinite ease-in-out",
        gradient: "gradient 3s infinite ease",
      },
      backgroundImage: {
        fire: "linear-gradient(90deg, #ff6b6b, #ff9f43, #ffc107, #ff6b6b)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
