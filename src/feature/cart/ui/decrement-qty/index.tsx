import { Props } from 'feature/cart/lib/types'
import { decrementQuantity } from 'feature/cart/model/cartSlice'
import { useAppDispatch } from 'shared/lib/hooks/redux'

const Decrement = ({ product }: Props) => {
	const dispatch = useAppDispatch()

	const decrementQtyHandler = () => {
		// if (product) {
		// 	dispatch(decrementQuantity(product._id))
		// }
	}

	return <button onClick={decrementQtyHandler}>Decrement</button>
}

export { Decrement }
