import { MdOutlineLightMode, MdOutlineNightlightRound } from 'react-icons/md'

import { useTheme } from 'shared/lib/hooks/useTheme'

import styles from './ThemeSwitcher.module.scss'

const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<button onClick={toggleTheme} className={styles.theme}>
			{theme === 'light' ? (
				<MdOutlineNightlightRound className={styles.darkIcon} />
			) : (
				<MdOutlineLightMode className={styles.lightIcon} />
			)}
			<span className={styles.title}>
				{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
			</span>
		</button>
	)
}

export { ThemeSwitcher }
