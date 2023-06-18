import { NavLinks } from '../navigation-links'

import { SearchFilter } from 'feature/filter/filter-by-slug'
import { ToggleTheme } from 'feature/user/toggle-theme'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { Link } from 'react-router-dom'
import { RoutesEnum } from 'shared/const/appRoute'
import { Avatar } from 'shared/ui/avatar'
import { Badge } from 'shared/ui/badge'
import { HiShoppingBag } from 'react-icons/hi'

import { getUserName } from 'entities/user'
import { getTotalQty } from 'entities/cart'

import styles from './DesktopNavigation.module.scss'

export const DesktopNavigation = () => {
	const username = useAppSelector(getUserName)
	const totalQty = useAppSelector(getTotalQty)

	return (
		<>
			<nav className={styles.navigation}>
				<NavLinks />
			</nav>
			<div className={styles.userAction}>
				<SearchFilter />
				<ToggleTheme />
				<Link to={username ? RoutesEnum.Profile : RoutesEnum.Login}>
					<Avatar username={username} />
				</Link>
				<Link to={RoutesEnum.Cart}>
					<Badge number={totalQty}>
						<HiShoppingBag />
					</Badge>
				</Link>
			</div>
		</>
	)
}
