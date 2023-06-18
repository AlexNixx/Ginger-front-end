import { FC, PropsWithChildren, useEffect } from 'react'
import { useTheme } from 'shared/lib/hooks/useTheme'

export const InitTheme: FC<PropsWithChildren> = ({ children }) => {
	const { theme } = useTheme()

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [])

	return <>{children}</>
}
