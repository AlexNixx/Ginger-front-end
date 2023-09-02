import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'

import {
	getSelectedCategories,
	useGetAllCategoryQuery,
	setCategories,
	CheckBoxSkeleton
} from 'entities/filter'

import { Accordion } from 'shared/ui/accordion'
import { CheckboxGroup } from 'shared/ui/checkbox-group'

import { getOptions } from 'shared/lib/utils/getOptions'

export const CategoryFilter = () => {
	const {
		data: categoriesResponse,
		isLoading,
		isFetching
	} = useGetAllCategoryQuery()

	const dispatch = useAppDispatch()
	const selectedCategories = useAppSelector(getSelectedCategories)

	const handleCategoriesChange = (selectedCategories: string[]) => {
		dispatch(setCategories(selectedCategories))
	}

	const isOptionsLoading = isLoading || isFetching

	if (!categoriesResponse && !isOptionsLoading)
		return (
			<Accordion title='Categories'>
				<p>Categories not found</p>
			</Accordion>
		)

	if (isOptionsLoading)
		return (
			<Accordion title='Categories' isOpen>
				<CheckBoxSkeleton />
			</Accordion>
		)

	return (
		<Accordion title='Categories' isOpen>
			<CheckboxGroup
				options={getOptions(categoriesResponse?.categories!)}
				selectedOptions={selectedCategories}
				onChange={handleCategoriesChange}
			/>
		</Accordion>
	)
}
