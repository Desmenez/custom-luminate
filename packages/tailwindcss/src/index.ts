import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

import { screens } from './screen'

const fileExtensions = `{${['ts', 'tsx', 'js', 'jsx'].join(',')}}`

export * from './screen'

const defaultConfig = {
  darkMode: ['class'],
  content: [
    `./pages/**/*.${fileExtensions}`,
    `./components/**/*.${fileExtensions}`,
    `./app/**/*.${fileExtensions}`,
    `./src/**/*.${fileExtensions}`,
    `./stories/**/*.${fileExtensions}`,
    `../../packages/nextjs/src/**/*.${fileExtensions}`, // TODO: Change this later
    `../../packages/ui/src/**/*.${fileExtensions}`, // TODO: Change this later
    `../../packages/tailwindcss/src/**/*.${fileExtensions}`, // TODO: Change this later
  ],
  theme: {
    screens: screens.data,
    container: {
      screens: {
        sm: screens.data.sm,
        md: screens.data.md,
        lg: screens.data.lg,
        xl: screens.data.xl,
      },
      center: true,
      padding: {
        DEFAULT: '8px',
        md: '32px',
        lg: '40px',
        xl: '80px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
        950: '#0A0A0A',
      },
      yellow: {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B',
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F',
        950: '#451A03',
      },
      blue: {
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A',
        950: '#172554',
      },
      red: {
        50: '#FEF2F2',
        100: '#FFDFDF',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
        950: '#450A0A',
      },
      green: {
        50: '#F0FDF4',
        100: '#DCFCE7',
        200: '#BBF7D0',
        300: '#86EFAC',
        400: '#4ADE80',
        500: '#22C55E',
        600: '#16A34A',
        700: '#15803D',
        800: '#166534',
        900: '#14532D',
        950: '#052E16',
      },
      purple: {
        50: '#F5F3FF',
        100: '#EDE9FE',
        200: '#DDD6FE',
        300: '#C4B5FD',
        400: '#A78BFA',
        500: '#8B5CF6',
        600: '#7C3AED',
        700: '#6D28D9',
        800: '#5B21B6',
        900: '#4C1D95',
        950: '#2E1065',
      },
      cyan: {
        50: '#ECFEFF',
        100: '#CFFAFE',
        200: '#A5F3FC',
        300: '#67E8F9',
        400: '#22D3EE',
        500: '#06B6D4',
        600: '#0891B2',
        700: '#0E7490',
        800: '#155E75',
        900: '#164E63',
        950: '#083344',
      },
    },
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          hover: 'var(--primary-hover)',
          active: 'var(--primary-active)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
          hover: 'var(--secondary-hover)',
          active: 'var(--secondary-active)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
          hover: 'var(--destructive-hover)',
          active: 'var(--destructive-active)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-out',
        'collapsible-up': 'collapsible-up 0.2s ease-out',
      },
      fontFamily: {
        sans: [
          'var(--font-ibm-plex-sans)',
          'var(--font-ibm-plex-sans-thai)',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      spacing: {
        '4.5': '18px',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '150%' }],
        sm: ['0.875rem', { lineHeight: '150%' }],
        base: ['1rem', { lineHeight: '150%' }],
        lgm: ['1.125rem', { lineHeight: '150%' }],
        lg: ['1.25rem', { lineHeight: '150%' }],
        xl: ['1.5rem', { lineHeight: '150%' }],
        '2xl': ['1.75rem', { lineHeight: '150%' }],
        '3xl': ['2rem', { lineHeight: '150%' }],
        '4xl': ['2.5rem', { lineHeight: '150%' }],
        '5xl': ['3rem', { lineHeight: '150%' }],
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss-radix')({
      variantPrefix: 'rdx',
    }),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    plugin(({ addVariant, addUtilities }) => {
      addVariant('stuck', '&[data-stuck="true"]')
      addVariant('not-stuck', '&[data-stuck="false"]')
      addVariant('group-stuck', ':merge(.group)[data-stuck="true"] &')
      addVariant('group-not-stuck', ':merge(.group)[data-stuck="false"] &')
      addUtilities({
        '.h-my-screen': {
          height: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
        },
      })
    }),
  ],
} satisfies Config

export default defaultConfig
