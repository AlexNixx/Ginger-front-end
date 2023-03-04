import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
	FeatureFormProps,
	FeatureFormValues
} from 'entities/admin-forms/lib/types'

import styles from './FeatureForm.module.scss'

const FeatureForm = ({
	title,
	isColorForm,
	onSubmitForm
}: FeatureFormProps) => {
	const {
		register,
		formState: { errors, isSubmitSuccessful },
		reset,
		handleSubmit
	} = useForm<FeatureFormValues>({
		mode: 'onBlur'
	})

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset()
		}
	}, [isSubmitSuccessful, reset])

	const onSubmit: SubmitHandler<FeatureFormValues> = data => {
		onSubmitForm(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				{...register('name', {
					required: `${title} is required!`
				})}
				placeholder='title'
			/>
			{errors?.name && <p>{errors.name.message as string}</p>}
			{isColorForm && (
				<>
					<input
						{...register('rgb', {
							required: 'Required!'
						})}
						placeholder='Enter color rgb'
					/>
					{errors?.rgb && <p>{errors.rgb.message as string}</p>}
				</>
			)}
			<button type='submit'>Create {title}</button>
		</form>
	)
}

export { FeatureForm }
