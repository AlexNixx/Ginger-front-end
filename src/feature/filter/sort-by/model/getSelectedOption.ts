import { FilterSchema } from 'entities/filter'
import { sortOptions } from './sortOptions'

export const getSelectedOption = ({ sortBy, sortOrder }: FilterSchema) => {
	return sortOptions.find(option => option.value === `${sortBy}_${sortOrder}`)
}
