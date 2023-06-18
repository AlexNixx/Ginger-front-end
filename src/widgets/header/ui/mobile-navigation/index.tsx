import React, { useState, memo, useCallback } from 'react'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { Link } from 'react-router-dom'

import { SearchFilter } from 'feature/filter/filter-by-slug'
import { ToggleTheme } from 'feature/user/toggle-theme'

import { Badge } from 'shared/ui/badge'
import { NavLinks } from '../navigation-links'
import { Avatar } from 'shared/ui/avatar'
import { Burger } from 'shared/ui/burger'

import { HiShoppingBag } from 'react-icons/hi'
import { RoutesEnum } from 'shared/const/appRoute'

import styles from './MobileNavigation.module.scss'
import { getUserName } from 'entities/user'
import { getTotalQty } from 'entities/cart'

import { motion, AnimatePresence } from 'framer-motion'

export const MobileNavigation = () => {
	const [isBurgerOpen, setBurgerOpen] = useState<boolean>(false)

	const username = useAppSelector(getUserName)
	const totalQty = useAppSelector(getTotalQty)

	const handleBurgerVisible = () => setBurgerOpen(!isBurgerOpen)

	return (
		<>
			<Burger
				isOpen={isBurgerOpen}
				onClick={handleBurgerVisible}
				className={styles.burger}
			/>
			<AnimatePresence>
				{isBurgerOpen && (
					<motion.nav
						className={styles.mobileNavigation}
						initial={{ x: 700, opacity: 0.5 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: 700, opacity: 0.5 }}
						transition={{ duration: 0.35 }}
					>
						<NavLinks closeMobileMenu={handleBurgerVisible} />

						<SearchFilter />
						<ToggleTheme />
						<Link
							to={username ? RoutesEnum.Profile : RoutesEnum.Login}
							className={styles.user}
							onClick={handleBurgerVisible}
						>
							<Avatar username={username} />
							{username ? <h3>Account</h3> : <h3>Sing in</h3>}
						</Link>
						<Link
							to={RoutesEnum.Cart}
							className={styles.cart}
							onClick={handleBurgerVisible}
						>
							<Badge number={totalQty}>
								<HiShoppingBag />
							</Badge>
							<h3>Cart</h3>
						</Link>
					</motion.nav>
				)}
			</AnimatePresence>
		</>
	)
}
