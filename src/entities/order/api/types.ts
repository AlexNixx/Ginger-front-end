import { ShippingAddress } from 'entities/user'

export type CreateOrderFormValue = {
	customerData: CustomerData
	address: ShippingAddress
	paymentMethod: string
}

export interface OrderItem {
	image: string
	price: number
	product?: string
	qty: number
	title: string
	_id?: string
}

export interface CustomerData {
	name: string
	surname: string
	email: string
}

export interface Order {
	createdAt: string
	customerData: CustomerData
	inDelivery?: boolean
	isDelivered: boolean
	deliveredAt?: string
	isPaid: boolean
	paidAt?: string
	itemsPrice: number
	orderItems: OrderItem[]
	paymentMethod: string
	shippingAddress: ShippingAddress
	shippingPrice: number
	taxPrice: number
	totalPrice: number
	updatedAt: string
	user: string
	_id: string
}
