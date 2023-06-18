import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { RoutesEnum } from 'shared/const/appRoute'

interface NavLinksProps {
	closeMobileMenu?: () => void
}

export const NavLinks: FC<NavLinksProps> = memo(({ closeMobileMenu }) => {
	return (
		<ul>
			<li onClick={closeMobileMenu}>
				<Link to={RoutesEnum.Catalog}>Catalog</Link>
			</li>
			<li onClick={closeMobileMenu}>
				<Link to={RoutesEnum.Delivery}>Delivery</Link>
			</li>
			<li onClick={closeMobileMenu}>
				<Link to={RoutesEnum.About}>About</Link>
			</li>
			<li onClick={closeMobileMenu}>
				<Link to={RoutesEnum.Contact}>Contacts</Link>
			</li>
		</ul>
	)
})
