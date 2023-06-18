import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Header } from 'widgets/header'
import { Footer } from 'widgets/footer'

export const Layout = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}, [pathname])

	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
