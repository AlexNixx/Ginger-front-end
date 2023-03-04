import styles from './ProductCharacteristics.module.scss'

interface IInfo {
	title: string
	description: string
	_id: number
}

interface ProductCharacteristicsProps {
	deviceInfo: IInfo[] | undefined
}

const ProductCharacteristics = ({
	deviceInfo
}: ProductCharacteristicsProps) => {
	return (
		<section className={styles.productCharact}>
			<h1 className={styles.title}>Product Specification</h1>
			{deviceInfo?.map(info => (
				<div key={info._id} className={styles.specification}>
					<p className={styles.title}>{info.title}</p>
					<p className={styles.desc}>{info.description}</p>
				</div>
			))}
		</section>
	)
}

export { ProductCharacteristics }
