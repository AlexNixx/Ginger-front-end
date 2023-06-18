import { Link } from 'react-router-dom'

import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

import { SearchSlugTag, setPage, getFilters } from 'entities/filter'

import { useGetProductsQuery, ProductCard } from 'entities/product'

import { RoutesEnum } from 'shared/const/appRoute'
import { Pagination } from 'shared/ui/pagination'

import { ProductsNotFound } from './products-not-found'
import { Skeleton } from 'shared/ui/skeleton'

import { AnimatePresence } from 'framer-motion'

import styles from './ProductGrid.module.scss'

export const ProductGrid = () => {
	const dispatch = useAppDispatch()
	const filters = useAppSelector(getFilters)

	const { data: products, isLoading, isFetching } = useGetProductsQuery(filters)

	const isProductsLoading = isLoading || isFetching

	const handlePagination = (pageNumber: number) => {
		dispatch(setPage(pageNumber))

		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}

	if (!products) return null

	return (
		<div className={styles.container}>
			{filters.slug ? <SearchSlugTag slug={filters.slug} /> : null}

			{products.totalProducts < 1 && !isProductsLoading && (
				<AnimatePresence>
					<ProductsNotFound />
				</AnimatePresence>
			)}

			<div className={styles.productGrid}>
				{isProductsLoading &&
					[...new Array(12)].map((_, index) => (
						<Skeleton key={index} width={210} height={308} />
					))}

				{products?.products.map(product => (
					<Link to={`${RoutesEnum.Product}/${product._id}`} key={product._id}>
						<ProductCard
							photoUrl={product.photoUrl}
							title={product.title}
							category={product.category.name}
							price={product.price}
						/>
					</Link>
				))}
			</div>

			{products.totalPages > 1 && (
				<Pagination
					page={+products.currentPage}
					totalPages={products.totalPages}
					handlePagination={handlePagination}
				/>
			)}
		</div>
	)
}
