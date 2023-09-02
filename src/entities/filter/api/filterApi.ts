import { createApi } from '@reduxjs/toolkit/query/react'

import customFetchBase from 'shared/api/customFetchBase'

import { CategoryResponse, BrandResponse, ColorResponse } from './types'

export const filterApi = createApi({
	reducerPath: 'filterApi',
	baseQuery: customFetchBase,
	endpoints: builder => ({
		getAllCategory: builder.query<CategoryResponse, void>({
			query: () => ({
				url: 'category'
			})
		}),
		getAllBrand: builder.query<BrandResponse, void>({
			query: params => ({
				url: 'brand'
			})
		}),
		getAllColor: builder.query<ColorResponse, void>({
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
