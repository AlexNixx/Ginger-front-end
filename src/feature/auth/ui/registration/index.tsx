import { AuthForm } from 'entities/auth-form'

import { useRegistrationMutation } from '../../api/authApi'

import { FormValues } from '../../lib/types'

import { toast } from 'react-hot-toast'

import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

const Registration = () => {
	const [registration, { isLoading, isSuccess, error, isError }] =
		useRegistrationMutation()

	let navigate = useNavigate()

	useEffect(() => {
		if (isSuccess) {
			toast.success('Sign Up success')
			navigate('/')
		}
		if (isError) {
			toast.error((error as any).data.message)
		}
	}, [isLoading, isSuccess, isError, error])

	const onSubmitForm = async (data: FormValues) => {
		try {
			await registration(data).unwrap()
		} catch (error) {}
	}

	return <AuthForm onSubmitForm={onSubmitForm} isLogin={false} />
}

export { Registration }
