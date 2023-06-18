import { FC, PropsWithChildren, memo, useState } from 'react'

import { FiChevronDown } from 'react-icons/fi'

import { motion, AnimatePresence } from 'framer-motion'

import styles from './Accordion.module.scss'

interface AccordionProps {
	title: string
	isOpen?: boolean
}

export const Accordion: FC<PropsWithChildren<AccordionProps>> = memo(
	({ title, isOpen = false, children }) => {
		const [open, setOpen] = useState<boolean>(isOpen)

		const handleOpen = () => setOpen(!open)

		const arrowVariants = {
			open: { rotate: 180 },
			closed: { rotate: 0 }
		}

		return (
			<motion.div className={styles.accordion}>
				<header className={styles.header} onClick={handleOpen}>
					<h1 className={styles.title}>{title}</h1>
					<motion.i
						animate={open ? 'open' : 'closed'}
						variants={arrowVariants}
						transition={{ duration: 0.35 }}
					>
						<FiChevronDown />
					</motion.i>
				</header>
				<AnimatePresence>
					{open && (
						<motion.div
							className={styles.content}
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.35 }}
						>
							<div className={styles.contendBody}>{children}</div>
						</motion.div>
					)}
				</AnimatePresence>
				<span className={styles.line} />
			</motion.div>
		)
	}
)
