import { ClearFilters } from 'feature/filter/clear-filters'
import { BrandFilter } from 'feature/filter/filter-by-brand'
import { CategoryFilter } from 'feature/filter/filter-by-category'
import { ColorFilter } from 'feature/filter/filter-by-color'
import { PriceFilter } from 'feature/filter/filter-by-price'

export const DesktopFilters = () => {
	return (
		<aside>
			<CategoryFilter />
			<PriceFilter />
			<BrandFilter />
			<ColorFilter />
			<ClearFilters />
		</aside>
	)
}
