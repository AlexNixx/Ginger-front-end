import { useEffect } from 'react'
import { useLazyAuthUserQuery } from 'feature/auth'
import { Loader } from 'shared/ui/loader'

interface IAuthProvider {
	children: React.ReactElement
}

export const WithAuth = ({ children }: IAuthProvider) => {
	const [authUser, { isLoading }] = useLazyAuthUserQuery()

	useEffect(() => {
		if (localStorage.getItem('AccessToken')) {
			authUser()
		}
	}, [authUser])

	if (isLoading) {
		return <Loader />
	}

	return children
}
