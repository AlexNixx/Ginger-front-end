import { useEffect } from 'react'

import { toast } from 'react-hot-toast'

import { useUpdatePasswordMutation } from 'entities/user'

import { UpdatePasswordForm } from '../update-user-password-form'

type FormValues = {
	password: string
	newPassword: string
	confirmNewPassword: string
}

const UpdateUserPassword = () => {
	const [updatePassword, { isLoading, isSuccess, error, isError }] =
		useUpdatePasswordMutation()

	useEffect(() => {
		if (isSuccess) {
			toast.success('Password successful updated!')
		}
		if (isError) {
			toast.error((error as any).data.message)
		}
	}, [isLoading, isSuccess, isError, error])

	const onSubmitForm = async (data: FormValues) => {
		try {
			await updatePassword(data).unwrap()
		} catch (error) {}
	}
	return <UpdatePasswordForm onSubmitForm={onSubmitForm} />
}

export { UpdateUserPassword }
