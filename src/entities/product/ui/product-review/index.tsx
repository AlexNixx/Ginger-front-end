import { FC } from 'react'

import { Review } from 'entities/product/api/types'

import { Avatar } from 'shared/ui/avatar'
import { StarRating } from 'shared/ui/star-rating'

import { formatDate } from 'shared/lib/utils/formatDate'

import styles from './ProductReview.module.scss'

interface ProductReviewProps {
	review: Review
	deleteReview?: React.ReactNode
}

export const ProductReview: FC<ProductReviewProps> = ({
	review,
	deleteReview: DeleteReview
}) => {
	return (
		<article className={styles.review}>
			<div className={styles.content}>
				<div className={styles.header}>
					<Avatar username={review.name} />
					<h3 className={styles.username}>{review.name}</h3>
					<h4 className={styles.date}>
						{formatDate(review.createdAt).split(',')[0]}
					</h4>
					<StarRating value={review.rating} />
				</div>

				<p className={styles.comment}>{review.comment}</p>
			</div>

			{DeleteReview}
		</article>
	)
}
