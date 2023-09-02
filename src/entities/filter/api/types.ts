export interface Category {
	name: string
	photoUrl: string
	_id: string
}

export interface Brand {
	name: string
	photoUrl: string
	_id: string
}

export interface Color {
	name: string
	rgb: string
	_id: string
}

export type CategoryResponse = {
	categories: Category[]
	currentPage: number
	totalPages: number
	totalCategories: number
}

export type BrandResponse = {
	brands: Brand[]
	currentPage: number
	totalPages: number
	totalBrands: number
}

export type ColorResponse = {
	colors: Color[]
	currentPage: number
	totalPages: number
	totalColors: number
}
