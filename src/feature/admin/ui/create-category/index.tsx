import { useEffect } from 'react'
import { useCreateCategoryMutation } from 'entities/admin'
import { AttributeForm } from 'entities/admin'
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
			const formData = new FormData()
			formData.append('name', data.name)
			formData.append('photoUrl', data.photoUrl[0])

			await createCategory(formData).unwrap()
		} catch (error) {}
	}

	return <AttributeForm title={'Category'} onSubmitForm={onSubmitForm} />
}

export { CreateCategory }
