import { FC, useEffect } from 'react'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'

import { ShippingAddressFormValues, ShippingAddress } from 'entities/user'

import { Button } from 'shared/ui/button'
import { ErrorMessage } from 'shared/ui/error-message'
import { Input } from 'shared/ui/input'
import Select from 'react-select'

import { getValue, Option } from 'shared/lib/utils/getValue'
import { CountryOptions } from 'shared/const/countryOption'

import styles from './UpdateUserAddressForm.module.scss'

interface UpdateUserAddressFormProps {
	onSubmitForm: (addressData: ShippingAddressFormValues) => void
	userAddress?: ShippingAddress
}

export const UpdateUserAddressForm: FC<UpdateUserAddressFormProps> = ({
	onSubmitForm,
	userAddress
}) => {
	const {
		formState: { isSubmitSuccessful },
		reset,
		control,
		handleSubmit
	} = useForm<ShippingAddressFormValues>({
		mode: 'onChange'
	})

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset()
		}
	}, [isSubmitSuccessful, reset])

	const onSubmit: SubmitHandler<ShippingAddressFormValues> = addressData => {
		onSubmitForm(addressData)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Controller
				control={control}
				name='address'
				defaultValue={userAddress?.address}
				rules={{
					required: 'Address is required',
					minLength: {
						value: 5,
						message: 'Address must be more than 5 characters'
					},
					maxLength: {
						value: 50,
						message: 'Address must be less than 50 characters'
					}
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<Input
							type='text'
							placeholder='Address'
							value={value}
							onChange={onChange}
							key={userAddress?.address}
						/>
						<ErrorMessage message={error?.message} />
					</>
				)}
			/>
			<Controller
				control={control}
				name='city'
				defaultValue={userAddress?.city}
				rules={{
					required: 'City is required',
					minLength: {
						value: 2,
						message: 'City must be more than 2 characters'
					},
					maxLength: {
						value: 20,
						message: 'City must be less than 20 characters'
					}
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<Input
							type='text'
							placeholder='City'
							value={value}
							onChange={onChange}
							key={userAddress?.city}
						/>
						<ErrorMessage message={error?.message} />
					</>
				)}
			/>
			<Controller
				control={control}
				name='postalCode'
				defaultValue={userAddress?.postalCode}
				rules={{
					required: 'Postal Code is required',
					pattern: {
						value: /^[A-Z0-9]{1,10}$/,
						message: 'Invalid post code'
					},
					minLength: {
						value: 4,
						message: 'Postal Code must be more than 4 characters'
					},
					maxLength: {
						value: 10,
						message: 'Postal Code must be less than 10 characters'
					}
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<Input
							type='text'
							placeholder='Postal Code'
							value={value}
							onChange={onChange}
							key={userAddress?.postalCode}
						/>
						<ErrorMessage message={error?.message} />
					</>
				)}
			/>
			<Controller
				control={control}
				name='country'
				defaultValue={userAddress?.country}
				rules={{ required: 'Country is required' }}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<Select
							placeholder='Country'
							classNamePrefix='custom-select'
							options={CountryOptions}
							value={getValue(value, CountryOptions)}
							noOptionsMessage={() => 'country not found'}
							onChange={newValue => onChange((newValue as Option).value)}
							isSearchable={true}
							key={userAddress?.country}
						/>
						<ErrorMessage message={error?.message} />
					</>
				)}
			/>

			<Button primary type='submit'>
				Update Address
			</Button>
		</form>
	)
}
