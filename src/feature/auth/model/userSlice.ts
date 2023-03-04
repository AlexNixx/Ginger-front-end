import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUserState } from '../lib/types'

const initialState: IUserState = {
	user: null
}

export const userSlice = createSlice({
	initialState,
	name: 'userSlice',
	reducers: {
		setUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload
		},
		logout: () => initialState
	}
})

export default userSlice.reducer

export const { setUser, logout } = userSlice.actions
