import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#3b82f6', // blue-500
        secondary: '#6366f1', // indigo-500
        accent: '#f97316', // orange-500
        muted: '#9ca3af', // gray-400
      },
    },
  },
  plugins: [],
}
export default config
