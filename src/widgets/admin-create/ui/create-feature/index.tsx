import { Modal } from 'entities/modal'
import { FC } from 'react'
import { useModal } from 'shared/lib/hooks/useModal'
import { IoIosCreate } from 'react-icons/io'
import styles from './CreateFeature.module.scss'

interface CreateFeatureProps {
	title: string
	modalContent: React.ReactNode
}

const CreateFeature: FC<CreateFeatureProps> = ({ title, modalContent }) => {
	const { isOpen, toggle } = useModal()

	return (
		<>
			<div onClick={toggle} className={styles.createCart}>
				<h1 className={styles.title}>{title}</h1>
				<IoIosCreate />
			</div>
			<Modal isOpen={isOpen} hide={toggle} headerText={title}>
				{modalContent}
			</Modal>
		</>
	)
}

export { CreateFeature }
