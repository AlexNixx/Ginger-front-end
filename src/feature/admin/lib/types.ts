export type Option = {
	label: string
	value: string
}

export type Feature = {
	name: string
	_id: string
}

export type Info = {
	title: string
	description: string
}

export type ProductFormValues = {
	title: string
	price: number
	category: string
	brand: string
	color: string
	inStock: boolean
	deviceInfo: Info[]
	photoUrl: FileList
}

export type BrandFormValues = {
	name: string
	photoUrl: string
}

export type CategoryFormValues = {
	name: string
	photoUrl: string
}

export type ColorFormValues = {
	name: string
	rgb: string
}
