import { createApi } from '@reduxjs/toolkit/query/react'

import customFetchBase from 'shared/api/customFetchBase'

import { Category, Brand, Color } from './types'

export const filterApi = createApi({
	reducerPath: 'filterApi',
	baseQuery: customFetchBase,
	endpoints: builder => ({
		getAllCategory: builder.query<Category[], void>({
			query: () => ({
				url: 'category'
			})
		}),
		getAllBrand: builder.query<Brand[], void>({
			query: params => ({
				url: 'brand'
			})
		}),
		getAllColor: builder.query<Color[], void>({
			query() {
				return {
					url: 'color'
				}
			}
		})
	})
})

export const {
	useGetAllCategoryQuery,
	useGetAllBrandQuery,
	useGetAllColorQuery
} = filterApi
