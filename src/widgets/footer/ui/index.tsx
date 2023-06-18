import { Logo } from 'shared/ui/logo'

import styles from './Footer.module.scss'

import {
	FaFacebookSquare,
	FaYoutube,
	FaFacebookMessenger
} from 'react-icons/fa'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.column} ${styles.mainColumn}`}>
				<Logo />
				<div className={styles.description}>
					<div className={styles.social}>
						<FaFacebookSquare />
						<FaYoutube />
						<FaFacebookMessenger />
					</div>
					<p>© Copyright 2023</p>
					<p>All rights reserved</p>
				</div>
			</div>

			<div className={styles.column}>
				<ul>
					<li>Catalog and Category</li>
					<li>Phone</li>
					<li>Laptop</li>
					<li>Watch</li>
					<li>Consoles</li>
					<li>Tablet</li>
					<li>Device</li>
					<li>Headphones</li>
				</ul>
			</div>

			<div className={styles.column}>
				<ul>
					<li>Shipping & Delivery</li>
					<li>Where is my Order?</li>
					<li>Return & Replace</li>
					<li>Warranty</li>
				</ul>
				<ul>
					<li>About</li>
					<li>Out Shops?</li>
					<li>Blog & News</li>
				</ul>
			</div>

			<div className={styles.column}>
				<ul>
					<li>Contacts</li>
					<li>7 Kambeldon St, New York, USA</li>
					<li>
						<a href='mailto: support@gadgetlove.com'>support@gadgetlove.com</a>
					</li>
					<li>
						<a href='tel:+19886004050'>+1 (988) 600 40 50</a>
					</li>
				</ul>
				<ul>
					<li>Help & FAC</li>
					<li>Feedback & Reviews</li>
					<li>Contact Support</li>
				</ul>
			</div>
		</footer>
	)
}
