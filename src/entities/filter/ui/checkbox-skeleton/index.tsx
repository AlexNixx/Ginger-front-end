import { Skeleton } from 'shared/ui/skeleton'
import styles from './CheckboxSkeleton.module.scss'

export const CheckBoxSkeleton = () => {
	return (
		<div className={styles.container}>
			{[...new Array(6)].map((_, index) => (
				<div key={index} className={styles.row}>
					<Skeleton height={17} width={17} />
					<Skeleton height={17} width={'100%'} />
				</div>
			))}
		</div>
	)
}
