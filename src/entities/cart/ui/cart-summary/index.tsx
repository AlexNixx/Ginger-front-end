import { FC, memo } from 'react'

import { Button } from 'shared/ui/button'

import styles from './CartSummary.module.scss'

export interface CartSummaryProps {
	itemsPrice: number
	totalQty: number
	taxPrice: number
	totalPrice: number
	navigateCheckoutHandler: () => void
}

export const CartSummary: FC<CartSummaryProps> = memo(
	({ itemsPrice, taxPrice, totalPrice, totalQty, navigateCheckoutHandler }) => {
		return (
			<div className={styles.container}>
				<h3>
					Items: <span>${itemsPrice}</span>
				</h3>

				<h3>
					Total quantity: <span>{totalQty} items</span>
				</h3>

				<h3>
					Tax: <span>${taxPrice}</span>
				</h3>

				<h3>
					Total: <span>${totalPrice}</span>
				</h3>

				<div className={styles.buttonContainer}>
					<Button primary onClick={navigateCheckoutHandler}>
						Pressed to Checkout
					</Button>
				</div>
			</div>
		)
	}
)
