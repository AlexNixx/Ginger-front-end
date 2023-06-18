import React, { FC, memo } from 'react'
import { IThumbProps } from 'react-range/lib/types'

import styles from './SliderThumb.module.scss'

interface SliderThumbProps {
	props: IThumbProps
}

export const SliderThumb: FC<SliderThumbProps> = React.memo(({ props }) => {
	return <div {...props} className={styles.thumb}></div>
})
