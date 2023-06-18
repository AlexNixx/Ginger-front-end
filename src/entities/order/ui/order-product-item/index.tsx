import { FC } from 'react'

import { OrderItem } from '../../api/types'

import styles from './OrderProductItem.module.scss'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

export const OrderProductItem: FC<OrderItem> = ({
	image,
	price,
	qty,
	title
}) => {
	return (
		<div className={styles.productItem}>
			<div className={styles.photoContainer}>
				<LazyLoadImage
					src={`${process.env.REACT_APP_SERVER_ENDPOINT}/${image}`}
					alt='product-photo'
					className={styles.photo}
					effect='opacity'
				/>
			</div>

			<h2 className={styles.title}>{title}</h2>

			<h4 className={styles.qty}>
				{qty} {qty > 1 ? 'Items' : 'Item'}
			</h4>

			<h2 className={styles.price}>
				<span>{qty > 1 ? 'Items' : 'Item'} price: </span>${price * qty}
			</h2>
		</div>
	)
}
