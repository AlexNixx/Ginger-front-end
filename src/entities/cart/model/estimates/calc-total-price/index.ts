import { CartSchema } from '../../types'

export const calcTotalPrice = (cart: CartSchema) => {
	return cart.itemsPrice + cart.shippingPrice + cart.taxPrice
}
