import { useEffect } from 'react'

import { useLogoutMutation } from '../../api/authApi'

import { toast } from 'react-hot-toast'

import styles from './Logout.module.scss'

const Logout = () => {
	const [logout, { isLoading, isSuccess, error, isError }] = useLogoutMutation()

	useEffect(() => {
		if (isSuccess) {
			toast.success('Logout success')
		}
		if (isError) {
			toast.error((error as any).data.message)
		}
	}, [isLoading, isSuccess, isError, error])

	return (
		<button className={styles.logout} onClick={() => logout()}>
			Logout
		</button>
	)
}

export { Logout }
