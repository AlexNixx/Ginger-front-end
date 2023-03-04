import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useGetProductByIdQuery } from '../api/productApi'

import { ProductCharacteristics } from 'entities/product-characteristics'
import { ProductInfo } from 'entities/product-info'

import { AddToCart } from 'feature/cart'
import { StarRating } from 'entities/star-rating'

import { toast } from 'react-hot-toast'

import styles from './ProductDetails.module.scss'

const ProductDetails = () => {
	const { id } = useParams()
	const { data, isLoading, isError, error } = useGetProductByIdQuery(id!)

	useEffect(() => {
		if (isError) {
			toast.error((error as any).data.message)
		}
	}, [isLoading, error, isError])

	return (
		<div className={styles.wrapper}>
			<ProductInfo
				AddToCart={<AddToCart product={data} />}
				StarRating={<StarRating like={2} canSelect={false} />}
				product={data}
			/>
			<ProductCharacteristics deviceInfo={data?.deviceInfo} />
		</div>
	)
}

export { ProductDetails }
