import { CartItem, getCartProducts } from 'entities/cart'

import { Increment } from 'feature/cart/increment-qty'
import { Decrement } from 'feature/cart/decrement-qty'
import { RemoveFromCart } from 'feature/cart/remove-from-cart'

import { useAppSelector } from 'shared/lib/hooks/useAppSelector'

import styles from './CartList.module.scss'

import { motion, AnimatePresence } from 'framer-motion'

export const CartList = () => {
	const cartProducts = useAppSelector(getCartProducts)

	const CartItemAnimation = {
		hidden: {
			x: -100,
			opacity: 0
		},
		visible: (custom: number) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.3 }
		})
	}

	return (
		<div className={styles.list}>
			<AnimatePresence>
				{cartProducts.map((cartProduct, index) => (
					<motion.div
						key={cartProduct._id}
						variants={CartItemAnimation}
						custom={index}
						viewport={{ amount: 0.2, once: true }}
						initial='hidden'
						whileInView='visible'
						exit='hidden'
					>
						<CartItem
							cartProduct={cartProduct}
							Increment={<Increment ProductId={cartProduct._id} />}
							Decrement={<Decrement ProductId={cartProduct._id} />}
							RemoveFromCart={<RemoveFromCart ProductId={cartProduct._id} />}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}
