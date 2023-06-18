import { FC } from 'react'

import { Category } from 'entities/filter/api/types'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

import styles from './CategoryCard.module.scss'

interface CategoryCardProps {
	category: Category
	onClick: () => void
}

export const CategoryCard: FC<CategoryCardProps> = ({ category, onClick }) => {
	return (
		<div className={styles.categoryCard} onClick={onClick}>
			<h1 className={styles.title}>{category.name}</h1>
			<LazyLoadImage
				src={`${process.env.REACT_APP_SERVER_ENDPOINT}/${category.photoUrl}`}
				alt={`${category.name}-category`}
				className={styles.img}
				effect='opacity'
			/>
		</div>
	)
}
