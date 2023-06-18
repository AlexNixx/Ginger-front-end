import { FC } from 'react'

import styles from './SearchSlugTag.module.scss'

interface SearchSlugTagProps {
	slug: string
}

export const SearchSlugTag: FC<SearchSlugTagProps> = ({ slug }) => {
	return (
		<h2 className={styles.tag}>
			<span>Search results: </span>
			{slug}
		</h2>
	)
}
