import icon from 'shared/assets/images/tnx.svg'
import styles from './ProductsNotFound.module.scss'

import { motion, AnimatePresence } from 'framer-motion'

export const ProductsNotFound = () => {
	return (
		<motion.div
			className={styles.container}
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			exit={{ scale: 0 }}
			transition={{ duration: 0.3 }}
		>
			<motion.img
				src={icon}
				alt='not-found'
				className={styles.icon}
				initial={{ rotate: 50 }}
				animate={{ rotate: 0 }}
				exit={{ scale: 50 }}
				transition={{ duration: 0.3 }}
			/>
			<h1 className={styles.title}>
				We're sorry, but we couldn't find the products you're looking for
			</h1>
		</motion.div>
	)
}
