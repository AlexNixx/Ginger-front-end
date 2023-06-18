import { FC, memo } from 'react'
import { DeviceInfo } from '../../api/types'

import styles from './ProductCharacteristics.module.scss'

interface ProductCharacteristicsProps {
	deviceInfo: DeviceInfo[]
}

export const ProductCharacteristics: FC<ProductCharacteristicsProps> = memo(
	({ deviceInfo }) => {
		return (
			<div className={styles.productCharacteristics}>
				<h1 className={styles.title}>Product Specification</h1>
				<ul className={styles.list}>
					{deviceInfo?.map(info => (
						<li key={info._id} className={styles.specification}>
							<p className={styles.title}>{info.title}</p>
							<p className={styles.desc}>{info.description}</p>
						</li>
					))}
				</ul>
			</div>
		)
	}
)
