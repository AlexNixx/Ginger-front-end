import { useEffect, useRef } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

import { ProductRecommendation } from 'widgets/product/product-recommendation'

import {
	ProductCharacteristics,
	ProductDescription,
	useGetProductByIdQuery
} from 'entities/product'

import { Head } from 'shared/ui/helmet'
import { Loader } from 'shared/ui/loader'
import { AddToCart } from 'feature/cart/add-to-cart'
import { CreateReview } from 'feature/review/create-review'
import { ReviewList } from 'widgets/product/product-review-list'

import { RoutesEnum } from 'shared/const/appRoute'

import { ReviewEmpty } from './review-empty'

import styles from './ProductPage.module.scss'

const ProductPage = () => {
	const { id } = useParams<{ id: string }>()

	const navigate = useNavigate()

	const { data: product, isLoading, isError } = useGetProductByIdQuery(id!)

	useEffect(() => {
		if (!isLoading && isError) {
			toast.error('Product not found')
			navigate(RoutesEnum.Catalog)
		}
	}, [])

	if (isLoading) {
		return <Loader fullScreen />
	}

	if (!product) {
		return null
	}

	return (
		<>
			<Head title={product.title} />

			<div className={styles.page}>
				<section className={styles.description}>
					<ProductDescription
						AddToCart={<AddToCart product={product} />}
						product={product}
					/>
				</section>
				<section className={styles.characteristics}>
					<ProductCharacteristics deviceInfo={product?.deviceInfo} />
				</section>
				<section className={styles.review}>
					<div className={styles.reviewBody}>
						<CreateReview productId={product._id} />
						{product.reviews.length ? (
							<ReviewList reviews={product.reviews} productId={product._id} />
						) : (
							<ReviewEmpty />
						)}
					</div>
				</section>
				<section className={styles.recommendation}>
					<ProductRecommendation
						title={'These products are similar to what you are interested'}
						filter={{ categories: [product.category._id] }}
					/>
				</section>
			</div>
		</>
	)
}

export default ProductPage
