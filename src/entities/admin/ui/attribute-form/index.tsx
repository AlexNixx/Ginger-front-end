import { useEffect } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Button } from 'shared/ui/button'
import { ErrorMessage } from 'shared/ui/error-message'
import { Input } from 'shared/ui/input'
import { AttributeFormProps, AttributeFormValues } from '../../types'

import styles from './AttributeForm.module.scss'

const AttributeForm = ({ title, onSubmitForm }: AttributeFormProps) => {
	const {
		register,
		formState: { isSubmitSuccessful },
		reset,
		control,
		handleSubmit
	} = useForm<AttributeFormValues>({
		mode: 'onBlur'
	})

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset()
		}
	}, [isSubmitSuccessful, reset])

	const onSubmit: SubmitHandler<AttributeFormValues> = data => {
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
			<input type='file' {...register('photoUrl')} />

			<Button type='submit' primary>
				Create {title}
			</Button>
		</form>
	)
}

export { AttributeForm }
