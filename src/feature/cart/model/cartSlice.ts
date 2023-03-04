import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartState, ICartProduct } from '../lib/types'

const calcTotalPrice = (cart: ICartProduct[]) => {
	return cart.reduce((sum, obj) => obj.product.price * obj.quantity + sum, 0)
}

const initialState: ICartState = {
	cart: [],
	totalQty: 0,
	totalPrice: 0
}

export const cartSlice = createSlice({
	initialState,
	name: 'cartSlice',
	reducers: {
		addToCart: (state: ICartState, action: PayloadAction<any>) => {
			const itemInCart = state.cart.find(
				product => product._id === action.payload._id
			)

			if (itemInCart) {
				itemInCart.quantity++
				// state.totalQty++
				// state.totalPrice = calcTotalPrice(state.cart)
			} else {
				state.cart.push({ ...action.payload })
				// state.totalQty++
				// state.totalPrice = calcTotalPrice(state.cart)
			}
			// return {
			// 	...state,
			// 	totalQty: state.totalQty++,
			// 	totalPrice: calcTotalPrice(state.cart)
			// }
			state.totalQty = state.totalQty + 1
			state.totalPrice = calcTotalPrice(state.cart)
		},
		removeFromCart: (state: ICartState, action: PayloadAction<number>) => {
			const itemInCart = state.cart.find(
				product => product._id === action.payload
			)
			if (itemInCart) {
				const filtered = state.cart.filter(
					product => product._id !== action.payload
				)
				state.cart = filtered
			}
		},
		incrementQuantity: (state: ICartState, action: PayloadAction<number>) => {
			const itemInCart = state.cart.find(
				product => product._id === action.payload
			)
			if (itemInCart) {
				itemInCart.quantity++
			}
		},
		decrementQuantity: (state: ICartState, action: PayloadAction<number>) => {
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
			}
		}
	}
})

export default cartSlice.reducer

export const {
	addToCart,
	removeFromCart,
	decrementQuantity,
	incrementQuantity
} = cartSlice.actions
