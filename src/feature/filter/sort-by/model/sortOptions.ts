export interface Option {
	value: string
	label: string
}

export const sortOptions: Option[] = [
	{ value: 'name_asc', label: 'Name - Ascending' },
	{ value: 'name_desc', label: 'Name - Descending' },
	{ value: 'price_asc', label: 'Price - Ascending' },
	{ value: 'price_desc', label: 'Price - Descending' }
]
