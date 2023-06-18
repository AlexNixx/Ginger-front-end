import { FC, memo } from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

import styles from './ProductCard.module.scss'

interface ProductCardProps {
	category: string
	title: string
	photoUrl: string
	price: number
}

export const ProductCard: FC<ProductCardProps> = memo(
	({ photoUrl, title, category, price }) => {
		return (
			<div className={styles.product}>
				<LazyLoadImage
					src={`${process.env.REACT_APP_SERVER_ENDPOINT}/${photoUrl}`}
					alt={`product-${title}`}
					effect='opacity'
					className={styles.photo}
				/>
				<div className={styles.content}>
					<h2 className={styles.title}>{title}</h2>
					<h3 className={styles.category}>{category}</h3>
					<h2 className={styles.price}>${price}</h2>
				</div>
			</div>
		)
	}
)
