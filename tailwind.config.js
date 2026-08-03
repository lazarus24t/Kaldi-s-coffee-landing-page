/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — Kaldis Coffee
        prussian: '#003349', // primary
        astronaut: '#004562', // secondary
        tea: '#C3BCB1', // neutral
        cream: '#F7F2EA', // warm page background
        sand: '#EFE6D8',
        espresso: {
          950: '#120B07',
          900: '#1B110A',
          800: '#27180E',
          700: '#382214',
          600: '#4F3019',
          500: '#6B4527',
          400: '#8C5E38',
          300: '#B08762',
          200: '#D2B495',
          100: '#E9D9C3',
          50: '#F5ECDD',
        },
        gold: {
          700: '#8A6B16',
          600: '#A5821B',
          500: '#C9A227',
          400: '#D9B64A',
          300: '#E6CD77',
          100: '#F6EBC9',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        accent: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        ethiopic: ['"Noto Serif Ethiopic"', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(18, 11, 7, 0.25)',
        lift: '0 30px 80px -24px rgba(18, 11, 7, 0.45)',
        gold: '0 12px 40px -10px rgba(201, 162, 39, 0.55)',
        glow: '0 0 60px -10px rgba(201, 162, 39, 0.45)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(180deg, rgba(18,11,7,0.55) 0%, rgba(18,11,7,0.25) 40%, rgba(18,11,7,0.92) 100%)',
        'mesh-dark':
          'radial-gradient(60% 50% at 20% 10%, rgba(0,69,98,0.55) 0%, transparent 60%), radial-gradient(50% 40% at 85% 25%, rgba(201,162,39,0.22) 0%, transparent 60%), radial-gradient(70% 60% at 50% 110%, rgba(0,51,73,0.6) 0%, transparent 65%)',
        'mesh-light':
          'radial-gradient(55% 45% at 15% 0%, rgba(195,188,177,0.5) 0%, transparent 60%), radial-gradient(45% 40% at 90% 15%, rgba(201,162,39,0.18) 0%, transparent 60%)',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translateY(0)' },
          '100%': { transform: 'scale(1.14) translateY(-1.5%)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0' },
          '15%': { opacity: '0.7' },
          '100%': { transform: 'translateY(-130px) translateX(12px) scale(1.6)', opacity: '0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        kenburns: 'kenburns 24s ease-in-out infinite alternate',
        steam: 'steam 5s ease-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
};
