import { FC, memo, useCallback, useState } from 'react'

import { Option } from 'shared/lib/utils/getValue'

import styles from './Checkbox.module.scss'

interface CheckboxProps {
	option: Option
	isChecked: boolean
	handleCheckboxChange: (value: string, checked: boolean) => void
}

export const Checkbox: FC<CheckboxProps> = ({
	option,
	isChecked,
	handleCheckboxChange
}) => {
	const handleCheckboxClick = () => {
		handleCheckboxChange(option.value, !isChecked)
	}

	return (
		<div className={styles.checkbox}>
			<label className={styles.container}>
				<input
					type='checkbox'
					value={option.value}
					checked={isChecked}
					onChange={handleCheckboxClick}
				/>
				<span className={styles.checkmark}></span>
				{option.label}
			</label>
		</div>
	)
}
