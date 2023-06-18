import { Registration } from 'feature/auth/registration'
import { Head } from 'shared/ui/helmet'

import styles from './RegistrationPage.module.scss'
import { Link } from 'react-router-dom'
import { RoutesEnum } from 'shared/const/appRoute'
import { AuthAnimation } from 'shared/ui/auth-animation'
import { useMatchMedia } from 'shared/lib/hooks/useMatchMedia'

const RegistrationPage = () => {
	const { isDesktop } = useMatchMedia()

	return (
		<>
			<Head title={'Registration Page'} />

			<div className={styles.page}>
				{!isDesktop ? (
					<div className={styles.container}>
						<h1 className={styles.title}>Let's get to know each other!</h1>

						<Registration />

						<div className={styles.description}>
							<h3>Already have an account?</h3>
							<Link to={RoutesEnum.Login}>Sign In</Link>
						</div>
					</div>
				) : (
					<div className={styles.desktopContainer}>
						<div className={styles.content}>
							<h1 className={styles.title}>Let's get to know each other!</h1>
							<Registration />
							<div className={styles.description}>
								<h3>Already have an account?</h3>
								<Link to={RoutesEnum.Login}>Sign In</Link>
							</div>
						</div>
						<div className={styles.animationContainer}>
							<AuthAnimation />
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default RegistrationPage
