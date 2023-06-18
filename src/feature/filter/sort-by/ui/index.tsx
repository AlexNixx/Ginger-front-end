import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import Select from 'react-select'

import { getFilters, setSortBy } from 'entities/filter'

import { Option, sortOptions } from '../model/sortOptions'
import { getSelectedOption } from '../model/getSelectedOption'
import { getSortingValue } from '../model/getSortingValue'

export const SortFilter = () => {
	const dispatch = useAppDispatch()
	const filters = useAppSelector(getFilters)

	const handleSortChange = (selectedOption: Option | null) => {
		if (selectedOption) {
			const [sortBy, sortOrder] = getSortingValue(selectedOption)
			dispatch(setSortBy({ sortBy, sortOrder }))
		}
	}

	return (
		<Select
			key={filters.sortBy}
			classNamePrefix='custom-select'
			placeholder='Sort by'
			options={sortOptions}
			value={getSelectedOption(filters)}
			isSearchable={false}
			onChange={handleSortChange}
		/>
	)
}
