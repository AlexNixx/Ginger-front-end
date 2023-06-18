export { userApi } from './api/userApi'

export {
	useUpdateUserAddressMutation,
	useUpdatePasswordMutation,
	useGetRoleQuery
} from './api/userApi'

export * from './api/types'

export { default as userSlice } from './model/slice/userSlice'

export { setUser, setUserAddress, logout } from './model/slice/userSlice'

export { getUser } from './model/selectors/get-user'
export { getUserName } from './model/selectors/get-user-name'
export { getUserAddress } from './model/selectors/get-user-address'
export { getUserId } from './model/selectors/get-user-id'

export * from './model/types/user'
