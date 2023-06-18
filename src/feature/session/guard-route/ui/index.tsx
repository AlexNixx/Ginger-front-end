import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useGetRoleQuery } from 'entities/user/api/userApi'

import { RoutesEnum } from 'shared/const/appRoute'
import { Loader } from 'shared/ui/loader'

interface GuardRouteProps {
	allowedRoles: string[]
}

export const GuardRoute: FC<GuardRouteProps> = ({ allowedRoles }) => {
	const { data: role, isLoading, isFetching } = useGetRoleQuery()

	if (isLoading || isFetching) {
		return <Loader fullScreen />
	}

	if (!role) return <Navigate to={RoutesEnum.Login} />

	if (!allowedRoles.includes(role)) {
		return <Navigate to={RoutesEnum.Login} />
	}

	return <Outlet />
}
