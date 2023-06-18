import { FC, PropsWithChildren, memo } from 'react'
import styles from './Badge.module.scss'

import { motion, AnimatePresence } from 'framer-motion'

interface BadgeProps extends PropsWithChildren {
	number: number
}

export const Badge: FC<BadgeProps> = memo(({ number, children }) => {
	return (
		<div className={styles.icon}>
			{children}
			<AnimatePresence>
				{number > 0 && (
					<motion.span
						className={styles.iconNumber}
						animate={{ scale: 1 }}
						initial={{ scale: 0 }}
						exit={{ scale: 0 }}
					>
						{number > 100 ? '...' : number}
					</motion.span>
				)}
			</AnimatePresence>
		</div>
	)
})
