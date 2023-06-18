import { useEffect } from 'react'

import { useLoginMutation, LoginFormValues } from 'entities/auth'

import { LoginForm } from '../login-form'

import { toast } from 'react-hot-toast'

import { useNavigate } from 'react-router-dom'
import { RoutesEnum } from 'shared/const/appRoute'

export const Login = () => {
	const [login, { isLoading, isSuccess, error, isError }] = useLoginMutation()

	const navigate = useNavigate()

	useEffect(() => {
		if (isSuccess) {
			toast.success('Sign In success')
			navigate(RoutesEnum.Home)
		}
		if (isError) {
			toast.error((error as any).data.message)
			navigate(RoutesEnum.Registration)
		}
	}, [isLoading, isSuccess, isError, error])

	const onSubmitForm = async (loginData: LoginFormValues) => {
		try {
			await login(loginData).unwrap()
		} catch (error) {}
	}

	return <LoginForm onSubmitForm={onSubmitForm} />
}
