import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Logo } from 'shared/ui/logo'

import styles from './AuthForm.module.scss'

type FormValues = {
	email: string
	password: string
	confirmPassword?: string
}

interface IFormProps {
	onSubmitForm: ({ email, password }: FormValues) => void
	isLogin: boolean
}

const AuthForm = ({ onSubmitForm, isLogin }: IFormProps) => {
	const {
		register,
		formState: { errors, isSubmitSuccessful },
		reset,
		watch,
		handleSubmit
	} = useForm<FormValues>({
		mode: 'onBlur'
	})

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset()
		}
	}, [isSubmitSuccessful, reset])

	const onSubmit: SubmitHandler<FormValues> = data => {
		const { email, password } = data
		onSubmitForm({ email, password })
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.left}>
				<h1 className={styles.title}>
					{isLogin ? 'Hi, Welcome Back!' : "Hi, Let's Sing Up!"}
				</h1>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<input
						className={styles.input}
						{...register('email', {
							required: 'Поле обязательно к заполнению!',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid email address'
							}
						})}
						placeholder='Enter your e-mail'
					/>
					{errors?.email && (
						<p className={styles.error}>{errors.email.message as string}</p>
					)}

					<input
						className={styles.input}
						{...register('password', {
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
						})}
						placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
						type='password'
					/>
					{errors?.password && (
						<p className={styles.error}>{errors.password.message as string}</p>
					)}

					{!isLogin && (
						<>
							<input
								className={styles.input}
								{...register('confirmPassword', {
									required: 'Поле обязательно к заполнению!',
									validate: value =>
										value === watch('password', '') ||
										'The passwords do not match'
								})}
								placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
								type='password'
							/>

							{errors?.confirmPassword && (
								<p className={styles.error}>
									{errors.confirmPassword.message as string}
								</p>
							)}
						</>
					)}
					<button className={styles.button}>
						{isLogin ? 'Sign in' : 'Sign up'}
					</button>
				</form>

				{isLogin ? (
					<p className={styles.description}>
						Don't have an account? <Link to='/register'>Sign up for free</Link>
					</p>
				) : (
					<p className={styles.description}>
						Already have an account? <Link to='/login'>Sign In</Link>
					</p>
				)}
			</div>
			<div className={styles.right}>
				<Logo />
			</div>
		</section>
	)
}

export { AuthForm }
