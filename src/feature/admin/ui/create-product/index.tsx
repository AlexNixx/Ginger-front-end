import { useEffect } from 'react'
import { ProductForm } from 'entities/admin'
import { getOptions } from '../../lib/getOptions'

import {
	useGetAllBrandQuery,
	useGetAllCategoryQuery,
	useGetAllColorQuery,
	useCreateProductMutation
} from 'entities/admin'

import { toast } from 'react-hot-toast'

const CreateProduct = () => {
	const [createProduct, { isLoading, isSuccess, error, isError }] =
		useCreateProductMutation()

	const { data: categories } = useGetAllCategoryQuery()
	const { data: brands } = useGetAllBrandQuery()
	const { data: colors } = useGetAllColorQuery()

	useEffect(() => {
		if (isSuccess) {
			toast.success('Product created!')
		}
		if (isError) {
			toast.error((error as any).data.message)
		}
	}, [isLoading, isSuccess, isError, error])

	const onSubmitForm = async (data: any) => {
		try {
			const formData = new FormData()
			formData.append('title', data.title)
			formData.append('price', data.price)
			formData.append('category', data.category)
			formData.append('brand', data.brand)
			formData.append('color', data.color)
			formData.append('isStock', data.inStock)
			formData.append('deviceInfo', JSON.stringify(data.deviceInfo))
			formData.append('photoUrl', data.photoUrl[0])

			await createProduct(formData).unwrap()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<ProductForm
			onSubmitForm={onSubmitForm}
			categoryOption={getOptions(categories)}
			brandOption={getOptions(brands)}
			colorOption={getOptions(colors)}
		/>
	)
}

export { CreateProduct }
