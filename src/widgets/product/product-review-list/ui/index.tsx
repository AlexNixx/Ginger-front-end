import { FC } from 'react'

import { DeleteReview } from 'feature/review/delete-review'

import { Review, ProductReview } from 'entities/product'

import styles from './ReviewList.module.scss'

import { useAppSelector } from 'shared/lib/hooks/useAppSelector'

import { getUserId } from 'entities/user'

import { motion, AnimatePresence } from 'framer-motion'

interface ReviewListProps {
	reviews: Review[]
	productId: string
}

export const ReviewList: FC<ReviewListProps> = ({ reviews, productId }) => {
	const userId = useAppSelector(getUserId)

	const ReviewAnimation = {
		hidden: {
			x: 100,
			opacity: 0
		},
		visible: (custom: number) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.3 }
		})
	}

	return (
		<div className={styles.reviewList}>
			<AnimatePresence>
				{reviews.map((review, index) => (
					<motion.div
						key={review._id}
						variants={ReviewAnimation}
						custom={index}
						viewport={{ amount: 0.2, once: true }}
						initial='hidden'
						whileInView='visible'
						exit={{ x: 100, opacity: 0 }}
					>
						<ProductReview
							review={review}
							deleteReview={
								userId === review.user ? (
									<DeleteReview productId={productId} reviewId={review._id} />
								) : null
							}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}
