import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'black': '#000000',
        'darkBlue': '#146C94',
        'blue': '#19A7CE',
        'lightGrey': '#F6F1F1',
        'grey': '#1E1E20',
        'dullGrey': '#666666',
      },
    },
  },
  plugins: [],
}
export default config
