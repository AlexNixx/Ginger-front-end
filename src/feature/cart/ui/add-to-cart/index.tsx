import { useAppDispatch } from 'shared/lib/hooks/redux'

import { Props } from '../../lib/types'
import { addToCart } from '../../model/cartSlice'

import styles from './AddToCart.module.scss'

const AddToCart = ({ product }: Props) => {
	const dispatch = useAppDispatch()
	// console.log(product)

	const AddToCartHandler = () => {
		if (product) {
			const cartProduct = {
				_id: product._id,
				quantity: 1,
				product: {
					title: product.title,
					price: product.price,
					photoUrl: product.photoUrl
				}
			}
			dispatch(addToCart(cartProduct))
		}
	}

	return (
		<>
			<button
				onClick={AddToCartHandler}
				className={`${styles.button} ${styles.primary}`}
			>
				Buy now
			</button>
			<button className={styles.button}>
				{/* Add to Cart */}
				remove
			</button>
		</>
	)
}

export { AddToCart }
