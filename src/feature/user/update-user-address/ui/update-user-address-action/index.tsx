import { useEffect } from 'react'

import { toast } from 'react-hot-toast'

import {
	getUserAddress,
	setUserAddress,
	useUpdateUserAddressMutation,
	ShippingAddressFormValues
} from 'entities/user'

import { UpdateUserAddressForm } from '../update-user-address-form'

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

import { useAppSelector } from 'shared/lib/hooks/useAppSelector'

export const UpdateUserAddress = () => {
	const [updateAddress, { isLoading, isSuccess, error, isError }] =
		useUpdateUserAddressMutation()

	const userAddress = useAppSelector(getUserAddress)

	const dispatch = useAppDispatch()

	useEffect(() => {
		if (isSuccess) {
			toast.success('Address successful updated!')
		}
		if (isError) {
			toast.error((error as any).data.message)
		}
	}, [isLoading, isSuccess, isError, error])

	const onSubmitForm = async (addressData: ShippingAddressFormValues) => {
		try {
			await updateAddress(addressData).unwrap()
			dispatch(setUserAddress(addressData))
		} catch (error) {}
	}
	return (
		<UpdateUserAddressForm
			onSubmitForm={onSubmitForm}
			userAddress={userAddress}
			key={userAddress?.address}
		/>
	)
}
