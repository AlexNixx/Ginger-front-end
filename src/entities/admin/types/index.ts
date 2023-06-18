import { FieldValues } from 'react-hook-form'

export type AttributeFormValues = {
	name: string
	photoUrl: string
}

export interface AttributeFormProps {
	onSubmitForm: (product: AttributeFormValues) => void
	title: string
}

// COLOR
export type ColorFormValues = {
	name: string
	rgb: string
}

export interface ColorFormProps {
	onSubmitForm: (product: ColorFormValues) => void
	title: string
}
//

// Product
export interface Option {
	label: string
	value: string
}

interface Info {
	title: string
	description: string
}

export type ProductFormValues = FieldValues & {
	title: string
	price: number
	category: string
	brand: string
	color: string
	inStock: boolean
	deviceInfo: Info[]
	photoUrl: FileList
}

export interface IFormProps {
	onSubmitForm: (product: ProductFormValues) => void
	categoryOption: Option[]
	brandOption: Option[]
	colorOption: Option[]
}
