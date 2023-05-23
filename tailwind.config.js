/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	presets: [require('./src/configs/tailwind/index.ts')],
	theme: {
		darkMode: 'media',
		colors: {
			'primary': '#007c94',
			'secondary': '#932a7f',
			'error': '#f44336',
			'success': '#4caf50',
			'warning': '#ff9800',
			'transparent': 'transparent',
			'purple': '#4f0b57',
			'orange': '#ff7849',
			'green': '#13ce66',
			'yellow': '#ffc82c',
			'gray-dark': '#030712',
			'red': '#e91e63',
			'beige': '#efebe2',
			'gray': '#9e9e9e',
			'gray-light': '#f3f4f6',
			'sky-light': '#f0f9ff'
		},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		important: true,
	},
	plugins: [],
}
