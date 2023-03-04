import { FC } from 'react'
import { IProduct } from '../types'

import photo from '../../../shared/assets/images/test.jpg'

import styles from './ProductCart.module.scss'

const Product: FC<IProduct> = ({ photoUrl, title, category, price }) => {
	return (
		<div className={styles.product}>
			<img
				src={
					photoUrl
						? `${process.env.REACT_APP_SERVER_ENDPOINT}/${photoUrl}`
						: photo
				}
				alt='product-photo'
				className={styles.photo}
			/>
			<h2 className={styles.title}>{title}</h2>
			<h3 className={styles.category}>{category.name}</h3>
			<h2 className={styles.price}>${price}</h2>
		</div>
	)
}

export { Product }
