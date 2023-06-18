import {
	CreateBrand,
	CreateCategory,
	CreateColor,
	CreateProduct
} from 'feature/admin'

import { CreateModal } from 'entities/admin'

import styles from './AdminCreate.module.scss'

const AdminCreate = () => {
	return (
		<div className={styles.wrapper}>
			<CreateModal
				title={'Create Category'}
				modalContent={<CreateCategory />}
			/>
			<CreateModal title={'Create Brand'} modalContent={<CreateBrand />} />
			<CreateModal title={'Create Color'} modalContent={<CreateColor />} />
			<CreateModal title={'Create Product'} modalContent={<CreateProduct />} />
		</div>
	)
}

export { AdminCreate }
