import { FC } from 'react'

import styles from './Pagination.module.scss'

interface PaginationProps {
	page: number
	totalPages: number
	handlePagination: (page: number) => void
}

export const Pagination: FC<PaginationProps> = ({
	page,
	totalPages,
	handlePagination
}) => {
	if (totalPages < 1) return null

	return (
		<div className={styles.paginationWrapper}>
			{page !== 1 && (
				<button
					onClick={() => handlePagination(page - 1)}
					type='button'
					className={`${styles.pageItem} ${styles.sides}`}
				>
					&lt;
				</button>
			)}

			<button
				onClick={() => handlePagination(1)}
				type='button'
				className={
					page === 1 ? `${styles.active} ${styles.pageItem}` : styles.pageItem
				}
			>
				1
			</button>

			{page > 3 && <span>...</span>}

			{page === totalPages && totalPages > 3 && (
				<button
					onClick={() => handlePagination(page - 2)}
					type='button'
					className={styles.pageItem}
				>
					{page - 2}
				</button>
			)}

			{page > 2 && (
				<button
					onClick={() => handlePagination(page - 1)}
					type='button'
					className={styles.pageItem}
				>
					{page - 1}
				</button>
			)}

			{page !== 1 && page !== totalPages && (
				<button
					onClick={() => handlePagination(page)}
					type='button'
					className={[styles.pageItem, styles.active].join(' ')}
				>
					{page}
				</button>
			)}

			{page < totalPages - 1 && (
				<button
					onClick={() => handlePagination(page + 1)}
					type='button'
					className={styles.pageItem}
				>
					{page + 1}
				</button>
			)}

			{page === 1 && totalPages > 3 && (
				<button
					onClick={() => handlePagination(page + 2)}
					type='button'
					className={styles.pageItem}
				>
					{page + 2}
				</button>
			)}

			{page < totalPages - 2 && <span>...</span>}

			<button
				onClick={() => handlePagination(totalPages)}
				type='button'
				className={
					page === totalPages
						? `${styles.active} ${styles.pageItem}`
						: styles.pageItem
				}
			>
				{totalPages}
			</button>

			{page !== totalPages && (
				<button
					onClick={() => handlePagination(page + 1)}
					type='button'
					className={[styles.pageItem, styles.sides].join(' ')}
				>
					&gt;
				</button>
			)}
		</div>
	)
}
