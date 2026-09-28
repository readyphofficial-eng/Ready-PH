/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 400: '#fb923c', 500: '#f97316', 600: '#ea580c' },
        'candy-pink': '#ff6b9d',
        'candy-purple': '#a66cdd',
        'candy-blue': '#4d96ff',
        'candy-green': '#6bcb77',
        'candy-yellow': '#ffd93d',
        'candy-mint': '#4ecdc4',
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
      },
      animation: {
        pop: 'pop 0.3s ease-out',
        'bounce-in': 'bounceIn 0.5s ease-out',
        float: 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        pop: { '0%': { transform: 'scale(0.8)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' } },
        bounceIn: { '0%': { transform: 'scale(0.3)', opacity: '0' }, '50%': { transform: 'scale(1.05)' }, '100%': { transform: 'scale(1)', opacity: '1' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
    },
  },
  plugins: [],
};
