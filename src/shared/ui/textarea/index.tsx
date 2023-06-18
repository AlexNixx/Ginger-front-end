import { FC, TextareaHTMLAttributes } from 'react'

import styles from './TextArea.module.scss'

export const TextArea: FC<
	TextareaHTMLAttributes<HTMLTextAreaElement>
> = props => {
	return (
		<div className={styles.textareaGroup}>
			<textarea {...props} className={styles.textarea} />
		</div>
	)
}
