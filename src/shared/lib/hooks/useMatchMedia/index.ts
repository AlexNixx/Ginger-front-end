import { useState, useLayoutEffect } from 'react'

const queries = [
	'(max-width: 425px)',
	'(min-width: 426px) and (max-width: 1023px)',
	'(min-width: 1024px)'
]

type MediaQueryListStatus = {
	isMobile: boolean
	isTablet: boolean
	isDesktop: boolean
}

export const useMatchMedia = (): MediaQueryListStatus => {
	const mediaQueryLists = queries.map(query => matchMedia(query))

	const getValues = () => mediaQueryLists.map(mql => mql.matches)

	const [values, setValues] = useState(getValues)

	useLayoutEffect(() => {
		const handler = () => setValues(getValues)

		mediaQueryLists.forEach(mql => mql.addEventListener('change', handler))

		return () =>
			mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler))
	}, [])

	return ['isMobile', 'isTablet', 'isDesktop'].reduce(
		(acc, screen, index) => ({
			...acc,
			[screen]: values[index]
		}),
		{} as MediaQueryListStatus
	)
}
