import { Link } from 'react-router-dom'
import { useGetProductsQuery } from '../api/productsApi'

import { ProductSkeleton } from 'shared/ui/skeleton'

import { Product } from 'entities/product-cart'

import { IProduct } from '../types'

import styles from './ProductGrid.module.scss'

const ProductGrid = () => {
	const { data, isLoading, isFetching } = useGetProductsQuery()

	return (
		<div className={styles.productGrid}>
			{isLoading
				? [...new Array(12)].map((_, index) => <ProductSkeleton key={index} />)
				: data!!.map((product: IProduct) => (
						<Link to={`product/${product._id}`} key={product._id}>
							<Product {...product} />
						</Link>
				  ))}
		</div>
	)
}

export { ProductGrid }
