import { useAppSelector } from 'shared/lib/hooks/redux'

const CartPage = () => {
	const cart = useAppSelector(store => store.cartState.cart)

	console.log(cart)
	return <div>CartPage</div>
}

export default CartPage
