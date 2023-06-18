import { Head } from 'shared/ui/helmet'
import { Button } from 'shared/ui/button'
import { useNavigate } from 'react-router-dom'
import { RoutesEnum } from 'shared/const/appRoute'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
	const navigate = useNavigate()

	const handleNavigateHome = () => {
		navigate(RoutesEnum.Home)
	}

	return (
		<>
			<Head title={'404 Not Found'} />

			<div className={styles.page}>
				<h2 className={styles.subtitle}>Ooops! Page Not Found</h2>

				<h1 className={styles.title}>404</h1>
				<p className={styles.description}>
					The page you are looking for may have been moved, deleted, or possibly
					never existed
				</p>
				<Button onClick={handleNavigateHome}>
					<AiOutlineArrowLeft /> Back to Home
				</Button>
			</div>
		</>
	)
}

export default NotFoundPage
