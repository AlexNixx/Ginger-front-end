import { FC, useEffect } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

import { Button } from 'shared/ui/button'
import { ErrorMessage } from 'shared/ui/error-message'
import { Input } from 'shared/ui/input'

import styles from './RegistrationForm.module.scss'

import { RegistrationFormValues } from 'entities/auth'

interface IFormProps {
	onSubmitForm: (registrationData: RegistrationFormValues) => void
}

export const RegistrationForm: FC<IFormProps> = ({ onSubmitForm }) => {
	const {
		formState: { isSubmitSuccessful },
		reset,
		control,
		watch,
		handleSubmit
	} = useForm<RegistrationFormValues>({
		mode: 'onChange'
	})

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset()
		}
	}, [isSubmitSuccessful, reset])

	const onSubmit: SubmitHandler<RegistrationFormValues> = registrationData => {
		onSubmitForm(registrationData)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Controller
				control={control}
				name='name'
				defaultValue=''
				rules={{
					required: 'Enter your name'
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<Input
							type='text'
							placeholder='Name'
							value={value}
							onChange={onChange}
						/>
						<ErrorMessage message={error?.message} />
					</>
				)}
			/>
			<Controller
				control={control}
				name='surname'
				defaultValue=''
				rules={{
					required: 'Enter your Surname'
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<Input
							type='text'
							placeholder='Surname'
							value={value}
							onChange={onChange}
						/>
						<ErrorMessage message={error?.message} />
					</>
				)}
			/>

			<Controller
				control={control}
				name='email'
				defaultValue=''
				rules={{
					required: 'Email is required',
					pattern: {
						value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
						message: 'Invalid email address'
					}
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<Input
							type='text'
							placeholder='Email'
							value={value}
							onChange={onChange}
						/>
						<ErrorMessage message={error?.message} />
					</>
				)}
			/>
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
				name='confirmPassword'
				defaultValue=''
				rules={{
					required: 'You need to confirm your password',
					validate: value =>
						value === watch('password', '') || 'The passwords do not match'
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

			<Button primary>Sign up</Button>
		</form>
	)
}
