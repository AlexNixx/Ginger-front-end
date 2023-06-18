import { CSSProperties } from 'react'
import styles from './Skeleton.module.scss'

interface SkeletonProps {
	height?: string | number
	width?: string | number
	border?: string
}

export const Skeleton = ({ height, width, border }: SkeletonProps) => {
	const style: CSSProperties = {
		width,
		height,
		borderRadius: border
	}
	return <div className={styles.skeleton} style={style}></div>
}
