/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'header-title': ['Rye', 'cursive'],
			},
			colors: {
				black: '#1a1c1a',
				'white': '#f2eecb'
			}
		}
	},
	plugins: []
};
