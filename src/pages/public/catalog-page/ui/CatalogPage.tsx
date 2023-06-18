import { SortFilter } from 'feature/filter/sort-by'
import { Filters } from 'widgets/filter'
import { ProductGrid } from 'widgets/product/product-grid'

import { RxMixerHorizontal } from 'react-icons/rx'
import styles from './CatalogPage.module.scss'

import { Head } from 'shared/ui/helmet'

import { useMatchMedia } from 'shared/lib/hooks/useMatchMedia'
import { SearchFilter } from 'feature/filter/filter-by-slug'
import { useMemo } from 'react'

const CatalogPage = () => {
	const { isDesktop } = useMatchMedia()

	return (
		<>
			<Head title={'Catalog Page'} />

			<div className={styles.page}>
				{!isDesktop ? (
					<>
						<header className={styles.header}>
							<h1>Catalog</h1>
							<RxMixerHorizontal />
						</header>
						<div className={styles.row}>
							<div className={styles.searchField}>
								<SearchFilter />
							</div>

							<Filters />

							<SortFilter />
						</div>
						<ProductGrid />
					</>
				) : (
					<>
						<header className={styles.header}>
							<div className={styles.title}>
								<h1>Catalog</h1>
								<RxMixerHorizontal />
							</div>
							<SortFilter />
						</header>
						<div className={styles.row}>
							<Filters />
							<ProductGrid />
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default CatalogPage
