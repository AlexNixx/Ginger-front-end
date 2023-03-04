import { FC, useEffect } from 'react'
import { IModalProps } from '../lib/types'
import { GrClose } from 'react-icons/gr'

import styles from './Modal.module.scss'

const Modal: FC<IModalProps> = ({ isOpen, hide, headerText, children }) => {
	const onKeyDown = (event: KeyboardEvent) => {
		if (event.keyCode === 27 && isOpen) {
			hide()
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown, false)
		return () => {
			document.removeEventListener('keydown', onKeyDown, false)
		}
	}, [isOpen])

	const modal = (
		<div className={styles.overlay} onClick={hide}>
			<div
				aria-modal
				className={styles.model}
				onClick={e => e.stopPropagation()}
			>
				<header className={styles.header}>
					<h2 className={styles.headerText}>{headerText}</h2>
					<button onClick={hide} className={styles.closeBtn}>
						<GrClose />
					</button>
				</header>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	)

	return isOpen ? modal : null
}

export { Modal }
