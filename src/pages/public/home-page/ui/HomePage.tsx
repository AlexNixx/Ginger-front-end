import { useNavigate } from 'react-router-dom'

import { Head } from 'shared/ui/helmet'

import { Banner } from './banner'

import { CategoryCardsFilter } from 'feature/filter/filter-by-category'

import { RoutesEnum } from 'shared/const/appRoute'

import styles from './HomePage.module.scss'

const HomePage = () => {
	const navigate = useNavigate()

	const navigateCatalogHandler = () => {
		navigate(RoutesEnum.Catalog)
	}

	return (
		<>
			<Head title={'Online shop'} />

			<div className={styles.page}>
				<Banner navigateCatalogHandler={navigateCatalogHandler} />
				<CategoryCardsFilter />
			</div>
		</>
	)
}

export default HomePage
