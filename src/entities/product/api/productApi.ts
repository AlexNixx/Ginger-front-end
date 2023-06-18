import { createApi } from '@reduxjs/toolkit/query/react'
import customFetchBase from 'shared/api/customFetchBase'
import {
	Product,
	ProductsResponse,
	FilterParams,
	CreateReview,
	Review,
	DeleteReview
} from './types'

export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery: customFetchBase,
	tagTypes: ['Products'],
	endpoints: builder => ({
		getProducts: builder.query<ProductsResponse, FilterParams>({
			query: params => ({
				url: 'product',
				params: params
			})
		}),
		getProductById: builder.query<Product, string>({
			query: id => `product/${id}`,
			providesTags: [{ type: 'Products', id: 'LIST' }]
		}),
		createReview: builder.mutation<Review, CreateReview>({
			query: ({ productId, reviewData }) => ({
				url: `product/${productId}/reviews`,
				method: 'POST',
				credentials: 'include',
				body: reviewData
			}),
			invalidatesTags: [{ type: 'Products', id: 'LIST' }]
		}),
		deleteReview: builder.mutation<any, DeleteReview>({
			query: ({ productId, reviewId }) => ({
				url: `product/${productId}/reviews/${reviewId}`,
				method: 'DELETE',
				credentials: 'include'
			}),
			invalidatesTags: [{ type: 'Products', id: 'LIST' }]
		})
	})
})

export const {
	useGetProductsQuery,
	useGetProductByIdQuery,
	useCreateReviewMutation,
	useDeleteReviewMutation
} = productApi
