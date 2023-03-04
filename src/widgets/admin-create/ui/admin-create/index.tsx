import {
	CreateBrand,
	CreateCategory,
	CreateColor,
	CreateProduct
} from 'feature/admin'
import { CreateFeature } from '../create-feature'

import styles from './AdminCreate.module.scss'

const AdminCreate = () => {
	return (
		<div className={styles.wrapper}>
			<CreateFeature
				title={'Create Category'}
				modalContent={<CreateCategory />}
			/>
			<CreateFeature title={'Create Brand'} modalContent={<CreateBrand />} />
			<CreateFeature title={'Create Color'} modalContent={<CreateColor />} />
			<CreateFeature
				title={'Create Product'}
				modalContent={<CreateProduct />}
			/>
		</div>
	)
}

export { AdminCreate }
