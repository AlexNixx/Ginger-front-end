import { FC } from 'react'

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button } from 'shared/ui/button'

import { toast } from 'react-hot-toast'

import { addToCart } from 'entities/cart'
import { Product } from 'entities/product'

export interface AddToCartProps {
	product: Product
}

export const AddToCart: FC<AddToCartProps> = ({ product }) => {
	const dispatch = useAppDispatch()

	const AddToCartHandler = () => {
		const cartProduct = {
			_id: product._id,
			quantity: 1,
			product
		}
		dispatch(addToCart(cartProduct))
		toast.success('Product adding to cart')
	}

	return (
		<Button onClick={AddToCartHandler} primary disabled={!product.inStock}>
			Add to Cart
		</Button>
	)
}
