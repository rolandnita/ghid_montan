/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0f1419',
          900: '#1a2332',
          800: '#2a3a52',
          700: '#3a4a62',
          600: '#4a5a72',
          500: '#5a6a82',
          400: '#8a9aaa',
          300: '#aabbbb',
          200: '#cadddd',
          100: '#eef0f2',
          50: '#f8f9fa',
        },
        mountain: {
          dark: '#0f1419',
          stone: '#2a3a52',
          fog: '#3a4a62',
          peak: '#e8e8e8',
        },
        military: {
          green: '#3b5c3c',
          sage: '#6b8e6b',
        },
        accent: {
          warm: '#d97706',
          cool: '#06b6d4',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
      },
      backdropBlur: {
        xs: '2px',
        xl: '40px',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        glow: '0 0 20px rgba(217, 119, 6, 0.3)',
        'glow-lg': '0 0 40px rgba(217, 119, 6, 0.6)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
    },
  },
  plugins: [],
};
