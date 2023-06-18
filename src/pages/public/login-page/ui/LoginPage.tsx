import { Login } from 'feature/auth/login'
import { Head } from 'shared/ui/helmet'

import { Link } from 'react-router-dom'
import { RoutesEnum } from 'shared/const/appRoute'
import { AuthAnimation } from 'shared/ui/auth-animation'
import { useMatchMedia } from 'shared/lib/hooks/useMatchMedia'

import styles from './LoginPage.module.scss'

const LoginPage = () => {
	const { isDesktop } = useMatchMedia()

	return (
		<>
			<Head title={'Login Page'} />

			<div className={styles.page}>
				{!isDesktop ? (
					<div className={styles.container}>
						<h1 className={styles.title}>Hi, Welcome back!</h1>

						<Login />

						<div className={styles.description}>
							<h3>Don't have an account?</h3>
							<Link to={RoutesEnum.Registration}>Sign up for free</Link>
						</div>
					</div>
				) : (
					<div className={styles.desktopContainer}>
						<div className={styles.content}>
							<h1 className={styles.title}>Hi, Welcome back!</h1>
							<Login />
							<div className={styles.description}>
								<h3>Don't have an account?</h3>
								<Link to={RoutesEnum.Registration}>Sign up for free</Link>
							</div>
						</div>
						<AuthAnimation />
					</div>
				)}
			</div>
		</>
	)
}

export default LoginPage
