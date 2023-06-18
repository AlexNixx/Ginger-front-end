import { Head } from 'shared/ui/helmet'

import styles from './AboutPage.module.scss'

const AboutPage = () => {
	return (
		<>
			<Head title={'About Page'} />

			<div className={styles.page}>
				<div className={styles.container}>
					<p>
						Welcome to our e-commerce website! We're a leading online shop for
						the latest and greatest gadgets, offering our customers a wide
						selection of innovative and high-quality products at affordable
						prices. Our mission is to provide our customers with the best
						possible shopping experience, whether they're looking for the latest
						smartphones, laptops, smartwatches, or other tech gadgets.
					</p>
					<h1 className={styles.title}>Our Shop:</h1>
					<p>
						While we don't have any physical stores, our warehouse and office
						are located at 7 Kambeldon St, New York, USA. From there, we ship
						our products worldwide, making it easy for anyone to access our wide
						range of products. We're dedicated to providing our customers with
						exceptional service and support, and we're always looking for ways
						to improve our website and product offerings to meet their needs.
					</p>
					<h1 className={styles.title}>Blog & News</h1>
					<p>
						We believe in keeping our customers informed about the latest trends
						and news in the tech industry. That's why we have a dedicated blog
						and news section on our website. Our team of writers and editors
						work hard to bring you informative and engaging content that covers
						everything from the latest product releases and reviews to tech news
						and trends. You can also find tips and tricks for getting the most
						out of your gadgets and advice on how to choose the best products
						for your needs. We update our blog and news section regularly, so be
						sure to check back often for the latest updates and insights.
					</p>
					<h1 className={styles.title}>Latest News:</h1>
					<p>
						In our latest blog post, we discuss the latest trends in wearable
						technology and how they're changing the way we interact with our
						devices. We take a deep dive into the features and functionality of
						the latest smartwatches, fitness trackers, and other wearable
						gadgets, exploring their benefits and drawbacks. We also offer some
						tips and tricks for getting the most out of your wearable devices,
						including how to customize your settings and make the most of their
						features.
					</p>

					<p>
						In other news, we're excited to announce the launch of our latest
						product, the SmartHome Hub. This all-in-one smart home solution
						allows you to control your home's lighting, temperature, security,
						and more from your smartphone or tablet. With easy setup and
						intuitive controls, the SmartHome Hub is the perfect addition to any
						smart home setup. Be sure to check it out on our website and take
						advantage of our special launch promotion!
					</p>
					<p>
						Thank you for choosing our e-commerce website for your shopping
						needs. We're committed to providing you with the best possible
						service and support, and we look forward to serving you in the
						future. If you have any questions or comments, please feel free to
						reach out to our customer support team. We're here to help!
					</p>
				</div>
			</div>
		</>
	)
}

export default AboutPage
