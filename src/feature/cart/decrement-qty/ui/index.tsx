import { FC, memo } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

import { decrementQuantity } from 'entities/cart'
import { Button } from 'shared/ui/button'

import { AiOutlineMinus } from 'react-icons/ai'

export interface DecrementProps {
	ProductId: string
}

export const Decrement: FC<DecrementProps> = memo(({ ProductId }) => {
	const dispatch = useAppDispatch()

	const decrementQtyHandler = () => {
		dispatch(decrementQuantity(ProductId))
	}

	return (
		<Button onClick={decrementQtyHandler}>
			<AiOutlineMinus />
		</Button>
	)
})
