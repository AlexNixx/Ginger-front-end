import img from 'shared/assets/images/review.svg'

import { motion } from 'framer-motion'

import styles from './ReviewEmpty.module.scss'

export const ReviewEmpty = () => {
	return (
		<motion.div
			className={styles.container}
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			transition={{ duration: 0.3 }}
			viewport={{ once: true }}
		>
			<motion.img
				src={img}
				alt='review'
				initial={{ rotate: 50 }}
				whileInView={{ rotate: 0 }}
				transition={{ duration: 0.3 }}
				viewport={{ once: true }}
			/>
			<h4 className={styles.subtitle}>
				Be the first to tell everyone <br />
				about your experience with the product
			</h4>
		</motion.div>
	)
}
