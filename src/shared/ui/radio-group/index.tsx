import React from 'react'

import styles from './RadioGroup.module.scss'

interface Option {
	value: string
	label: string
	disabled?: boolean
}

interface RadioGroupProps {
	options: Option[]
	selectedOption: string
	onOptionSelect: (value: string) => void
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
	options,
	selectedOption,
	onOptionSelect
}) => {
	return (
		<div className={styles.radioGroup}>
			{options.map(option => (
				<div key={option.value} className={styles.radio}>
					<input
						type='radio'
						id={option.value}
						name='radio-group'
						value={option.value}
						disabled={option.disabled ? option.disabled : false}
						checked={selectedOption === option.value}
						onChange={() => onOptionSelect(option.value)}
					/>
					<label htmlFor={option.value} className={styles.label}>
						{option.label}
					</label>
				</div>
			))}
		</div>
	)
}
