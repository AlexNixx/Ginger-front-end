import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FilterSchema } from '../types/filter'

const initialState: FilterSchema = {
	categories: [],
	brands: [],
	colors: [],
	minPrice: 0,
	maxPrice: 5000,
	slug: '',
	sortBy: 'name',
	sortOrder: 'asc',
	page: 1
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategories(state, action: PayloadAction<string[]>) {
			state.categories = action.payload
			state.page = 1
		},
		setBrands(state, action: PayloadAction<string[]>) {
			state.brands = action.payload
			state.page = 1
		},
		setColors(state, action: PayloadAction<string[]>) {
			state.colors = action.payload
			state.page = 1
		},
		setPriceRange(state, action: PayloadAction<number[]>) {
			if (state.minPrice !== action.payload[0]) {
				state.minPrice = action.payload[0]
				state.page = 1
			}
			if (state.maxPrice !== action.payload[1]) {
				state.maxPrice = action.payload[1]
				state.page = 1
			}
		},
		setSlug(state, action: PayloadAction<string>) {
			state.slug = action.payload
			state.page = 1
		},
		setSortBy(
			state,
			action: PayloadAction<{ sortBy: string; sortOrder: string }>
		) {
			state.sortBy = action.payload.sortBy
			state.sortOrder = action.payload.sortOrder
			state.page = 1
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload
		},
		clearFilters: () => initialState
	}
})

export default filterSlice.reducer

export const {
	setCategories,
	setBrands,
	setColors,
	setPriceRange,
	setSlug,
	setSortBy,
	setPage,
	clearFilters
} = filterSlice.actions
