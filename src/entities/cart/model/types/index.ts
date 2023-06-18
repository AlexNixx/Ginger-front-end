import { Product } from 'entities/product'

export interface CartProduct {
	_id: string
	quantity: number
	product: Product
}

export interface CartSchema {
	cart: CartProduct[]
	itemsPrice: number
	shippingPrice: number
	taxPrice: number
	totalPrice: number
	totalQty: number
}
