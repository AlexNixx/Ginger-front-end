import { getValue } from '../../lib/getValue'
import { IFormProps, ProductFormValues, Option } from '../../types'
import {
	useForm,
	SubmitHandler,
	useFieldArray,
	Controller
} from 'react-hook-form'
import Select from 'react-select'

import styles from './ProductForm.module.scss'
import { Input } from 'shared/ui/input'
import { Button } from 'shared/ui/button'
import { ErrorMessage } from 'shared/ui/error-message'

const ProductForm = ({
	onSubmitForm,
	categoryOption,
	brandOption,
	colorOption
}: IFormProps) => {
	const {
		register,
		formState: { errors, isSubmitSuccessful },
		reset,
		handleSubmit,
		control
	} = useForm<ProductFormValues>({
		mode: 'onChange',
		defaultValues: { inStock: true }
	})

	const { fields, append, remove } = useFieldArray<ProductFormValues>({
		control,
		name: 'deviceInfo'
	})

	const onSubmit: SubmitHandler<ProductFormValues> = data => {
		onSubmitForm(data)
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Controller
					control={control}
					name='title'
					defaultValue=''
					rules={{
						required: 'Title is required!'
					}}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<>
							<Input
								type='text'
								placeholder='Title'
								onChange={onChange}
								value={value}
							/>
							<ErrorMessage message={error?.message} />
						</>
					)}
				/>
				<Controller
					control={control}
					name='price'
					defaultValue={0}
					rules={{
						required: 'Price is required!'
					}}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<>
							<Input
								type='text'
								placeholder='Price'
								onChange={onChange}
								value={value}
							/>
							<ErrorMessage message={error?.message} />
						</>
					)}
				/>
				<Controller
					control={control}
					name='category'
					defaultValue=''
					rules={{ required: 'category is required' }}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<>
							<Select
								placeholder='Category'
								options={categoryOption}
								value={getValue(value, categoryOption)}
								noOptionsMessage={() => 'category not found'}
								onChange={newValue => onChange((newValue as Option).value)}
							/>
							<ErrorMessage message={error?.message} />
						</>
					)}
				/>
				<Controller
					control={control}
					name='brand'
					defaultValue=''
					rules={{ required: 'brand is required' }}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<>
							<Select
								placeholder='Brand'
								options={brandOption}
								value={getValue(value, brandOption)}
								noOptionsMessage={() => 'brands not found'}
								onChange={newValue => onChange((newValue as Option).value)}
							/>
							<ErrorMessage message={error?.message} />
						</>
					)}
				/>
				<Controller
					control={control}
					name='color'
					defaultValue=''
					rules={{ required: 'color is required' }}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<>
							<Select
								placeholder='Color'
								options={colorOption}
								value={getValue(value, colorOption)}
								noOptionsMessage={() => 'colors not found'}
								onChange={newValue => onChange((newValue as Option).value)}
							/>
							<ErrorMessage message={error?.message} />
						</>
					)}
				/>

				<label>
					In stock
					<input
						type='checkbox'
						value={'In stock'}
						{...register('inStock', {
							required: 'price is Required!'
						})}
					/>
				</label>

				<input type='file' {...register('photoUrl')} />

				<ul>
					{fields.map((item, index) => (
						<li key={item.id}>
							<Controller
								control={control}
								name={`deviceInfo[${index}].title`}
								rules={{
									required: 'Title is required!'
								}}
								render={({
									field: { onChange, value },
									fieldState: { error }
								}) => (
									<>
										<Input
											type='text'
											placeholder='Title'
											onChange={onChange}
											value={value}
										/>
										<ErrorMessage message={error?.message} />
									</>
								)}
							/>
							<Controller
								control={control}
								name={`deviceInfo[${index}].description`}
								rules={{
									required: 'Desc is required!'
								}}
								render={({
									field: { onChange, value },
									fieldState: { error }
								}) => (
									<>
										<Input
											type='text'
											placeholder='Desc'
											onChange={onChange}
											value={value}
										/>
										<ErrorMessage message={error?.message} />
									</>
								)}
							/>
							<button type='button' onClick={() => remove(index)}>
								Delete
							</button>
						</li>
					))}
				</ul>

				<Button
					type='button'
					onClick={() =>
						append({ title: 'Memory', description: '16GB DDR4 RAM' })
					}
				>
					Add device info field
				</Button>

				<Button type='submit' primary>
					Create Product
				</Button>
			</form>
		</div>
	)
}

export { ProductForm }
