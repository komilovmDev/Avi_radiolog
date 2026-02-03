import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        "content": "1280px",
        "content-narrow": "960px",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "rgb(var(--border) / 1)",
        background: "rgb(var(--background) / 1)",
        foreground: "rgb(var(--foreground) / 1)",
        primary: {
          DEFAULT: "rgb(var(--primary) / 1)",
          foreground: "rgb(var(--primary-foreground) / 1)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / 1)",
          foreground: "rgb(var(--muted-foreground) / 1)",
        },
        ring: "rgb(var(--ring) / 1)",
        medical: {
          white: '#F8FAFC',
          blue: '#0284C7',
          'blue-dark': '#0369A1',
          'blue-light': '#38BDF8',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-lg': '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medical': '0 4px 20px rgba(2, 132, 199, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
