import { AiOutlineShoppingCart } from 'react-icons/ai'

import { Button } from 'shared/ui/button'
import image from 'shared/assets/images/empty-bag.svg'

import styles from './CartEmpty.module.scss'
import { FC } from 'react'

import { motion } from 'framer-motion'

interface CartEmptyProps {
	navigateCatalogHandler: () => void
}

export const CartEmpty: FC<CartEmptyProps> = ({ navigateCatalogHandler }) => {
	return (
		<motion.div
			className={styles.emptyCart}
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ duration: 0.3 }}
		>
			<h1>Your shopping cart is empty</h1>
			<motion.img
				src={image}
				alt='empty-bag'
				initial={{ rotate: 50 }}
				animate={{ rotate: 0 }}
				transition={{ duration: 0.3 }}
			/>
			<h3>Let's fix that 🙂</h3>
			<Button primary onClick={navigateCatalogHandler}>
				Start shopping <AiOutlineShoppingCart />
			</Button>
		</motion.div>
	)
}
