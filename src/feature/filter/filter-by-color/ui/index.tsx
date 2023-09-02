import {
	getSelectedColors,
	useGetAllColorQuery,
	setColors,
	CheckBoxSkeleton
} from 'entities/filter'
import { CheckboxGroup } from 'shared/ui/checkbox-group'
import { Accordion } from 'shared/ui/accordion'

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'

import { getOptions } from 'shared/lib/utils/getOptions'

export const ColorFilter = () => {
	const { data: colorsResponse, isLoading, isFetching } = useGetAllColorQuery()

	const dispatch = useAppDispatch()
	const selectedColors = useAppSelector(getSelectedColors)

	const handleColorsChange = (selectedColors: string[]) => {
		dispatch(setColors(selectedColors))
	}

	const isOptionsLoading = isLoading || isFetching

	if (!colorsResponse && !isOptionsLoading)
		return (
			<Accordion title='Colors'>
				<p>Colors not found</p>
			</Accordion>
		)

	if (isOptionsLoading)
		return (
			<Accordion title='Colors' isOpen>
				<CheckBoxSkeleton />
			</Accordion>
		)

	return (
		<Accordion title='Colors'>
			<CheckboxGroup
				options={getOptions(colorsResponse?.colors!)}
				selectedOptions={selectedColors}
				onChange={handleColorsChange}
			/>
		</Accordion>
	)
}
