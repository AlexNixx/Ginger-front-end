import { Option } from './sortOptions'

export const getSortingValue = (selectedOption: Option) => {
	return selectedOption!.value.split('_')
}
