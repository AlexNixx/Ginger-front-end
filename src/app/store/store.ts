import { configureStore, combineReducers } from '@reduxjs/toolkit'

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { cartSlice } from 'entities/cart'
import { userApi, userSlice } from 'entities/user'
import { filterApi, filterSlice } from 'entities/filter'

import { adminApi } from 'entities/admin'
import { authApi } from 'entities/auth'
import { productApi } from 'entities/product'
import { orderApi } from 'entities/order'

const rootReducer = combineReducers({
	userState: userSlice,
	cartState: cartSlice,
	filterState: filterSlice,
	[adminApi.reducerPath]: adminApi.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[productApi.reducerPath]: productApi.reducer,
	[filterApi.reducerPath]: filterApi.reducer,
	[orderApi.reducerPath]: orderApi.reducer,
	[userApi.reducerPath]: userApi.reducer
})

const persistConfig = {
	key: 'root',
	storage,
	version: 1,
	whitelist: ['cartState']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV === 'development',
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat([
			authApi.middleware,
			adminApi.middleware,
			productApi.middleware,
			filterApi.middleware,
			orderApi.middleware,
			userApi.middleware
		])
})

export const persistor = persistStore(store)
