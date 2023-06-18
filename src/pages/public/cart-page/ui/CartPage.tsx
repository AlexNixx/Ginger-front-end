import { memo, useCallback, useMemo } from 'react'

import { Head } from 'shared/ui/helmet'

import { CartList } from 'widgets/cart/cart-list'
import { CartSummary, getCart } from 'entities/cart'
import { CartEmpty } from './cart-empty'

import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'

import { RoutesEnum } from 'shared/const/appRoute'

import { AnimatePresence } from 'framer-motion'

import styles from './CartPage.module.scss'

const CartPage = () => {
	const cart = useAppSelector(getCart)

	let isCartEmpty = cart.totalQty < 1

	const navigate = useNavigate()

	const navigateCheckoutHandler = useCallback(() => {
		navigate(RoutesEnum.Checkout)
	}, [])

	const navigateCatalogHandler = useCallback(() => {
		navigate(RoutesEnum.Catalog)
	}, [])

	return (
		<>
			<Head title={'Cart Page'} />

			<div className={styles.page}>
				{isCartEmpty ? (
					<CartEmpty navigateCatalogHandler={navigateCatalogHandler} />
				) : (
					<div className={styles.container}>
						<CartList />

						<CartSummary
							{...cart}
							navigateCheckoutHandler={navigateCheckoutHandler}
						/>
					</div>
				)}
			</div>
		</>
	)
}

export default CartPage
