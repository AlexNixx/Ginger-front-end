import { memo } from 'react'
import styles from './LogoAnimated.module.scss'

export const LogoAnimated = memo(() => {
	return (
		<div className={styles.container}>
			<h1>gin</h1>
			<div className={styles.letterContainer}>
				<span className={styles.letter}>g</span>
				<span className={styles.ball} />
			</div>
			<h1>er</h1>
		</div>
	)
})
