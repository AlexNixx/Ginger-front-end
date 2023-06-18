import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Head } from 'shared/ui/helmet'

import { UpdateUserAddress } from 'feature/user/update-user-address'
import { UpdateUserPassword } from 'feature/user/update-user-password'
import { Logout } from 'feature/auth/logout'

import { useGetMyOrdersQuery } from 'entities/order'
import { OrderCardList } from 'entities/order'

import { OrderEmpty } from './order-empty'

import { RoutesEnum } from 'shared/const/appRoute'
import { Skeleton } from 'shared/ui/skeleton'

import styles from './ProfilePage.module.scss'

const ProfilePage = () => {
	const { data: orders, isLoading: isOrdersLoading } = useGetMyOrdersQuery()

	const navigate = useNavigate()

	const navigateCatalogHandler = useCallback(() => {
		navigate(RoutesEnum.Catalog)
	}, [])

	return (
		<>
			<Head title={'User Profile'} />

			<div className={styles.page}>
				<aside className={styles.aside}>
					<div className={styles.container}>
						<h2>Update Password</h2>
						<UpdateUserPassword />
					</div>
					<div className={styles.container}>
						<h2>Update your address</h2>
						<UpdateUserAddress />
					</div>

					<Logout />
				</aside>
				<section className={styles.section}>
					<div className={styles.container}>
						<h2>Your Orders:</h2>
						{isOrdersLoading && (
							<div className={styles.column}>
								{[...new Array(5)].map((_, index) => (
									<Skeleton key={index} height={200} width={'100%'} />
								))}
							</div>
						)}
						{orders ? (
							<OrderCardList orders={orders} />
						) : (
							<OrderEmpty navigateCatalogHandler={navigateCatalogHandler} />
						)}
					</div>
				</section>
			</div>
		</>
	)
}

export default ProfilePage
