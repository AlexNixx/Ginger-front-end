import { useRef, useState } from 'react'

import { ClearFilters } from 'feature/filter/clear-filters'
import { BrandFilter } from 'feature/filter/filter-by-brand'
import { CategoryFilter } from 'feature/filter/filter-by-category'
import { ColorFilter } from 'feature/filter/filter-by-color'
import { PriceFilter } from 'feature/filter/filter-by-price'

import { useClickOutside } from 'shared/lib/hooks/useClickOutside'
import { Button } from 'shared/ui/button'

import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import styles from './MobileFilters.module.scss'

export const MobileFilters = () => {
	const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
	const filterRef = useRef<HTMLElement>(null)

	const onFiltersVisible = () => {
		setIsFilterOpen(!isFilterOpen)
	}

	useClickOutside({
		elementRef: filterRef,
		onOutsideClick: onFiltersVisible,
		enabled: isFilterOpen
	})

	return (
		<>
			<Button onClick={onFiltersVisible}>Filters</Button>
			<AnimatePresence>
				{isFilterOpen && (
					<motion.aside
						className={styles.aside}
						ref={filterRef}
						initial={{ x: -700, opacity: 0.5 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -700, opacity: 0.5 }}
						transition={{ duration: 0.35 }}
					>
						<button className={styles.buttonBack} onClick={onFiltersVisible}>
							<AiOutlineArrowLeft /> Filters
						</button>
						<CategoryFilter />
						<PriceFilter />
						<BrandFilter />
						<ColorFilter />
						<ClearFilters />
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	)
}
