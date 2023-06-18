import { FC, PropsWithChildren, useEffect } from 'react'
import { useLazyInitAuthDataQuery } from 'entities/auth'
import { Loader } from 'shared/ui/loader'

export const InitAuth: FC<PropsWithChildren> = ({ children }) => {
	const [initAuth, { isLoading }] = useLazyInitAuthDataQuery()

	useEffect(() => {
		if (localStorage.getItem('AccessToken')) {
			initAuth()
		}
	}, [initAuth])

	if (isLoading) {
		return <Loader fullScreen />
	}

	return <>{children}</>
}
