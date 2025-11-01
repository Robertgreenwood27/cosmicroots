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
        'cosmic-indigo': '#4C1D95',
        'sage-green': '#A3B18A',
        'burnt-orange': '#E76F51',
        'deep-purple': '#5A189A',
      },
    },
  },
  plugins: [],
}
export default config
