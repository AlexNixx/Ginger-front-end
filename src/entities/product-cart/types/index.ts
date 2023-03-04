export interface IProduct {
	brand: { _id: number; name: string }
	category: { _id: number; name: string }
	deviceInfo: [title: string, description: string]
	inStock: boolean
	title: string
	photoUrl: string
	price: number
}
