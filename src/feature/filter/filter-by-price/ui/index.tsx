import { getFilters, setPriceRange, PriceRangeSlider } from 'entities/filter'
import { memo } from 'react'

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'

import { Accordion } from 'shared/ui/accordion'

export const PriceFilter = memo(() => {
	const dispatch = useAppDispatch()

	const { maxPrice, minPrice } = useAppSelector(getFilters)

	const handlePriceRange = (priceRange: number[]) => {
		dispatch(setPriceRange(priceRange))
	}

	return (
		<Accordion title='Price Range' isOpen>
			<PriceRangeSlider
				key={minPrice || maxPrice}
				min={0}
				max={5000}
				step={5}
				values={[minPrice, maxPrice]}
				onChange={priceRange => handlePriceRange(priceRange)}
			/>
		</Accordion>
	)
})
