import { FC, useEffect } from 'react'

import { toast } from 'react-hot-toast'

import { ReviewForm } from '../create-review-form'
import { useCreateReviewMutation } from 'entities/product'

import { ReviewFormValue } from 'entities/product'

interface CreateReviewProps {
	productId: string
}

export const CreateReview: FC<CreateReviewProps> = ({ productId }) => {
	const [createReview, { isLoading, isSuccess, error, isError }] =
		useCreateReviewMutation()

	useEffect(() => {
		if (isSuccess) {
			toast.success('Review created!')
		}
		if (isError) {
			toast.error((error as any).data.message)
		}
	}, [isLoading, isSuccess, isError, error])

	const onSubmitForm = async (reviewData: ReviewFormValue) => {
		try {
			await createReview({ productId, reviewData }).unwrap()
		} catch (error) {}
	}

	return <ReviewForm onSubmitForm={onSubmitForm} />
}
