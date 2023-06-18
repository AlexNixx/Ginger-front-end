import { FC, useEffect } from 'react'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'

import { Button } from 'shared/ui/button'
import { ErrorMessage } from 'shared/ui/error-message'
import { Input } from 'shared/ui/input'

import { UpdatePasswordFormValues } from 'entities/user'

import styles from './UpdatePasswordForm.module.scss'

interface UpdatePasswordFormProps {
	onSubmitForm: (passwordData: UpdatePasswordFormValues) => void
}

export const UpdatePasswordForm: FC<UpdatePasswordFormProps> = ({
	onSubmitForm
}) => {
	const {
		formState: { isSubmitSuccessful },
		reset,
		control,
		watch,
		handleSubmit
	} = useForm<UpdatePasswordFormValues>({
		mode: 'onChange'
	})

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset()
		}
	}, [isSubmitSuccessful, reset])

	const onSubmit: SubmitHandler<UpdatePasswordFormValues> = passwordData => {
		onSubmitForm(passwordData)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Controller
				control={control}
				name='password'
				defaultValue=''
				rules={{
					required: 'You must specify a password',
					pattern: {
						value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
						message: 'At least one number'
					},
					minLength: {
						value: 8,
						message: 'Password must be more than 8 characters'
					},
					maxLength: {
						value: 20,
						message: 'Password must be less than 20 characters'
					}
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<Input
							type='password'
							placeholder='Password'
							value={value}
							onChange={onChange}
						/>
						<ErrorMessage message={error?.message} />
					</>
				)}
			/>

			<Controller
				control={control}
				name='newPassword'
				defaultValue=''
				rules={{
					required: 'You must specify a new password',
					pattern: {
						value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
						message: 'At least one number'
					},
					minLength: {
						value: 8,
						message: 'Password must be more than 8 characters'
					},
					maxLength: {
						value: 20,
						message: 'Password must be less than 20 characters'
					}
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<Input
							type='password'
							placeholder='Password'
							value={value}
							onChange={onChange}
						/>
						<ErrorMessage message={error?.message} />
					</>
				)}
			/>

			<Controller
				control={control}
				name='confirmNewPassword'
				defaultValue=''
				rules={{
					required: 'You need to confirm your password',
					validate: value =>
						value === watch('newPassword', '') || 'The passwords do not match'
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<Input
							type='password'
							placeholder='Confirm password'
							value={value}
							onChange={onChange}
						/>
						<ErrorMessage message={error?.message} />
					</>
				)}
			/>

			<Button primary>Update Password</Button>
		</form>
	)
}
