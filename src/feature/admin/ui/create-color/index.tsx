import { useEffect } from 'react'
import { ColorForm, useCreateColorMutation } from 'entities/admin'

import { toast } from 'react-hot-toast'
import { ColorFormValues } from 'feature/admin/lib/types'

const CreateColor = () => {
	const [createColor, { isLoading, isSuccess, error, isError }] =
		useCreateColorMutation()

	useEffect(() => {
		if (isSuccess) {
			toast.success('Color created!')
		}
		if (isError) {
			toast.error((error as any).data.message)
		}
	}, [isLoading, isSuccess, isError, error])

	const onSubmitForm = async (data: ColorFormValues) => {
		try {
			await createColor(data).unwrap()
		} catch (error) {}
	}

	return <ColorForm title={'Color'} onSubmitForm={onSubmitForm} />
}

export { CreateColor }
