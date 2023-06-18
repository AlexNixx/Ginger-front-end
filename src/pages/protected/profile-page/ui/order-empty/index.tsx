import { AiOutlineShoppingCart } from 'react-icons/ai'

import { Button } from 'shared/ui/button'
import image from 'shared/assets/images/empty-bag.svg'

import styles from './OrderEmpty.module.scss'
import { FC } from 'react'

interface OrderEmptyProps {
	navigateCatalogHandler: () => void
}

export const OrderEmpty: FC<OrderEmptyProps> = ({ navigateCatalogHandler }) => {
	return (
		<div className={styles.container}>
			<h1>Your order history is currently empty</h1>
			<img src={image} alt='empty-orders' />
			<h3>Let's fix that 🙂</h3>
			<Button primary onClick={navigateCatalogHandler}>
				Start shopping <AiOutlineShoppingCart />
			</Button>
		</div>
	)
}
