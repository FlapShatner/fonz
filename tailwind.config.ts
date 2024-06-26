import type { Config } from 'tailwindcss'

const config: Config = {
 content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
 theme: {
  extend: {
   colors: {
    'bg-primary': '#0D0E0F',
    'bg-secondary': '#1A1A1A',
    'bg-tertiary': '#222222',
    announce: '#181818',
    accent: '#d2ac53',
    'accent-bright': '#FCC000',
    'accent-tr': '#d2ac5344',
    'btn-bg': '#000',
    'btn-border': '#D9D9D9',
    'txt-primary': '#fff',
    'txt-secondary': '#A6A6A6',
    border: '#D2D2D2',
    divider: '#EAEAEA',
    'img-bg': '#EEEEEE',
    icon: '#898989',
    backdrop: '#1a1a1a75',
    'backdrop-dark': '#1a1a1ad3',
   },
   height: {
    app: 'var(--app-height)',
    main: 'var(--main-sect-height)',
   },
  },
 },
 plugins: [],
}
export default config
