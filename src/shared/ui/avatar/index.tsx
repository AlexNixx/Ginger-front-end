import { FC, memo } from 'react'

import { HiUser } from 'react-icons/hi'

import styles from './Avatar.module.scss'

interface AvatarProps {
	username?: string
}

export const Avatar: FC<AvatarProps> = memo(({ username }) => {
	return (
		<>
			{username ? (
				<div className={styles.userIcon}>
					<span className={styles.userLetter}>
						{username?.slice(0, 1).toUpperCase()}
					</span>
				</div>
			) : (
				<HiUser className={styles.unauthorizedIcon} />
			)}
		</>
	)
})
