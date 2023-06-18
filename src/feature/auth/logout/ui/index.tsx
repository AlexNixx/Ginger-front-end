import { useEffect } from 'react'

import { useLogoutMutation } from 'entities/auth'

import { toast } from 'react-hot-toast'

import { useNavigate } from 'react-router-dom'
import { RoutesEnum } from 'shared/const/appRoute'
import { BiLogOut } from 'react-icons/bi'
import { Button } from 'shared/ui/button'

export const Logout = () => {
	const [logout, { isLoading, isSuccess, error, isError }] = useLogoutMutation()
	const navigate = useNavigate()

	useEffect(() => {
		if (isSuccess) {
			toast.success('Logout success')
			navigate(RoutesEnum.Home)
			navigate(0)
		}
		if (isError) {
			toast.error((error as any).data.message)
		}
	}, [isLoading, isSuccess, isError, error])

	const handleLogout = () => {
		logout()
	}

	return (
		<Button onClick={handleLogout}>
			<BiLogOut />
			Logout
		</Button>
	)
}
