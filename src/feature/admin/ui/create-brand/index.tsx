import { useEffect } from 'react'
import { useCreateBrandMutation } from 'entities/admin'
import { AttributeForm } from 'entities/admin'
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
			const formData = new FormData()
			formData.append('name', data.name)
			formData.append('photoUrl', data.photoUrl[0])

			await createBrand(formData).unwrap()
		} catch (error) {}
	}

	return <AttributeForm title={'Brand'} onSubmitForm={onSubmitForm} />
}

export { CreateBrand }
