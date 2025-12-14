module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7cfc7',
          300: '#a3b0a3',
          400: '#7d8f7d',
          500: '#617261',
          600: '#4d5b4d',
          700: '#3f4a3f',
          800: '#353d35',
          900: '#2d332d',
        },
        cream: {
          50: '#fdfdf8',
          100: '#faf8f0',
          200: '#f5f1e1',
          300: '#ede7cf',
          400: '#e4dab8',
          500: '#d4c5a0',
          600: '#b8a27c',
          700: '#9a8360',
          800: '#7d6a50',
          900: '#675744',
        },
        slate: {
          50: '#f8f9fa',
          100: '#eef0f2',
          200: '#dde1e5',
          300: '#c4cbd2',
          400: '#a1aab3',
          500: '#7e8896',
          600: '#606978',
          700: '#4a5361',
          800: '#3d424d',
          900: '#2f3339',
        },
        terracotta: {
          50: '#fdf6f4',
          100: '#fae9e4',
          200: '#f5d2c8',
          300: '#ecb09d',
          400: '#e18669',
          500: '#d16543',
          600: '#b84e2f',
          700: '#9a3f26',
          800: '#7f3623',
          900: '#6a3021',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}