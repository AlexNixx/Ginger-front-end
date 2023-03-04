import { useAppSelector } from 'shared/lib/hooks/redux'
import { Link } from 'react-router-dom'
import { HiUser } from 'react-icons/hi'
import { UserIcon } from 'shared/ui/user-icon'

import styles from './Avatar.module.scss'

const Avatar = () => {
	const userData = useAppSelector(state => state.userState.user)

	return (
		<>
			{userData?.email ? (
				<Link to='/user-account'>
					<UserIcon letter={userData?.email.slice(0, 1).toUpperCase()} />
				</Link>
			) : (
				<Link to='/login'>
					<HiUser className={styles.unauthorized_icon} />
				</Link>
			)}
		</>
	)
}

export { Avatar }
