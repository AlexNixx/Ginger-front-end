import { createApi } from '@reduxjs/toolkit/query/react'
import customFetchBase from 'shared/api/customFetchBase'

export const adminApi = createApi({
	reducerPath: 'adminApi',
	baseQuery: customFetchBase,
	endpoints: builder => ({
		createCategory: builder.mutation<any, any>({
			query(data) {
				return {
					url: 'category',
					method: 'POST',
					credentials: 'include',
					body: data
				}
			}
		}),
		createBrand: builder.mutation<any, any>({
			query(data) {
				return {
					url: 'brand',
					method: 'POST',
					credentials: 'include',
					body: data
				}
			}
		}),
		createColor: builder.mutation<any, any>({
			query(data) {
				return {
					url: 'color',
					method: 'POST',
					credentials: 'include',
					body: data
				}
			}
		}),
		getAllCategory: builder.query<any, void>({
			query() {
				return {
					url: 'category',
					credentials: 'include'
				}
			}
		}),
		getAllBrand: builder.query<any, void>({
			query() {
				return {
					url: 'brand',
					credentials: 'include'
				}
			}
		}),
		getAllColor: builder.query<any, void>({
			query() {
				return {
					url: 'color',
					credentials: 'include'
				}
			}
		}),
		createProduct: builder.mutation<any, any>({
			query(data) {
				return {
					url: 'product',
					method: 'POST',
					credentials: 'include',
					body: data
				}
			}
		})
	})
})

export const {
	useCreateCategoryMutation,
	useCreateBrandMutation,
	useCreateColorMutation,
	useCreateProductMutation,
	useGetAllCategoryQuery,
	useGetAllBrandQuery,
	useGetAllColorQuery
} = adminApi
