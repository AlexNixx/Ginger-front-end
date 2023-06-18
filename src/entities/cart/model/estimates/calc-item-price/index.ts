import { CartProduct } from '../../types'

export const calcItemPrice = (cart: CartProduct[]) => {
	return cart.reduce((sum, obj) => obj.product.price * obj.quantity + sum, 0)
}
