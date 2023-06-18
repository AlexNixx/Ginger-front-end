import { CartProduct } from 'entities/cart'
import { OrderItem } from 'entities/order'

export const mapCartToOrderItems = (
	cartProducts: CartProduct[]
): OrderItem[] => {
	return cartProducts.map(cartProduct => ({
		title: cartProduct.product.title,
		price: cartProduct.product.price,
		image: cartProduct.product.photoUrl,
		qty: cartProduct.quantity,
		product: cartProduct.product._id
	}))
}
