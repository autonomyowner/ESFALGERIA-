/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Tajawal', 'Cairo', 'system-ui', 'sans-serif'],
      },
      colors: {
        premiumGold: {
          300: '#FDE68A',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        premiumSilver: {
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
        },
        premiumBlack: '#0B0F19',
      },
      boxShadow: {
        'glow-gold': '0 0 0 2px rgba(234,179,8,0.3), 0 8px 24px rgba(234,179,8,0.25)',
        'glass': '0 8px 24px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(to bottom right, #0f172a, #eab308, #0f172a)',
        'gradient-silver': 'linear-gradient(to bottom right, #0f172a, #94a3b8, #0f172a)',
        'glass': 'linear-gradient(to bottom right, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
      },
      borderImage: {
        'gradient-gold': 'linear-gradient(135deg, #eab308, rgba(234,179,8,0.25)) 1',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [require('tailwindcss-rtl')],
}

