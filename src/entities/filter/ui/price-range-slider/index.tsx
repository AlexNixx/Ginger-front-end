import React, {
	ChangeEvent,
	FC,
	memo,
	useCallback,
	useEffect,
	useMemo,
	useState
} from 'react'

import { Range } from 'react-range'

import { IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types'

import { Input } from 'shared/ui/input'
import { SliderTrack } from 'shared/ui/slider/slider-track'
import { SliderThumb } from 'shared/ui/slider/slider-thumb'
import { useDebounce } from 'shared/lib/hooks/useDebounce'

import { sanitizeValues } from '../../utils/sanitizeValues'

import styles from './PriceRangeSlider.module.scss'

interface PriceRangeSliderProps {
	min: number
	max: number
	step: number
	values: number[]
	onChange: (values: number[]) => void
}

export const PriceRangeSlider: FC<PriceRangeSliderProps> = React.memo(
	({ min, max, step, values, onChange }) => {
		const [inputValues, setInputValues] = useState<number[]>(values)
		const debouncedValue = useDebounce<number[]>(inputValues, 500)

		const handleChange = useCallback((newValues: number[]) => {
			setInputValues(newValues)
		}, [])

		useEffect(() => {
			onChange(debouncedValue)
		}, [debouncedValue, onChange])

		const handleRenderTrack: FC<IRenderTrackParams> = ({ props, children }) => {
			return (
				<SliderTrack min={min} max={max} values={inputValues} props={props}>
					{children}
				</SliderTrack>
			)
		}

		const handleRenderThumb: FC<IRenderThumbParams> = ({ index, props }) => {
			return <SliderThumb key={index} props={props} />
		}

		return (
			<div className={styles.rangeContainer}>
				<div className={styles.inputContainer}>
					<Input
						type='number'
						min={min}
						max={max}
						step={step}
						value={inputValues[0]}
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							const sanitizedValue = sanitizeValues(
								parseInt(e?.target.value || String(min)),
								min,
								max
							)
							handleChange([sanitizedValue, inputValues[1]])
						}}
					/>
					<span>—</span>
					<Input
						type='number'
						min={min}
						max={max}
						step={step}
						value={inputValues[1]}
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							const sanitizedValue = sanitizeValues(
								parseInt(e?.target.value || String(min)),
								min,
								max
							)
							handleChange([inputValues[0], sanitizedValue])
						}}
					/>
				</div>
				<div className={styles.rangeContainer}>
					<Range
						values={inputValues}
						min={min}
						max={max}
						step={step}
						onChange={newValues => handleChange(newValues)}
						renderTrack={handleRenderTrack}
						renderThumb={handleRenderThumb}
					/>
				</div>
			</div>
		)
	}
)
