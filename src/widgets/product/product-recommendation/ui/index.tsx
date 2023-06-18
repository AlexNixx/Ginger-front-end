import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { ProductCard, useGetProductsQuery } from 'entities/product'

import { MyCarousel } from 'shared/ui/carousel'

import { useMatchMedia } from 'shared/lib/hooks/useMatchMedia'
import { RoutesEnum } from 'shared/const/appRoute'

import styles from './ProductRecommendation.module.scss'

interface Filter {
	[key: string]: string[] | number
}

interface ProductRecommendationProps {
	title: string
	filter: Filter
}

export const ProductRecommendation: FC<ProductRecommendationProps> = memo(
	({ title, filter }) => {
		const { data: products, isLoading } = useGetProductsQuery(filter)
		const { isDesktop } = useMatchMedia()

		if (!products) return <p>no data</p>

		if (isLoading) return <p>Loading...</p>

		return (
			<div className={styles.container}>
				<h1 className={styles.title}>{title}</h1>
				<MyCarousel isDesktop={isDesktop}>
					{products?.products.map(product => (
						<Link
							to={`${RoutesEnum.Product}/${product._id}`}
							key={product._id}
							className={styles.item}
						>
							<ProductCard
								photoUrl={product.photoUrl}
								title={product.title}
								category={product.category.name}
								price={product.price}
							/>
						</Link>
					))}
				</MyCarousel>
			</div>
		)
	}
)
