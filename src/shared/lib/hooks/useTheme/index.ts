import { useState, useLayoutEffect } from 'react'

const preferDarkSchema =
	window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = preferDarkSchema ? 'dark' : 'light'

function useTheme() {
	const [theme, setTheme] = useState(
		localStorage.getItem('theme') || defaultTheme
	)

	useLayoutEffect(() => {
		document.body.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return { theme, toggleTheme }
}

export { useTheme }
