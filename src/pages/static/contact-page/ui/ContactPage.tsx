import { Head } from 'shared/ui/helmet'
import map from 'shared/assets/images/map.jpg'

import styles from './ContactPage.module.scss'

const ContactPage = () => {
	return (
		<>
			<Head title={'Contact Page'} />

			<div className={styles.page}>
				<div className={styles.container}>
					<p>
						Thank you for your interest in contacting us! We're always happy to
						hear from our customers and help in any way we can. Here's how you
						can get in touch with us:
					</p>
					<h1 className={styles.title}>Address:</h1>
					<p>
						Our warehouse and office are located at 7 Kambeldon St, New York,
						USA. While we don't have a physical store, you can still contact us
						at this address for any inquiries or concerns.
					</p>
					<img src={map} alt='out_location' className={styles.map} />
					<h1 className={styles.title}>Email:</h1>
					<p>
						For general inquiries and support, you can reach us at{' '}
						<a href='mailto: support@gadgetlove.com'>support@gadgetlove.com</a>.
						We strive to respond to all emails as quickly as possible, usually
						within 24 hours. If you have a specific question or concern about an
						order, please include your order number in your email so that we can
						better assist you.
					</p>
					<h1 className={styles.title}>Phone:</h1>
					<p>
						If you prefer to speak with us directly, you can reach our customer
						support team by phone at
						<br />
						<a href='tel:+19886004050'>+1 (988) 600 40 50</a>. Our phone support
						hours are Monday to Friday, 9am-5pm EST. If you call outside of
						these hours, please leave a voicemail, and we'll get back to you as
						soon as possible.
					</p>
					<p>
						We value our customers' feedback and strive to provide the best
						possible service and support. If you have any questions, concerns,
						or feedback about our products or services, please don't hesitate to
						reach out to us. We're here to help!
					</p>
				</div>
			</div>
		</>
	)
}

export default ContactPage
