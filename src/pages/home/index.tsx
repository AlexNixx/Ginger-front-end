import { ProductGrid } from 'widgets/product-grid'
import styles from './HomePage.module.scss'

const HomePage = () => {
	return (
		<div className={styles.page}>
			<ProductGrid />
		</div>
	)
}

export default HomePage
