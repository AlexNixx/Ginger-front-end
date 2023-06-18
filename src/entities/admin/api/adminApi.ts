import { createApi } from '@reduxjs/toolkit/query/react'
import customFetchBase from 'shared/api/customFetchBase'

export const adminApi = createApi({
	reducerPath: 'adminApi',
	baseQuery: customFetchBase,
	tagTypes: ['Color', 'Brand', 'Category'],
	endpoints: builder => ({
		createCategory: builder.mutation<any, any>({
			query(data) {
				return {
					url: 'category',
					method: 'POST',
					credentials: 'include',
					body: data
				}
			},
			invalidatesTags: [{ type: 'Category', id: 'LIST' }]
		}),
		createBrand: builder.mutation<any, any>({
			query(data) {
				return {
					url: 'brand',
					method: 'POST',
					credentials: 'include',
					body: data
				}
			},
			invalidatesTags: [{ type: 'Brand', id: 'LIST' }]
		}),
		createColor: builder.mutation<any, any>({
			query(data) {
				return {
					url: 'color',
					method: 'POST',
					credentials: 'include',
					body: data
				}
			},
			invalidatesTags: [{ type: 'Color', id: 'LIST' }]
		}),
		getAllCategory: builder.query<any, void>({
			query: () => ({
				url: 'category',
				credentials: 'include'
			}),
			providesTags: [{ type: 'Category', id: 'LIST' }]
		}),
		getAllBrand: builder.query<any, void>({
			query() {
				return {
					url: 'brand',
					credentials: 'include'
				}
			},
			providesTags: [{ type: 'Brand', id: 'LIST' }]
		}),
		getAllColor: builder.query<any, void>({
			query() {
				return {
					url: 'color',
					credentials: 'include'
				}
			},
			providesTags: [{ type: 'Color', id: 'LIST' }]
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
