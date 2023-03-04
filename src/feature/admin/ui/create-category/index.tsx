import { useEffect } from 'react'
import { useCreateCategoryMutation } from 'feature/admin/api/adminApi'
import { FeatureForm } from 'entities/admin-forms'
import { toast } from 'react-hot-toast'
import { CategoryFormValues } from 'feature/admin/lib/types'

const CreateCategory = () => {
	const [createCategory, { isLoading, isSuccess, error, isError }] =
		useCreateCategoryMutation()

	useEffect(() => {
		if (isSuccess) {
			toast.success('Category created!')
		}
		if (isError) {
			toast.error((error as any).data.message)
		}
	}, [isLoading, isSuccess, isError, error])

	const onSubmitForm = async (data: CategoryFormValues) => {
		try {
			await createCategory(data).unwrap()
		} catch (error) {}
	}

	return (
		<FeatureForm
			title={'Category'}
			isColorForm={false}
			onSubmitForm={onSubmitForm}
		/>
	)
}

export { CreateCategory }
