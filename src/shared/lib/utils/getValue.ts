export interface Option {
	value: string
	label: string
}

export const getValue = (value: string, option: Option[]) =>
	value ? option.find(option => option.value === value) : ''
