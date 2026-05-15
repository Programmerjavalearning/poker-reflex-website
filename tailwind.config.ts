import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d1117',
        surface: '#161c25',
        green: '#4ade80',
        red: '#ef4444',
        text: '#f0f0f0',
        textSecondary: '#c9d1d9',
        gold: '#fbbf24',
        border: '#30363d',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-space-grotesk)'],
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(74, 222, 128, 0.5)',
        'glow-green-lg': '0 0 40px rgba(74, 222, 128, 0.6)',
      },
    },
  },
  plugins: [],
}

export default config
