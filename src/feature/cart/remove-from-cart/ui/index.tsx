import { removeFromCart } from 'entities/cart'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

import { AiOutlineDelete } from 'react-icons/ai'

import styles from './Remove.module.scss'
import { Button } from 'shared/ui/button'
import { FC, memo } from 'react'

export interface RemoveFromCartProps {
	ProductId: string
}

export const RemoveFromCart: FC<RemoveFromCartProps> = memo(({ ProductId }) => {
	const dispatch = useAppDispatch()

	const removeFromCartHandler = () => {
		dispatch(removeFromCart(ProductId))
	}

	return (
		<Button onClick={removeFromCartHandler} className={styles.button}>
			<AiOutlineDelete />
		</Button>
	)
})
