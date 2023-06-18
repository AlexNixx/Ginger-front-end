import { useState } from 'react'

import { Modal } from 'shared/ui/modal'

import { IoIosCreate } from 'react-icons/io'

import styles from './CreateModal.module.scss'

interface CreateModalProps {
	title: string
	modalContent: React.ReactNode
}

const CreateModal = ({ title, modalContent }: CreateModalProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const toggle = () => setIsOpen(!isOpen)

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

export { CreateModal }
