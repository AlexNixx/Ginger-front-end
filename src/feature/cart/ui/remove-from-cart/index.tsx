import { Props } from 'feature/cart/lib/types'
import { removeFromCart } from 'feature/cart/model/cartSlice'
import { useAppDispatch } from 'shared/lib/hooks/redux'

const RemoveFromCart = ({ product }: Props) => {
	const dispatch = useAppDispatch()

	const removeFromCartHandler = () => {
		// if (product) {
		// 	dispatch(removeFromCart(product._id))
		// }
	}

	return <button onClick={removeFromCartHandler}>RemoveFromCart</button>
}

export { RemoveFromCart }
