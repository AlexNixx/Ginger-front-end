export { filterApi } from './api/filterApi'

export {
	useGetAllCategoryQuery,
	useGetAllBrandQuery,
	useGetAllColorQuery
} from './api/filterApi'

export * from './api/types'

export { default as filterSlice } from './model/slice/filterSlice'

export {
	setCategories,
	setBrands,
	setColors,
	setPriceRange,
	setSlug,
	setSortBy,
	setPage,
	clearFilters
} from './model/slice/filterSlice'

export { getSlug } from './model/selectors/get-slug'
export { getFilters } from './model/selectors/get-filters'
export { getSelectedColors } from './model/selectors/get-selected-colors'
export { getSelectedBrands } from './model/selectors/get-selected-brands'
export { getSelectedCategories } from './model/selectors/get-selected-categories'

export * from './model/types/filter'

export { CategoryCard } from './ui/category-card'
export { SearchSlugTag } from './ui/search-slug-tag'
export { PriceRangeSlider } from './ui/price-range-slider'
export { CheckBoxSkeleton } from './ui/checkbox-skeleton'
