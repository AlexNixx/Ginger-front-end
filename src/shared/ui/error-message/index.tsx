import { FC } from 'react'
import { BiError } from 'react-icons/bi'

import styles from './ErrorMessage.module.scss'

interface ErrorMessageProps {
	message?: string
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
	return (
		<>
			{message ? (
				<span className={styles.error}>
					<BiError />
					{message}
				</span>
			) : null}
		</>
	)
}
