import image from 'shared/assets/images/tnx.svg'
import styles from './ThanksPayment.module.scss'

const ThanksPayment = () => {
	return (
		<div className={styles.container}>
			<img src={image} alt='thanks' className={styles.image} />
			<h3 className={styles.title}>Your Payment has been done successfully</h3>
			<h4 className={styles.subtitle}>A bill was sent to your email address</h4>
		</div>
	)
}

export { ThanksPayment }
