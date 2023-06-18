import { incrementQuantity } from 'entities/cart'

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button } from 'shared/ui/button'

import { AiOutlinePlus } from 'react-icons/ai'
import { FC, memo } from 'react'

export interface IncrementProps {
	ProductId: string
}

export const Increment: FC<IncrementProps> = memo(({ ProductId }) => {
	const dispatch = useAppDispatch()

	const incrementQtyHandler = () => {
		dispatch(incrementQuantity(ProductId))
	}

	return (
		<Button onClick={incrementQtyHandler}>
			<AiOutlinePlus />
		</Button>
	)
})
