import { useGetOrderByIdQuery } from 'entities/order/api/orderApi'

import { useParams } from 'react-router-dom'

import { CreatePayPalPayment } from 'feature/order/create-paypal-payment'

import styles from './OrderPage.module.scss'
import { Head } from 'shared/ui/helmet'

import { OrderProductList } from 'entities/order/ui/order-product-list'

import { ShippingDetails } from './details/ShippingDetails'
import { PaymentDetails } from './details/PaymentDetails'

import { OrderSummary } from './summary/OrderSummary'

const OrderPage = () => {
	const { id } = useParams<{ id: string }>()

	const { data: order, isLoading } = useGetOrderByIdQuery(id!)

	if (!order) return <p>Order not found</p>

	if (isLoading) return <p>Loading</p>

	return (
		<>
			<Head title={'Order Details'} />

			<div className={styles.page}>
				<section className={styles.details} key={order.paidAt}>
					<ShippingDetails {...order} />
					<PaymentDetails
						method={order.paymentMethod}
						isPaid={order.isPaid}
						paidAt={order.paidAt}
					/>

					<OrderProductList orderItems={order.orderItems} />
				</section>
				<section>
					<OrderSummary
						itemsPrice={order.itemsPrice}
						shippingPrice={order.shippingPrice}
						taxPrice={order.taxPrice}
						totalPrice={order.totalPrice}
						payment={
							<CreatePayPalPayment
								totalPrice={order.totalPrice}
								isPaid={order.isPaid}
								orderId={order._id}
							/>
						}
					/>
				</section>
			</div>
		</>
	)
}

export default OrderPage
