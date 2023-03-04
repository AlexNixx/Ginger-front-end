import { FieldValues } from 'react-hook-form'

interface Info {
	title: string
	description: string
}

export interface Option {
	label: string
	value: string
}

export type FeatureFormValues = {
	name: string
	rgb?: string
}

export interface FeatureFormProps {
	onSubmitForm: (product: FeatureFormValues) => void
	title: string
	isColorForm: boolean
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
