export { default as cartSlice } from './model/slice/cartSlice'

export {
	addToCart,
	removeFromCart,
	decrementQuantity,
	incrementQuantity,
	clearCart
} from './model/slice/cartSlice'

export { getCart } from './model/selectors/get-cart'
export { getTotalQty } from './model/selectors/get-total-qty'
export { getCartProducts } from './model/selectors/get-cart-products'

export * from './model/types'

export { CartItem } from './ui/cart-item'
export { CartSummary } from './ui/cart-summary'
