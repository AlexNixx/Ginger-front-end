import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

import {
	useGetAllCategoryQuery,
	setCategories,
	CategoryCard
} from 'entities/filter'

import { RoutesEnum } from 'shared/const/appRoute'

import { Skeleton } from 'shared/ui/skeleton'

import styles from './CategoryCardsFilter.module.scss'

export const CategoryCardsFilter = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const { data: categoriesResponse, isLoading } = useGetAllCategoryQuery()

	const handleCategoryChange = (selectedCategory: string[]) => {
		dispatch(setCategories(selectedCategory))
		navigate(RoutesEnum.Catalog)
	}

	return (
		<div className={styles.categoryList}>
			{isLoading &&
				[...new Array(6)].map((_, index) => (
					<Skeleton key={index} height={'100%'} />
				))}

			{categoriesResponse?.categories?.slice(0, 6).map(category => (
				<CategoryCard
					category={category}
					key={category._id}
					onClick={() => handleCategoryChange([category._id])}
				/>
			))}
		</div>
	)
}
