export interface FilterSchema {
	categories: string[]
	brands: string[]
	colors: string[]
	minPrice: number
	maxPrice: number
	slug: string
	sortBy: string
	sortOrder: string
	page: number
}
