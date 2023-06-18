import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'

import { useCreateOrderMutation, CreateOrderFormValue } from 'entities/order'

import { CreateOrderForm } from '../create-order-form'

import { getUser } from 'entities/user'
import { getCart } from 'entities/cart'

import { PaymentOptions } from '../../model/payment-options'
import { getOrderData } from '../../model/get-order-data'

import { RoutesEnum } from 'shared/const/appRoute'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { clearCart } from 'entities/cart'

export const CreateOrder = () => {
	const user = useAppSelector(getUser)
	const cartState = useAppSelector(getCart)
	const [createOrder] = useCreateOrderMutation()

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	let cartClear = cartState.totalQty < 1

	useEffect(() => {
		if (cartClear) {
			navigate(RoutesEnum.Home)
		}
	}, [])

	if (!user) return null

	const onSubmitForm = async (orderData: CreateOrderFormValue) => {
		const order = getOrderData({ orderData, cartState })

		const orderId = await createOrder(order).unwrap()

		dispatch(clearCart())

		navigate(`${RoutesEnum.Order}/${orderId}`)
	}

	return (
		<CreateOrderForm
			onSubmitForm={onSubmitForm}
			paymentOptions={PaymentOptions}
			userData={user}
		/>
	)
}
