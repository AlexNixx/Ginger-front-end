import {
	BaseQueryFn,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError
} from '@reduxjs/toolkit/query'

import { Mutex } from 'async-mutex'

const baseUrl = `${process.env.REACT_APP_SERVER_ENDPOINT}/api/`

// Create a new mutex
const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
	baseUrl,
	prepareHeaders: headers => {
		const accessToken = localStorage.getItem('AccessToken')
		if (accessToken) {
			headers.set('authorization', `Bearer ${accessToken}`)
		}
		return headers
	},
	credentials: 'include'
})

export const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	return await baseQuery(args, api, extraOptions)
}

const customFetchBase: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	// wait until the mutex is available without locking it
	await mutex.waitForUnlock()
	let result = await baseQuery(args, api, extraOptions)
	if ((result.error?.data as any)?.message === 'unauthorized user') {
		if (!mutex.isLocked()) {
			const release = await mutex.acquire()

			try {
				const refreshResult = await baseQuery(
					{ credentials: 'include', url: 'user/refresh' },
					api,
					extraOptions
				)
				if (refreshResult.data) {
					//update access token
					localStorage.setItem(
						'AccessToken',
						(<any>refreshResult.data).accessToken
					)
					// Retry the initial query
					result = await baseQuery(args, api, extraOptions)
				} else {
					await baseQuery(
						{ credentials: 'include', url: 'user/logout', method: 'POST' },
						api,
						extraOptions
					)
					localStorage.removeItem('AccessToken')
				}
			} finally {
				// release must be called once the mutex should be released again.
				release()
			}
		} else {
			// wait until the mutex is available without locking it
			await mutex.waitForUnlock()
			result = await baseQuery(args, api, extraOptions)
		}
	}

	if ((result.error?.status as any) === 403) {
		if (!mutex.isLocked()) {
			const release = await mutex.acquire()

			try {
				window.location.href = '/login'
			} finally {
				// release must be called once the mutex should be released again.
				release()
			}
		} else {
			// wait until the mutex is available without locking it
			await mutex.waitForUnlock()
			result = await baseQuery(args, api, extraOptions)
		}
	}

	return result
}

export default customFetchBase
