import { useEffect } from 'react'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'

import { Button } from 'shared/ui/button'

import { ErrorMessage } from 'shared/ui/error-message'
import { Input } from 'shared/ui/input'

import styles from './ColorForm.module.scss'
import { ColorFormProps, ColorFormValues } from 'entities/admin/types'

const ColorForm = ({ title, onSubmitForm }: ColorFormProps) => {
	const {
		register,
		formState: { isSubmitSuccessful },
		reset,
		control,
		handleSubmit
	} = useForm<ColorFormValues>({
		mode: 'onBlur'
	})

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset()
		}
	}, [isSubmitSuccessful, reset])

	const onSubmit: SubmitHandler<ColorFormValues> = data => {
		onSubmitForm(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Controller
				control={control}
				name='name'
				defaultValue=''
				rules={{
					required: `${title} is required!`
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<Input
							type='text'
							placeholder='Title'
							onChange={onChange}
							value={value}
						/>
						<ErrorMessage message={error?.message} />
					</>
				)}
			/>

			<Controller
				control={control}
				name='rgb'
				defaultValue=''
				rules={{
					required: `Color rgb is required!`
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<Input
							type='text'
							value={value}
							placeholder='Enter color rgb'
							onChange={onChange}
						/>
						<ErrorMessage message={error?.message} />
					</>
				)}
			/>

			<Button type='submit' primary>
				Create {title}
			</Button>
		</form>
	)
}

export { ColorForm }
