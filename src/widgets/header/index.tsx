import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ThemeSwitcher } from 'entities/theme-switcher'
import { NavLinks } from 'entities/navigation-links'
import { ShoppingBag } from 'entities/shopping-bag'
import { Avatar } from 'entities/avatar'

import { useTabletDetect } from 'shared/lib/hooks/useTabletDetect'
import { useScroll } from 'shared/lib/hooks/useScroll'
import { Logo } from 'shared/ui/logo'
import { Burger } from 'shared/ui/burger'

import styles from './Header.module.scss'

const Header = () => {
	const [isBurgerOpen, setBurgerOpen] = useState(false)
	const closeMobileMenu = () => setBurgerOpen(false)

	const isScroll = useScroll()
	const isTablet = useTabletDetect()

	return (
		<header
			className={
				isScroll ? `${styles.header} ${styles.headerActive}` : styles.header
			}
		>
			<Link to='/' className={styles.linkedLogo}>
				<Logo />
			</Link>

			{isTablet && (
				<>
					<Burger
						isOpen={isBurgerOpen}
						onClick={() => setBurgerOpen(!isBurgerOpen)}
						className={styles.burger}
					/>
					{isBurgerOpen && (
						<nav className={styles.mobileNavigation}>
							<NavLinks closeMobileMenu={closeMobileMenu} />

							<div className={styles.userAction}>
								<ThemeSwitcher />
								<Avatar />
								<ShoppingBag />
							</div>
						</nav>
					)}
				</>
			)}
			{!isTablet && (
				<>
					<nav className={styles.navigation}>
						<NavLinks />
					</nav>
					<div className={styles.userAction}>
						<ThemeSwitcher />
						<Avatar />
						<ShoppingBag />
					</div>
				</>
			)}
		</header>
	)
}

export default Header
