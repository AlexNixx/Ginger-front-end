// export interface IProduct {
// 	brand: { _id: number; name: string }
// 	category: { _id: number; name: string }
// 	color?: { _id: number; name: string; rgb: string }
// 	inStock: boolean
// 	title: string
// 	photoUrl: string
// 	price: number
// 	_id: number
// }

export interface IProduct {
	title: string
	photoUrl: string
	price: number
	_id?: number
}

export interface Props {
	product: IProduct | undefined
}

// export interface ICartProductOne {
// 	title: string
// 	price: number
// 	photoUrl: string
// }

export interface ICartProduct {
	_id: number | undefined
	quantity: number
	product: IProduct
}

export interface ICartState {
	cart: ICartProduct[]
	totalQty: number
	totalPrice: number
}
