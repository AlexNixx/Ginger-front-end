import { Routes, Route } from 'react-router'

import { CartPage } from 'pages/public/cart-page'
import { HomePage } from 'pages/public/home-page'
import { LoginPage } from 'pages/public/login-page'
import { CatalogPage } from 'pages/public/catalog-page'
import { ProductPage } from 'pages/public/product-page'
import { RegistrationPage } from 'pages/public/registration-page'

import { AdminPage } from 'pages/protected/admin-page'
import { OrderPage } from 'pages/protected/order-page'
import { ProfilePage } from 'pages/protected/profile-page'
import { CheckoutPage } from 'pages/protected/checkout-page'

import { AboutPage } from 'pages/static/about-page'
import { ContactPage } from 'pages/static/contact-page'
import { DeliveryPage } from 'pages/static/delivery-page'
import { NotFoundPage } from 'pages/static/not-found-page'

import { Layout } from 'pages/layout'

import { GuardRoute } from 'feature/session/guard-route'

import { RoutesEnum } from 'shared/const/appRoute'

export const Routing = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				{/* Public Routes */}
				<Route path={RoutesEnum.Home} element={<HomePage />} />
				<Route path={RoutesEnum.Catalog} element={<CatalogPage />} />
				<Route path={RoutesEnum.Registration} element={<RegistrationPage />} />
				<Route path={RoutesEnum.Login} element={<LoginPage />} />
				<Route path={`${RoutesEnum.Product}/:id`} element={<ProductPage />} />
				<Route path={RoutesEnum.Cart} element={<CartPage />} />
				<Route path={RoutesEnum.Delivery} element={<DeliveryPage />} />
				<Route path={RoutesEnum.About} element={<AboutPage />} />
				<Route path={RoutesEnum.Contact} element={<ContactPage />} />
				<Route path={RoutesEnum.NotFount} element={<NotFoundPage />} />

				{/* Protected Admin Routes */}
				<Route element={<GuardRoute allowedRoles={['ADMIN']} />}>
					<Route path={RoutesEnum.Admin} element={<AdminPage />} />
				</Route>

				{/* Protected User & Admin Routes */}
				<Route element={<GuardRoute allowedRoles={['USER', 'ADMIN']} />}>
					<Route path={RoutesEnum.Profile} element={<ProfilePage />} />
					<Route path={RoutesEnum.Checkout} element={<CheckoutPage />} />
					<Route path={`${RoutesEnum.Order}/:id`} element={<OrderPage />} />
				</Route>
			</Route>
		</Routes>
	)
}
