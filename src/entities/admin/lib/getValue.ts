import { Option } from '../types'

export const getValue = (value: string, options: Option[]) => {
	return value ? options.find(option => option.value === value) : ''
}
