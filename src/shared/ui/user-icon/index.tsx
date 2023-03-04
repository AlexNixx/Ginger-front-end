import styles from './UserIcon.module.scss'

interface IUserIcon {
	letter: string | undefined
}

const UserIcon = ({ letter }: IUserIcon) => {
	return (
		<div className={styles.userIcon}>
			<span className={styles.userLetter}>{letter}</span>
		</div>
	)
}

export { UserIcon }
