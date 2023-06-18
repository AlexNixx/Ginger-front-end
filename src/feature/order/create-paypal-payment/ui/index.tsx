import { FC } from 'react'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import { usePaypalPayment } from '../model/usePaypalPayment'
import { ThanksPayment } from './thanks-payment'

interface CreatePaymentProps {
	totalPrice: number
	isPaid: boolean
	orderId: string
}

export const CreatePayPalPayment: FC<CreatePaymentProps> = ({
	totalPrice,
	orderId,
	isPaid
}) => {
	const { createPayPalOrder, onApprove } = usePaypalPayment({
		totalPrice,
		orderId
	})

	if (!process.env.REACT_APP_PAYPAL_CLIENT_ID) return null

	return (
		<PayPalScriptProvider
			options={{
				'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID
			}}
		>
			{isPaid ? (
				<ThanksPayment />
			) : (
				<PayPalButtons
					style={{
						layout: 'vertical',
						color: 'blue',
						shape: 'rect',
						label: 'pay'
					}}
					createOrder={createPayPalOrder}
					onApprove={onApprove}
				/>
			)}
		</PayPalScriptProvider>
	)
}
