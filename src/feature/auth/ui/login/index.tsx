import { useEffect } from 'react'

import { FormValues, IUser } from '../../lib/types'

import { useLoginMutation } from '../../api/authApi'

import { AuthForm } from 'entities/auth-form'

import { toast } from 'react-hot-toast'

import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [login, { isLoading, isSuccess, error, isError }] = useLoginMutation()

	let navigate = useNavigate()

	useEffect(() => {
		if (isSuccess) {
			toast.success('Sign In success')
			navigate('/')
		}
		if (isError) {
			toast.error((error as any).data.message)
		}
	}, [isLoading, isSuccess, isError, error])

	const onSubmitForm = async (data: FormValues) => {
		try {
			await login(data).unwrap()
		} catch (error) {}
	}

	return <AuthForm onSubmitForm={onSubmitForm} isLogin={true} />
}

export { Login }
