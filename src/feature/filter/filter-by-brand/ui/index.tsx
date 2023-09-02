import {
	getSelectedBrands,
	useGetAllBrandQuery,
	setBrands,
	CheckBoxSkeleton
} from 'entities/filter'

import { CheckboxGroup } from 'shared/ui/checkbox-group'
import { Accordion } from 'shared/ui/accordion'

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'

import { getOptions } from 'shared/lib/utils/getOptions'

export const BrandFilter = () => {
	const { data: brandsResponse, isLoading, isFetching } = useGetAllBrandQuery()

	const dispatch = useAppDispatch()
	const selectedBrands = useAppSelector(getSelectedBrands)

	const handleBrandsChange = (selectedBrands: string[]) => {
		dispatch(setBrands(selectedBrands))
	}

	const isOptionsLoading = isLoading || isFetching

	if (!brandsResponse && !isOptionsLoading)
		return (
			<Accordion title='Brands'>
				<p>Brands not found</p>
			</Accordion>
		)

	if (isOptionsLoading)
		return (
			<Accordion title='Brands' isOpen>
				<CheckBoxSkeleton />
			</Accordion>
		)

	return (
		<Accordion title='Brands' isOpen>
			<CheckboxGroup
				options={getOptions(brandsResponse?.brands!)}
				selectedOptions={selectedBrands}
				onChange={handleBrandsChange}
			/>
		</Accordion>
	)
}
