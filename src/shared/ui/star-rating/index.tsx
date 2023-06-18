import { useState } from 'react'
import styles from './StarRating.module.scss'

interface StarRatingProps {
	value?: number
	canSelect?: boolean
	setRating?: (rating: number) => void // new prop
}

export const StarRating = ({
	value = 1,
	canSelect = false,
	setRating
}: StarRatingProps) => {
	const [rating, setLocalRating] = useState<number>(value) // use local state for rating

	const handlerClick = (index: number) => {
		if (canSelect && setRating) {
			setLocalRating(index)
			setRating(index)
		}
	}

	const handlerMouse = (index: number) => {
		if (canSelect) {
			setLocalRating(index) // use local state for hover rating
		}
	}

	const onMouseLeave = () => {
		setLocalRating(value)
	}

	return (
		<div className={styles.rating}>
			{[...Array(5)].map((star, index) => {
				index += 1
				return (
					<span
						key={index}
						onClick={() => handlerClick(index)}
						className={index <= rating ? `${styles.on}` : `${styles.off}`}
						onMouseEnter={() => handlerMouse(index)}
						onMouseLeave={onMouseLeave}
					>
						<span className={styles.star}>&#9733;</span>
					</span>
				)
			})}
		</div>
	)
}
