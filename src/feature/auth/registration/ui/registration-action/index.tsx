import { useRegistrationMutation } from 'entities/auth'
import { RegistrationForm } from '../registration-form'

import { toast } from 'react-hot-toast'

import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { RoutesEnum } from 'shared/const/appRoute'
import { Loader } from 'shared/ui/loader'

import { RegistrationFormValues } from 'entities/auth'

export const Registration = () => {
	const [registration, { isLoading, isSuccess, error, isError }] =
		useRegistrationMutation()

	let navigate = useNavigate()

	useEffect(() => {
		if (isSuccess) {
			toast.success('Sign Up success')
			navigate(RoutesEnum.Home)
		}
		if (isError) {
			toast.error((error as any).data.message)
		}
	}, [isSuccess, isError, error])

	if (isLoading) return <Loader fullScreen />

	const onSubmitForm = async (registrationData: RegistrationFormValues) => {
		try {
			await registration(registrationData).unwrap()
		} catch (error) {}
	}

	return <RegistrationForm onSubmitForm={onSubmitForm} />
}
