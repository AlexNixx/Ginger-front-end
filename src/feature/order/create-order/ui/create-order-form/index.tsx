import { FC, useEffect } from 'react'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'

import Select from 'react-select'
import { Button } from 'shared/ui/button'
import { ErrorMessage } from 'shared/ui/error-message'
import { Input } from 'shared/ui/input'
import { RadioGroup } from 'shared/ui/radio-group'

import styles from './ShippingForm.module.scss'

import { User } from 'entities/user'
import { CountryOptions } from 'shared/const/countryOption'

import { getValue, Option } from 'shared/lib/utils/getValue'

import { CreateOrderFormValue } from 'entities/order'

interface CheckoutFormProps {
	onSubmitForm: (data: CreateOrderFormValue) => void
	paymentOptions: Option[]
	userData: User
}

export const CreateOrderForm: FC<CheckoutFormProps> = ({
	onSubmitForm,
	paymentOptions,
	userData
}) => {
	const {
		formState: { isSubmitSuccessful },
		reset,
		control,
		handleSubmit
	} = useForm<CreateOrderFormValue>({
		mode: 'onChange'
	})

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset()
		}
	}, [isSubmitSuccessful, reset])

	const onSubmit: SubmitHandler<CreateOrderFormValue> = data => {
		onSubmitForm(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<div className={styles.formBlock}>
				<h2 className={styles.title}>1. Contact info</h2>
				<div className={styles.line}>
					<Controller
						control={control}
						name='customerData.name'
						defaultValue={userData.name}
						rules={{
							required: 'Name is required',
							minLength: {
								value: 2,
								message: 'Name must be more than 2 characters'
							},
							maxLength: {
								value: 20,
								message: 'Name must be less than 20 characters'
							}
						}}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<div>
								<Input
									type='text'
									placeholder='Name'
									value={value}
									onChange={onChange}
								/>
								<ErrorMessage message={error?.message} />
							</div>
						)}
					/>
					<Controller
						control={control}
						name='customerData.surname'
						defaultValue={userData.surname}
						rules={{
							required: 'Surname is required',
							minLength: {
								value: 2,
								message: 'Surname must be more than 2 characters'
							},
							maxLength: {
								value: 20,
								message: 'Surname must be less than 20 characters'
							}
						}}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<div>
								<Input
									type='text'
									placeholder='Surname'
									value={value}
									onChange={onChange}
								/>
								<ErrorMessage message={error?.message} />
							</div>
						)}
					/>
				</div>
				<Controller
					control={control}
					name='customerData.email'
					defaultValue={userData.email}
					rules={{
						required: 'Email is required',
						pattern: {
							value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
							message: 'Invalid email address'
						}
					}}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<>
							<Input
								type='text'
								placeholder='Email'
								value={value}
								onChange={onChange}
							/>
							<ErrorMessage message={error?.message} />
						</>
					)}
				/>
			</div>
			<div className={styles.formBlock}>
				<h2 className={styles.title}>2. Delivery</h2>

				<Controller
					control={control}
					name='address.address'
					defaultValue={userData.address.address}
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
							/>
							<ErrorMessage message={error?.message} />
						</>
					)}
				/>
				<Controller
					control={control}
					name='address.city'
					defaultValue={userData.address.city}
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
							/>
							<ErrorMessage message={error?.message} />
						</>
					)}
				/>
				<Controller
					control={control}
					name='address.postalCode'
					defaultValue={userData.address.postalCode}
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
							/>
							<ErrorMessage message={error?.message} />
						</>
					)}
				/>
				<Controller
					control={control}
					name='address.country'
					defaultValue={userData.address.country}
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
							/>
							<ErrorMessage message={error?.message} />
						</>
					)}
				/>
			</div>
			<div className={styles.formBlock}>
				<h2 className={styles.title}>3. Payment Method</h2>
				<Controller
					control={control}
					name='paymentMethod'
					defaultValue={'paypal'}
					rules={{ required: 'Payment Method is require' }}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<>
							<RadioGroup
								options={paymentOptions}
								selectedOption={value}
								onOptionSelect={onChange}
							/>
							<ErrorMessage message={error?.message} />
						</>
					)}
				/>
			</div>
			<Button primary type='submit'>
				Checkout
			</Button>
		</form>
	)
}
