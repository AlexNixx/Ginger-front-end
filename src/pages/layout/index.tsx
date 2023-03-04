import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Header from 'widgets/header'
import Footer from 'widgets/footer'

const Layout = () => {
	return (
		<>
			<Toaster />
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default Layout
