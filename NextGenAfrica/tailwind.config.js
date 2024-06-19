/** @type {import('tailwindcss').Config} */
export default {
	  content: [
		      "./index.html",
		      "./src/**/*.{js,ts,jsx,tsx}",
		    ],
	  theme: {
		      extend: {
				fontFamily: {
					'sans': ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
					'serif': ['Open Sans', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
					'mono': ['Montserrat', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
					'display': ['Poppins', 'Oswald', 'sans-serif'],
					// Add other font families here
				  },
			  },
		    },
	  plugins: [],
}
