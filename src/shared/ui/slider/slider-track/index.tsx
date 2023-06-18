import React, { FC, PropsWithChildren, memo, useMemo } from 'react'
import { getTrackBackground } from 'react-range'
import { ITrackProps } from 'react-range/lib/types'

import styles from './SliderTrack.module.scss'

interface SliderTrackProps {
	props: ITrackProps
	min: number
	max: number
	values: number[]
}

export const SliderTrack: FC<PropsWithChildren<SliderTrackProps>> = React.memo(
	({ children, values, props, min, max }) => {
		const backgroundStyle = useMemo(
			() =>
				getTrackBackground({
					values: values,
					colors: [
						'var(--color-grey)',
						'var(--color-primary)',
						'var(--color-grey)'
					],
					min: min,
					max: max
				}),
			// eslint-disable-next-line react-hooks/exhaustive-deps
			[values]
		)

		return (
			<div
				ref={props.ref}
				className={styles.track}
				style={{ background: backgroundStyle }}
			>
				{children}
			</div>
		)
	}
)
