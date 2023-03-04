import { Props } from 'feature/cart/lib/types'
import { incrementQuantity } from 'feature/cart/model/cartSlice'
import { useAppDispatch } from 'shared/lib/hooks/redux'

const Increment = ({ product }: Props) => {
	const dispatch = useAppDispatch()

	const incrementQtyHandler = () => {
		// if (product) {
		// dispatch(incrementQuantity(product._id))
		// }
	}
	return <button onClick={incrementQtyHandler}>Increment</button>
}

export { Increment }
