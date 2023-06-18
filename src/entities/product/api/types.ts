export type DeleteReview = {
	productId: string
	reviewId: string
}

export type CreateReview = {
	productId: string
	reviewData: ReviewFormValue
}

export type ReviewFormValue = {
	rating: number
	comment: string
}

export interface Review {
	name: string
	rating: number
	comment: string
	user: string
	_id: string
	createdAt: string
}

export interface DeviceInfo {
	title: string
	description: string
	_id: number
}

export interface Product {
	brand: { _id: string; name: string }
	category: { _id: string; name: string }
	color: { _id: string; name: string; rgb: string }
	deviceInfo: DeviceInfo[]
	inStock: boolean
	title: string
	photoUrl: string
	price: number
	_id: string
	nubReviews: number
	rating: number
	reviews: Review[]
}

export interface ProductsResponse {
	products: Product[]
	currentPage: number
	totalPages: number
	totalProducts: number
}

export type FilterParams = {
	categories?: string[]
	brands?: string[]
	colors?: string[]
	minPrice?: number
	maxPrice?: number
	slug?: string | null
	sortBy?: string
	sortOrder?: string
	page?: number
	limit?: number
}
