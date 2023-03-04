import { lazy } from 'react'
import { Routes, Route } from 'react-router'

import Layout from './layout'

// const Layout = lazy(() => import('./layout'))
const HomePage = lazy(() => import('./home'))
const SignUpPage = lazy(() => import('./signup'))
const SignInPage = lazy(() => import('./signin'))
const UserAccountPage = lazy(() => import('./user-account'))
const ProductDetailsPage = lazy(() => import('./product-details'))
const CartPage = lazy(() => import('./cart'))
const AdminPage = lazy(() => import('./admin'))

export const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='/register' element={<SignUpPage />} />
				<Route path='/login' element={<SignInPage />} />
				<Route path='/user-account' element={<UserAccountPage />} />
				<Route path='/product/:id' element={<ProductDetailsPage />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/admin' element={<AdminPage />} />
			</Route>
		</Routes>
	)
}
