import { FC } from 'react'

import { formatDate } from 'shared/lib/utils/formatDate'

import { CustomerData } from 'entities/order'
import { ShippingAddress } from 'entities/user'

import styles from './Details.module.scss'

interface ShippingDetailsProps {
	customerData: CustomerData
	shippingAddress: ShippingAddress
	isDelivered: boolean
	inDelivery?: boolean
	deliveredAt?: string
	isPaid: boolean
}

export const ShippingDetails: FC<ShippingDetailsProps> = ({
	customerData,
	shippingAddress,
	isDelivered,
	inDelivery,
	deliveredAt,
	isPaid
}) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Shipping</h1>
			<p>
				<span>Name: </span>
				{customerData.name} {customerData.surname}
			</p>
			<p>
				<span>Email: </span> {customerData.email}
			</p>
			<p>
				<span>Address: </span>
				{shippingAddress.address}, {shippingAddress.city},{' '}
				{shippingAddress.postalCode}, {shippingAddress.country}
			</p>
			<div className={styles.result}>
				{isDelivered && <p>Delivered at {formatDate(deliveredAt!)}</p>}

				{inDelivery ? <p>The product is on its way to you</p> : null}
				{!isDelivered && !isPaid ? (
					<p>The product will be shipped after payment</p>
				) : null}
			</div>
		</div>
	)
}
