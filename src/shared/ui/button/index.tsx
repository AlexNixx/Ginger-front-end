import { ButtonHTMLAttributes, FC, PropsWithChildren, memo } from 'react'

import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	primary?: boolean
}

export const Button: FC<PropsWithChildren<ButtonProps>> = memo(
	({ children, primary = false, ...props }) => {
		return (
			<button
				{...props}
				className={
					primary ? `${styles.button} ${styles.primary}` : styles.button
				}
			>
				{children}
			</button>
		)
	}
)
