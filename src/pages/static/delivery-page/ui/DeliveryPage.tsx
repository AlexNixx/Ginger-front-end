import { Head } from 'shared/ui/helmet'

import styles from './DeliveryPage.module.scss'

const DeliveryPage = () => {
	return (
		<>
			<Head title={'Delivery Page'} />
			<div className={styles.page}>
				<div className={styles.container}>
					<p>
						Thank you for choosing our e-commerce website for your shopping
						needs!
						<br />
						We understand that shipping, delivery, and after-sales services are
						crucial for a satisfactory shopping experience.
						<br />
						Here's what you need to know about our Shipping & Delivery, Return &
						Replace, and Warranty policies:
					</p>
					<h1 className={styles.title}>Where is my Order?</h1>
					<p>
						We know how important it is for you to receive your order as soon as
						possible. Once your order is confirmed, we'll send you a
						confirmation email with your order details and a tracking number.
						<br /> You can use the tracking number to check the status of your
						order anytime on our website. We work with reliable shipping
						partners to ensure that your order is delivered to you within the
						estimated delivery time frame.
						<br />
						However, please note that unforeseen circumstances such as weather
						conditions, natural disasters, or unexpected events may cause delays
						in delivery. In such cases, we'll do our best to keep you informed
						and provide you with the necessary support.
					</p>
					<h1 className={styles.title}>Return & Replace</h1>
					<p>
						We understand that sometimes you may want to return or replace a
						product due to various reasons.
						<br />
						We have a hassle-free return and replacement policy in place to
						ensure your satisfaction. If you're not happy with your purchase,
						you can initiate a return or replacement request within our
						specified time frame.
						<br />
						Please check our website for the specific details of our policy.
						We'll guide you through the process and provide you with the
						necessary support to make the return or replacement process as
						smooth as possible.
					</p>
					<h1 className={styles.title}>Warranty</h1>
					<p>
						We're committed to providing you with quality products that meet
						your expectations. All our products come with a warranty period,
						which varies depending on the product.
						<br />
						The warranty covers any defects or malfunctions in the product
						caused by manufacturing or material defects.
						<br />
						Please check the specific warranty period and terms for your product
						on our website. If you encounter any issues with your product during
						the warranty period, please contact our customer support team, and
						we'll provide you with the necessary support and assistance to
						resolve the issue.
					</p>
					<p>
						We hope that this information helps you make an informed decision
						when shopping on our website. If you have any further questions or
						concerns, please feel free to contact our customer support team.
						<br />
						We're here to assist you and provide you with the best possible
						shopping experience.
					</p>
				</div>
			</div>
		</>
	)
}

export default DeliveryPage
