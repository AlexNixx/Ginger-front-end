import { createApi } from '@reduxjs/toolkit/query/react'
import customFetchBase from 'shared/api/customFetchBase'

import { setUser } from '../model/slice/userSlice'
import { User } from '../model/types/user'

import { ShippingAddressFormValues, UpdatePasswordFormValues } from './types'

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: customFetchBase,
	endpoints: builder => ({
		updatePassword: builder.mutation<User, UpdatePasswordFormValues>({
			query(data) {
				return {
					url: 'user/update-password',
					method: 'PUT',
					body: data,
					credentials: 'include'
				}
			}
		}),
		updateUserAddress: builder.mutation<User, ShippingAddressFormValues>({
			query(data) {
				return {
					url: 'user/add-address',
					method: 'PUT',
					body: data,
					credentials: 'include'
				}
			},
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					dispatch(setUser(data))
				} catch (error) {}
			}
		}),
		getRole: builder.query<string, void>({
			query() {
				return {
					url: 'user/get-role',
					credentials: 'include'
				}
			}
		})
	})
})

export const {
	useUpdateUserAddressMutation,
	useUpdatePasswordMutation,
	useGetRoleQuery
} = userApi
