export interface IInfo {
	title: string
	description: string
	_id: number
}

export interface IProduct {
	brand: { _id: number; name: string }
	category: { _id: number; name: string }
	color?: { _id: number; name: string; rgb: string }
	deviceInfo: IInfo[]
	inStock: boolean
	title: string
	photoUrl: string
	price: number
	_id: number
}
