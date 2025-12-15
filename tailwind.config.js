/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0a0f1f',
        ink: '#0f172a',
        accent: '#61d2ff',
        gold: '#f6c177',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 25px 65px -25px rgba(97, 210, 255, 0.35)',
        card: '0 20px 60px -28px rgba(15, 23, 42, 0.65)',
      },
    },
  },
  plugins: [],
}
