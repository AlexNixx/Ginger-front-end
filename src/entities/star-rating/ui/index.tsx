import { useState } from 'react'
import styles from './StarRating.module.scss'

interface IStarRating {
	like: number
	canSelect: boolean
}

const StarRating = ({ like, canSelect }: IStarRating) => {
	const [rating, setRating] = useState<number>(like)
	const [hover, setHover] = useState(0)

	const handlerClick = (index: number) => {
		if (canSelect) {
			setRating(index)
		}
	}

	const hadlerMouse = (index: number) => {
		if (canSelect) {
			setHover(index)
		}
	}

	return (
		<div className={styles.rating}>
			{[...Array(5)].map((star, index) => {
				index += 1
				return (
					<button
						key={index}
						onClick={() => handlerClick(index)}
						className={
							index <= (hover || rating) ? `${styles.on}` : `${styles.off}`
						}
						onMouseEnter={() => hadlerMouse(index)}
						onMouseLeave={() => hadlerMouse(rating)}
					>
						<span className={styles.star}>&#9733;</span>
					</button>
				)
			})}
		</div>
	)
}

export { StarRating }
