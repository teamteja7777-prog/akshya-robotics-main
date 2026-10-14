/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#080E4B',
        secondary: '#FFFFFF',
        accent: '#E3000B',
        highlight: '#FFED00',
        brandRed: '#E3000B',
        brandYellow: '#FFED00',
        brandWhite: '#FFFFFF',
        brandNavy: '#080E4B',
        brandBlack: '#080E4B',
        black: '#080E4B',
      },
      fontFamily: {
        sans: ['var(--font-quicksand)', 'Quicksand', 'Nunito', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
