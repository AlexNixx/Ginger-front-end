import styles from './AuthAnimation.module.scss'

export const AuthAnimation = () => {
	return (
		<div className={styles.container}>
			<span className={styles.letterG}>g</span>
			<span className={styles.letterI}>i</span>
			<span className={styles.letterN}>n</span>
			<span className={styles.letterG2nd}>g</span>
			<span className={styles.ball} />
			<span className={styles.letterE}>e</span>
			<span className={styles.letterR}>r</span>
		</div>
	)
}
