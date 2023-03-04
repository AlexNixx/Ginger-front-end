import { configureStore } from '@reduxjs/toolkit'

import { userSlice } from 'feature/auth'
import { cartSlice } from 'feature/cart'

import { adminApi } from 'feature/admin'
import { authApi } from 'feature/auth'
import { productsApi } from 'widgets/product-grid'
import { productApi } from 'widgets/product-details'

export const store = configureStore({
	reducer: {
		userState: userSlice,
		cartState: cartSlice,
		[adminApi.reducerPath]: adminApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		[productApi.reducerPath]: productApi.reducer,
		[productsApi.reducerPath]: productsApi.reducer
	},
	devTools: process.env.NODE_ENV === 'development',
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({}).concat([
			authApi.middleware,
			adminApi.middleware,
			productApi.middleware,
			productsApi.middleware
		])
})
