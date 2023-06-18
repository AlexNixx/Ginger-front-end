export interface ShippingAddress {
	city: string
	address: string
	postalCode: string
	country: string
}

export interface User {
	name: string
	surname: string
	id: string
	email: string
	isActivated: boolean
	role: string
	address: ShippingAddress
}

export interface UserSchema {
	user: User | null
}
