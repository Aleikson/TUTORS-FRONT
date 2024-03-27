import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#624bff",
        secondary: "#F8F9FA",
        txtPrimary: "#334155",
        txtSecondary: "#64748b"
      },
    },
  },
  plugins: [
    flowbitePlugin,
  ]
};

export default config;
