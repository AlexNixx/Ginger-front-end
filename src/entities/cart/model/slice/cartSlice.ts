import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { calcItemPrice } from '../estimates/calc-item-price'
import { calcTotalPrice } from '../estimates/calc-total-price'
import { addDecimals } from 'shared/lib/utils/addDecimals'

import { CartProduct, CartSchema } from '../types'

const initialState: CartSchema = {
	cart: [],
	totalQty: 0,
	shippingPrice: 0,
	taxPrice: 0,
	itemsPrice: 0,
	totalPrice: 0
}

export const cartSlice = createSlice({
	initialState,
	name: 'cartSlice',
	reducers: {
		addToCart: (state: CartSchema, action: PayloadAction<CartProduct>) => {
			const itemInCart = state.cart.find(
				product => product._id === action.payload._id
			)

			if (itemInCart) {
				itemInCart.quantity++
			} else {
				state.cart.push({ ...action.payload })
			}

			state.totalQty = state.totalQty + 1
			state.itemsPrice = calcItemPrice(state.cart)
			state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))
			state.totalPrice = calcTotalPrice(state)
		},
		removeFromCart: (state: CartSchema, action: PayloadAction<string>) => {
			const itemInCart = state.cart.find(
				product => product._id === action.payload
			)
			if (itemInCart) {
				const filtered = state.cart.filter(
					product => product._id !== action.payload
				)
				state.cart = filtered
				state.totalQty = state.totalQty - itemInCart.quantity
			}

			state.itemsPrice = calcItemPrice(state.cart)
			state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))
			state.totalPrice = calcTotalPrice(state)
		},
		incrementQuantity: (state: CartSchema, action: PayloadAction<string>) => {
			const itemInCart = state.cart.find(
				product => product._id === action.payload
			)
			if (itemInCart) {
				itemInCart.quantity++
				state.totalQty += 1
			}
			state.itemsPrice = calcItemPrice(state.cart)
			state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))
			state.totalPrice = calcTotalPrice(state)
		},
		decrementQuantity: (state: CartSchema, action: PayloadAction<string>) => {
			const itemInCart = state.cart.find(
				product => product._id === action.payload
			)

			if (itemInCart) {
				if (itemInCart.quantity > 1) {
					itemInCart.quantity--
				} else {
					const filtered = state.cart.filter(
						product => product._id !== action.payload
					)
					state.cart = filtered
				}
				state.totalQty -= 1
			}
			state.itemsPrice = calcItemPrice(state.cart)
			state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))
			state.totalPrice = calcTotalPrice(state)
		},
		clearCart: () => initialState
	}
})

export default cartSlice.reducer

export const {
	addToCart,
	removeFromCart,
	decrementQuantity,
	incrementQuantity,
	clearCart
} = cartSlice.actions
