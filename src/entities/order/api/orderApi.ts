import { createApi } from '@reduxjs/toolkit/query/react'
import customFetchBase from 'shared/api/customFetchBase'
import { Order, CreateOrderFormValue } from './types'

export const orderApi = createApi({
	reducerPath: 'orderApi',
	baseQuery: customFetchBase,
	tagTypes: ['Order'],
	endpoints: builder => ({
		createOrder: builder.mutation<Order, any>({
			query(data) {
				return {
					url: 'order',
					method: 'POST',
					body: data,
					credentials: 'include'
				}
			}
		}),
		getMyOrders: builder.query<Order[], void>({
			query: () => 'order/my-orders',
			providesTags: [{ type: 'Order', id: 'LIST' }]
		}),

		getOrderById: builder.query<Order, string>({
			query: id => `order/${id}`,
			providesTags: [{ type: 'Order', id: 'LIST' }]
		}),
		updateOrderToPaid: builder.mutation<
			any,
			{
				id: string
				data: {
					id: string
					status: string
					update_time: string
					payer: { email_address: string }
				}
			}
		>({
			query: ({ id, data }) => ({
				url: `order/${id}/pay`,
				method: 'PUT',
				body: data,
				credentials: 'include'
			}),
			invalidatesTags: [{ type: 'Order', id: 'LIST' }]
		})
	})
})

export const {
	useCreateOrderMutation,
	useGetMyOrdersQuery,
	useGetOrderByIdQuery,
	useUpdateOrderToPaidMutation
} = orderApi
