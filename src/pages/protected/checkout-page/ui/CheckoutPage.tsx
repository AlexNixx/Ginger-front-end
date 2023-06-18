import { Head } from 'shared/ui/helmet'

import { CreateOrder } from 'feature/order/create-order'

import styles from './CheckoutPage.module.scss'

const CheckoutPage = () => {
	return (
		<>
			<Head title={'Checkout Page'} />

			<div className={styles.page}>
				<CreateOrder />
			</div>
		</>
	)
}

export default CheckoutPage
