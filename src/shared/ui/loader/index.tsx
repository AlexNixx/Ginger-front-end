import { FC } from 'react'
import styles from './Loader.module.scss'

interface LoaderProps {
	fullScreen?: boolean
}

export const Loader: FC<LoaderProps> = ({ fullScreen = false }) => {
	return (
		<div
			className={fullScreen ? `${styles.fullScreen}` : `${styles.container}`}
		>
			<div className={styles.loader}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
