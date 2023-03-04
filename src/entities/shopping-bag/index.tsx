import { useAppSelector } from 'shared/lib/hooks/redux'
import { Link } from 'react-router-dom'
import { HiShoppingBag } from 'react-icons/hi'

import styles from './ShoppingBag.module.scss'
import React, { useState } from 'react'

const ShoppingBag = () => {
	const cartState = useAppSelector(state => state.cartState)

	console.log('totalCount ' + cartState.totalQty)

	return (
		<Link to='/cart' className={styles.shoppingBag}>
			<HiShoppingBag />
			{/* <span>{totalCount}</span> */}
			{cartState.totalQty > 0 && (
				<span className={styles.cartQty}>{cartState.totalQty}</span>
			)}
		</Link>
	)
}

export { ShoppingBag }
