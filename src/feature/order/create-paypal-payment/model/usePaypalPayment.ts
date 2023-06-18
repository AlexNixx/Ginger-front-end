import { useUpdateOrderToPaidMutation } from 'entities/order/api/orderApi'

interface PayPalPaymentProps {
	totalPrice: number
	orderId: string
}

export const usePaypalPayment = ({
	totalPrice,
	orderId
}: PayPalPaymentProps) => {
	const [updateOrderToPaid] = useUpdateOrderToPaidMutation()

	const createPayPalOrder = (data: any, actions: any) => {
		return actions.order.create({
			purchase_units: [
				{
					amount: {
						currency_code: 'USD',
						value: totalPrice
					}
				}
			],
			application_context: {
				shipping_preference: 'NO_SHIPPING'
			}
		})
	}

	const onApprove = async (data: any, actions: any) => {
		try {
			const details = await actions.order.capture()
			const updatedData = {
				id: details.id,
				status: details.status,
				update_time: details.update_time,
				payer: details.payer
			}
			await updateOrderToPaid({ id: orderId, data: updatedData }).unwrap()
		} catch (error) {
			console.error(error)
		}
	}

	return { createPayPalOrder, onApprove }
}
