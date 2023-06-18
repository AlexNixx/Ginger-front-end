import { useEffect } from 'react'

import { toast } from 'react-hot-toast'

import { useDeleteReviewMutation } from 'entities/product'

import { AiOutlineDelete } from 'react-icons/ai'

import { Button } from 'shared/ui/button'
import { useMatchMedia } from 'shared/lib/hooks/useMatchMedia'

export interface DeleteReviewProps {
	productId: string
	reviewId: string
}

const DeleteReview = ({ productId, reviewId }: DeleteReviewProps) => {
	const { isMobile } = useMatchMedia()
	const [deleteReview, { isLoading, isSuccess, error, isError }] =
		useDeleteReviewMutation()

	useEffect(() => {
		if (isSuccess) {
			toast.success('Review deleted!')
		}
		if (isError) {
			toast.error((error as any).data.message)
		}
	}, [isLoading, isSuccess, isError, error])

	const deleteHandler = async () => {
		try {
			await deleteReview({ productId, reviewId }).unwrap()
		} catch (error) {}
	}

	if (!isMobile)
		return (
			<Button onClick={deleteHandler}>
				<AiOutlineDelete />
			</Button>
		)

	return (
		<Button onClick={deleteHandler}>
			<AiOutlineDelete /> Delete Comment
		</Button>
	)
}

export { DeleteReview }
