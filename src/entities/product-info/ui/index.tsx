import styles from './ProductInfo.module.scss'

import photo from 'shared/assets/images/test.jpg'

export interface IProduct {
	brand: { _id: number; name: string }
	category: { _id: number; name: string }
	color?: { _id: number; name: string; rgb: string }
	inStock: boolean
	title: string
	photoUrl: string
	price: number
	_id: number
}

interface IProductInfo {
	AddToCart: React.ReactNode
	StarRating: React.ReactNode
	product: IProduct | undefined
}

const ProductInfo = ({ AddToCart, StarRating, product }: IProductInfo) => {
	return (
		<section className={styles.productInfo}>
			<div className={styles.photoContainer}>
				<img
					src={
						product?.photoUrl
							? `${process.env.REACT_APP_SERVER_ENDPOINT}/${product?.photoUrl}`
							: photo
					}
					alt={product?.title}
					className={styles.photo}
				/>
			</div>

			<div className={styles.info}>
				<h1 className={styles.title}>
					{product?.brand.name} {product?.title}
				</h1>
				<div className={styles.rating}>
					{StarRating}
					<h4 className={styles.ratingNumber}>135 review</h4>
				</div>
				<div className={styles.color_info}>
					<h3 className={styles.subtitle}>Color:</h3>
					{product?.color ? (
						<span
							className={styles.color}
							style={{ backgroundColor: `${product?.color?.rgb}` }}
						></span>
					) : (
						<span
							className={styles.color}
							style={{ backgroundColor: 'red' }}
						></span>
					)}
				</div>
				<div className={styles.action}>
					<h1 className={styles.price}>
						Price: <span>{product?.price}$</span>
					</h1>
					<h4 className={styles.available}>
						<span>Available: </span>
						{product?.inStock ? 'In stock' : 'Out of stock'}
					</h4>
					{AddToCart}
				</div>
			</div>
		</section>
	)
}

export { ProductInfo }
