import { useEffect } from 'react'
import { useCreateBrandMutation } from 'feature/admin/api/adminApi'
import { FeatureForm } from 'entities/admin-forms'
import { toast } from 'react-hot-toast'
import { BrandFormValues } from 'feature/admin/lib/types'

const CreateBrand = () => {
	const [createBrand, { isLoading, isSuccess, error, isError }] =
		useCreateBrandMutation()

	useEffect(() => {
		if (isSuccess) {
			toast.success('Brand created!')
		}
		if (isError) {
			toast.error((error as any).data.message)
		}
	}, [isLoading, isSuccess, isError, error])

	const onSubmitForm = async (data: BrandFormValues) => {
		try {
			await createBrand(data).unwrap()
		} catch (error) {}
	}

	return (
		<FeatureForm
			title={'Brand'}
			isColorForm={false}
			onSubmitForm={onSubmitForm}
		/>
	)
}

export { CreateBrand }
