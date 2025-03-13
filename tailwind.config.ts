
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
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				pixel: ['Press Start 2P', 'system-ui', 'sans-serif'],
				pixelify: ['Pixelify Sans', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				game: {
					'dark-blue': '#1E88E5',
					'blue': '#2196F3',
					'light-blue': '#81D4FA',
					'green': '#4CAF50',
					'red': '#F44336',
					'yellow': '#FFEB3B',
					'gold': '#FDD835',
					'brown': '#8B4513',
					'mushroom-red': '#FF5252',
					'sky': '#03A9F4',
					'mario-red': '#E53935',
					'brick': '#D84315',
					'question': '#FFD700',
					'grass': '#66BB6A',
					'cloud': '#FFFFFF',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'pixel-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'12.5%': { transform: 'rotate(45deg)' },
					'25%': { transform: 'rotate(90deg)' },
					'37.5%': { transform: 'rotate(135deg)' },
					'50%': { transform: 'rotate(180deg)' },
					'62.5%': { transform: 'rotate(225deg)' },
					'75%': { transform: 'rotate(270deg)' },
					'87.5%': { transform: 'rotate(315deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'pixel-fade-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'50%': { opacity: '0.5', transform: 'scale(0.97)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'coin-flip': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(180deg)' }
				},
				'question-block': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'blink': 'blink 1s steps(1) infinite',
				'float': 'float 3s ease-in-out infinite',
				'pulse': 'pulse 2s ease-in-out infinite',
				'pixel-spin': 'pixel-spin 1s steps(8) infinite',
				'slide-up': 'slide-up 0.5s ease-out',
				'slide-down': 'slide-down 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'pixel-fade-in': 'pixel-fade-in 0.3s ease-out',
				'coin-flip': 'coin-flip 0.6s ease-in-out infinite',
				'question-block': 'question-block 1s ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
