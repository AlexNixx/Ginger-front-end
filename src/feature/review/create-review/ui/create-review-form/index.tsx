import { FC, useEffect } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

import { ErrorMessage } from 'shared/ui/error-message'
import { StarRating } from 'shared/ui/star-rating'
import { TextArea } from 'shared/ui/textarea'
import { Button } from 'shared/ui/button'

import styles from './ReviewForm.module.scss'

import { ReviewFormValue } from 'entities/product'

interface ReviewFormProps {
	onSubmitForm: (reviewData: ReviewFormValue) => void
}

export const ReviewForm: FC<ReviewFormProps> = ({ onSubmitForm }) => {
	const {
		formState: { isSubmitSuccessful },
		reset,
		control,
		handleSubmit
	} = useForm<ReviewFormValue>({
		mode: 'onChange'
	})

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset()
		}
	}, [isSubmitSuccessful])

	const onSubmit: SubmitHandler<ReviewFormValue> = reviewData => {
		onSubmitForm(reviewData)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<div className={styles.field}>
				<div className={styles.rating}>
					<h3 className={styles.ratingTitle}>
						Select a rating for this product:{' '}
					</h3>
					<Controller
						name='rating'
						control={control}
						defaultValue={1}
						rules={{
							required: true
						}}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<StarRating
								key={value}
								value={value}
								canSelect
								setRating={(value: number) => {
									onChange(value)
								}}
							/>
						)}
					/>
				</div>
				<Controller
					name='comment'
					control={control}
					defaultValue=''
					rules={{ required: 'The comment field is required' }}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<>
							<TextArea
								placeholder='Please tell us about your experience'
								value={value}
								onChange={onChange}
							/>
							<ErrorMessage message={error?.message} />
						</>
					)}
				/>
			</div>
			<Button primary type='submit'>
				Create Review
			</Button>
		</form>
	)
}
