
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		fontFamily: {
			sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#0A66C2',
					foreground: '#fff'
				},
				accent: {
					DEFAULT: '#12C18D',
					foreground: '#fff'
				},
				background: '#F9FAFB',
				guidecard: '#fff'
			},
			borderRadius: {
				lg: '1rem',
				md: '0.5rem',
				sm: '0.25rem'
			},
			boxShadow: {
				card: '0 4px 24px 0 rgba(50,60,70,0.07)'
			},
			fontWeight: {
				extrabold: 900
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(16px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.5s cubic-bezier(.51,.92,.24,1.15)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
