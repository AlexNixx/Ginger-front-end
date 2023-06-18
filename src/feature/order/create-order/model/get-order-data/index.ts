import { mapCartToOrderItems } from '../map-cart-to-order-items'

import { CreateOrderFormValue } from 'entities/order'
import { CartSchema } from 'entities/cart'

interface GetOrderDataParams {
	orderData: CreateOrderFormValue
	cartState: CartSchema
}

export const getOrderData = ({ orderData, cartState }: GetOrderDataParams) => {
	return {
		customerData: orderData.customerData,
		orderItems: mapCartToOrderItems(cartState.cart),
		shippingAddress: orderData.address,
		paymentMethod: orderData.paymentMethod,
		itemsPrice: cartState.itemsPrice,
		shippingPrice: cartState.shippingPrice,
		taxPrice: cartState.taxPrice,
		totalPrice: cartState.totalPrice
	}
}
