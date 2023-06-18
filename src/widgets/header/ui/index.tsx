import { Link } from 'react-router-dom'

import { MobileNavigation } from './mobile-navigation'
import { DesktopNavigation } from './desktop-navigation'

import { useMatchMedia } from 'shared/lib/hooks/useMatchMedia'

import { RoutesEnum } from 'shared/const/appRoute'

import styles from './Header.module.scss'
import { LogoAnimated } from 'shared/ui/logo-animated'
import { memo, useMemo } from 'react'

export const Header = memo(() => {
	const { isDesktop } = useMatchMedia()

	const desktopNavigation = useMemo(() => <DesktopNavigation />, [])
	const mobileNavigation = useMemo(() => <MobileNavigation />, [])

	return (
		<header className={styles.header}>
			<Link to={RoutesEnum.Home} className={styles.linkedLogo}>
				<LogoAnimated />
			</Link>

			{isDesktop ? desktopNavigation : mobileNavigation}
		</header>
	)
})
