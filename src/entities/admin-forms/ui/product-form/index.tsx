import { getValue } from 'entities/admin-forms/lib/getValue'
import {
	IFormProps,
	ProductFormValues,
	Option
} from 'entities/admin-forms/lib/types'
import {
	useForm,
	SubmitHandler,
	useFieldArray,
	Controller
} from 'react-hook-form'
import ReactSelect from 'react-select'

import styles from './ProductForm.module.scss'

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
		mode: 'onBlur',
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
				<input
					{...register('title', {
						required: 'title is Required!'
					})}
					placeholder='Title'
				/>
				{errors?.title && (
					<p className={styles.error}>{errors.title.message as string}</p>
				)}
				<input
					{...register('price', {
						required: 'price is Required!'
					})}
					placeholder='Price'
				/>
				{errors?.price && (
					<p className={styles.error}>{errors.price.message as string}</p>
				)}

				<Controller
					control={control}
					name='category'
					rules={{ required: 'category is required' }}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<div>
							<ReactSelect
								placeholder='Category'
								options={categoryOption}
								value={getValue(value, categoryOption)}
								noOptionsMessage={() => 'category not found'}
								onChange={newValue => onChange((newValue as Option).value)}
							/>
							{error && <p>{error.message}</p>}
						</div>
					)}
				/>
				<Controller
					control={control}
					name='brand'
					rules={{ required: 'brand is required' }}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<div>
							<ReactSelect
								placeholder='Brand'
								options={brandOption}
								value={getValue(value, brandOption)}
								noOptionsMessage={() => 'brands not found'}
								onChange={newValue => onChange((newValue as Option).value)}
							/>
							{error && <p>{error.message}</p>}
						</div>
					)}
				/>
				<Controller
					control={control}
					name='color'
					rules={{ required: 'color is required' }}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<div>
							<ReactSelect
								placeholder='Color'
								options={colorOption}
								value={getValue(value, colorOption)}
								noOptionsMessage={() => 'colors not found'}
								onChange={newValue => onChange((newValue as Option).value)}
							/>
							{error && <p>{error.message}</p>}
						</div>
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

				<br />

				<ul>
					{fields.map((item, index) => (
						<li key={item.id}>
							<input
								{...register(`deviceInfo[${index}].title`)}
								placeholder={'title'}
							/>
							<input
								{...register(`deviceInfo[${index}].description`)}
								placeholder={'description'}
							/>
							<button type='button' onClick={() => remove(index)}>
								Delete
							</button>
						</li>
					))}
				</ul>

				<button
					type='button'
					onClick={() =>
						append({ title: 'Memory', description: '16GB DDR4 RAM' })
					}
				>
					Add device info field
				</button>
				<br />

				<button type='submit'>Create Product</button>
			</form>
		</div>
	)
}

export { ProductForm }
