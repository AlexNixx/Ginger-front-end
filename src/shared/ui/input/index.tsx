import { FC, InputHTMLAttributes } from 'react'

import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	icon?: React.ReactNode
}

export const Input: FC<InputProps> = ({ icon, ...props }) => {
	return (
		<div className={styles.inputContainer}>
			<input {...props} className={styles.input} />
			{icon ? <i className={styles.icon}>{icon}</i> : null}
		</div>
	)
}
