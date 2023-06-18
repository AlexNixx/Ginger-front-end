import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserSchema, User, ShippingAddress } from '../types/user'

const initialState: UserSchema = {
	user: null
}

export const userSlice = createSlice({
	initialState,
	name: 'userSlice',
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload
		},
		setUserAddress: (state, action: PayloadAction<ShippingAddress>) => {
			if (state.user) {
				state.user.address = action.payload
			}
		},
		logout: () => initialState
	}
})

export default userSlice.reducer

export const { setUser, setUserAddress, logout } = userSlice.actions
