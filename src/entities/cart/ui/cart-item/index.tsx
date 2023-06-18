import { FC, memo } from 'react'
import { useMatchMedia } from 'shared/lib/hooks/useMatchMedia'
import { CartProduct } from 'entities/cart'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

import styles from './CartItem.module.scss'

interface CartItemProps {
	cartProduct: CartProduct
	Increment: React.ReactNode
	Decrement: React.ReactNode
	RemoveFromCart: React.ReactNode
}

export const CartItem: FC<CartItemProps> = memo(
	({ cartProduct, Increment, Decrement, RemoveFromCart }) => {
		const { isDesktop } = useMatchMedia()

		return (
			<div className={styles.cartItem}>
				<div className={styles.itemDescription}>
					<div className={styles.photoContainer}>
						<LazyLoadImage
							src={`${process.env.REACT_APP_SERVER_ENDPOINT}/${cartProduct.product.photoUrl}`}
							alt='product'
							effect='opacity'
							className={styles.photo}
						/>
					</div>
					<div className={styles.dataContainer}>
						<div className={styles.itemData}>
							<h3
								className={styles.title}
							>{`${cartProduct.product.brand.name} ${cartProduct.product.title}`}</h3>
							<h4 className={styles.color}>
								Color: {cartProduct.product.color.name}
							</h4>
						</div>
						{!isDesktop && RemoveFromCart}
					</div>
				</div>
				<div className={styles.footer}>
					<div className={styles.itemAction}>
						{Decrement}
						<span>{cartProduct.quantity}</span>
						{Increment}
					</div>

					<h2 className={styles.totalPrice}>
						$ {cartProduct.product.price * cartProduct.quantity}
					</h2>
					{isDesktop && <div className={styles.remove}>{RemoveFromCart}</div>}
				</div>
			</div>
		)
	}
)
