import { FC } from 'react'

import styles from './OrderSummary.module.scss'

interface OrderSummaryProps {
	itemsPrice: number
	shippingPrice: number
	taxPrice: number
	totalPrice: number
	payment: React.ReactNode
}

const OrderSummary: FC<OrderSummaryProps> = ({
	itemsPrice,
	shippingPrice,
	taxPrice,
	totalPrice,
	payment: Payment
}) => {
	return (
		<div className={styles.orderSummary}>
			<h3>
				Items: <span>${itemsPrice}</span>
			</h3>
			<h3>
				Shipping:
				<span>{shippingPrice !== 0 ? `${shippingPrice}` : 'Free'}</span>
			</h3>
			<h3>
				Tax: <span>${taxPrice}</span>
			</h3>
			<h3>
				Total: <span>${totalPrice}</span>
			</h3>
			<div className={styles.buttonContainer}>{Payment}</div>
		</div>
	)
}

export { OrderSummary }
