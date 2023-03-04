import { Link } from 'react-router-dom'

interface INavLinks {
	closeMobileMenu?: () => void
}

const NavLinks = ({ closeMobileMenu }: INavLinks) => {
	return (
		<ul>
			<li>
				<Link to='/login' onClick={closeMobileMenu}>
					Catalog
				</Link>
			</li>
			<li>
				<Link to='/register' onClick={closeMobileMenu}>
					Delivery
				</Link>
			</li>
			<li>
				<Link to='/user-account' onClick={closeMobileMenu}>
					About
				</Link>
			</li>
			<li>
				<Link to='/' onClick={closeMobileMenu}>
					Contacts
				</Link>
			</li>
		</ul>
	)
}

export { NavLinks }
