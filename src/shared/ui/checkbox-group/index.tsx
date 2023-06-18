import { FC } from 'react'

import { Checkbox } from 'shared/ui/checkbox'

import { Option } from 'shared/lib/utils/getValue'

import styles from './CheckboxGroup.module.scss'

interface CheckboxGroupProps {
	options: Option[]
	selectedOptions?: string[]
	onChange: (selectedOptions: string[]) => void
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
	options,
	selectedOptions = [],
	onChange
}) => {
	const handleCheckboxChange = (value: string, checked: boolean) => {
		if (checked) {
			onChange([...selectedOptions, value])
		} else {
			onChange(selectedOptions.filter(option => option !== value))
		}
	}

	return (
		<div className={styles.checkboxGroup}>
			{options.map(option => (
				<Checkbox
					key={option.value}
					option={option}
					isChecked={selectedOptions.includes(option.value)}
					handleCheckboxChange={handleCheckboxChange}
				/>
			))}
		</div>
	)
}
