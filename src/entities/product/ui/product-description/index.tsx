import { FC, memo } from 'react'

import { StarRating } from 'shared/ui/star-rating'

import { Product } from '../../api/types'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

import styles from './ProductDescription.module.scss'

interface ProductDescriptionProps {
	product: Product
	AddToCart: React.ReactNode
}

export const ProductDescription: FC<ProductDescriptionProps> = memo(
	({ product, AddToCart }) => {
		return (
			<div className={styles.ProductDescription}>
				<div className={styles.photoContainer}>
					<LazyLoadImage
						src={`${process.env.REACT_APP_SERVER_ENDPOINT}/${product.photoUrl}`}
						alt={product.title}
						effect='opacity'
						className={styles.photo}
					/>
				</div>

				<div className={styles.info}>
					<div className={styles.description}>
						<h1 className={styles.title}>{product.title}</h1>
						<div className={styles.rating}>
							<StarRating value={product.rating} key={product.rating} />
							<h4 className={styles.ratingNumber}>
								{product?.nubReviews} reviews
							</h4>
						</div>
						<div className={styles.color_info}>
							<h4 className={styles.subtitle}>Color:</h4>
							<span
								className={styles.color}
								style={{ backgroundColor: `${product.color.rgb}` }}
							></span>
						</div>
						<h4 className={styles.category}>
							<span>Category: </span>
							{product.category.name}
						</h4>
						<h4 className={styles.brand}>
							<span>Brand: </span>
							{product.brand.name}
						</h4>
					</div>
					<div className={styles.action}>
						<h1 className={styles.price}>
							Price: <span>{product.price}$</span>
						</h1>
						<h4 className={styles.available}>
							<span>Available: </span>
							{product.inStock ? 'In stock' : 'Out of stock'}
						</h4>
						{AddToCart}
					</div>
				</div>
			</div>
		)
	}
)
