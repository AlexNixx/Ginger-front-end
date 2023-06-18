import { useTheme } from 'shared/lib/hooks/useTheme'

import styles from './ToggleTheme.module.scss'
import { Sun, Moon } from './icon'
import { memo } from 'react'

export const ToggleTheme = memo(() => {
	const { toggleTheme, isLight } = useTheme()

	return (
		<label className={styles.switch}>
			<span className={styles.sun}>
				<Sun />
			</span>
			<span className={styles.moon}>
				<Moon />
			</span>
			<input
				type='checkbox'
				className={styles.input}
				checked={isLight}
				onChange={toggleTheme}
			/>
			<span className={styles.slider} />
		</label>
	)
})
