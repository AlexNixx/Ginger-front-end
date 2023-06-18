import { FC } from 'react'

import { formatDate } from 'shared/lib/utils/formatDate'

import styles from './Details.module.scss'

interface PaymentDetailsProps {
	method: string
	isPaid: boolean
	paidAt?: string
}

export const PaymentDetails: FC<PaymentDetailsProps> = ({
	method,
	isPaid,
	paidAt
}) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Payment Method</h1>
			<p>
				<span>Method: </span>
				{method}
			</p>
			<div className={styles.result}>
				{isPaid ? (
					<p>Paid at {formatDate(paidAt!)}</p>
				) : (
					<p>Your product has not been paid for</p>
				)}
			</div>
		</div>
	)
}
