import { FC, memo } from 'react'

import { OrderProductList } from '../order-product-list'

import { FiPackage } from 'react-icons/fi'

import { BsHouse, BsTruck } from 'react-icons/bs'

import { formatDate } from 'shared/lib/utils/formatDate'

import { Order } from '../../api/types'

import styles from './OrderCardItem.module.scss'

export const OrderCardItem: FC<Order> = memo(
	({
		orderItems,
		inDelivery,
		isDelivered,
		isPaid,
		totalPrice,
		createdAt,
		_id: orderID
	}) => {
		return (
			<div className={styles.orderItem}>
				<div className={styles.header}>
					<h3 className={styles.createdAt}>
						<span>The order was created: </span>
						{formatDate(createdAt)}
					</h3>
					<h3 className={styles.orderNumber}>
						<span>Order number: </span>
						{orderID}
					</h3>
				</div>

				<OrderProductList orderItems={orderItems} />

				<div className={styles.footer}>
					<div className={styles.deliveredState}>
						{!isDelivered && !isPaid ? (
							<>
								<h4 className={styles.deliveredTitle}>
									<span>Order Status: </span>In the process of waiting for
									payment
								</h4>
								<FiPackage />
							</>
						) : null}
						{inDelivery ? (
							<>
								<h4 className={styles.deliveredTitle}>
									<span>Order Status: </span>In Delivery
								</h4>
								<BsTruck />
							</>
						) : null}
						{isDelivered ? (
							<>
								<h4 className={styles.deliveredTitle}>
									<span>Order Status: </span>Is Delivered
								</h4>
								<BsHouse />
							</>
						) : null}
					</div>
					<h3 className={styles.totalPrice}>
						<span>Total:</span> ${totalPrice}
					</h3>
				</div>
			</div>
		)
	}
)
