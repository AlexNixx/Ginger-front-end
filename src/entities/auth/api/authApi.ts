import { createApi } from '@reduxjs/toolkit/query/react'

import customFetchBase from 'shared/api/customFetchBase'

import { AuthResponse, LoginFormValues, RegistrationFormValues } from './types'

import { logout, setUser } from 'entities/user'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: customFetchBase,

	endpoints: builder => ({
		registration: builder.mutation<AuthResponse, RegistrationFormValues>({
			query(data) {
				return {
					url: 'user/signup',
					method: 'POST',
					body: data,
					credentials: 'include'
				}
			},
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					dispatch(setUser(data.user))
					localStorage.setItem('AccessToken', data.accessToken)
				} catch (error) {}
			}
		}),
		login: builder.mutation<AuthResponse, LoginFormValues>({
			query(data) {
				return {
					url: 'user/signin',
					method: 'POST',
					body: data,
					credentials: 'include'
				}
			},
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					dispatch(setUser(data.user))
					localStorage.setItem('AccessToken', data.accessToken)
				} catch (error) {}
			}
		}),
		logout: builder.mutation<void, void>({
			query() {
				return {
					url: 'user/logout',
					method: 'POST',
					credentials: 'include'
				}
			},
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					dispatch(logout())
					localStorage.removeItem('AccessToken')
				} catch (error) {}
			}
		}),
		initAuthData: builder.query<AuthResponse, void>({
			query() {
				return {
					url: 'user/refresh',
					credentials: 'include'
				}
			},
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					dispatch(setUser(data.user))
					localStorage.setItem('AccessToken', data.accessToken)
				} catch (error) {}
			}
		})
	})
})

export const {
	useRegistrationMutation,
	useLoginMutation,
	useLogoutMutation,
	useLazyInitAuthDataQuery
} = authApi
