import { FC, PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

export const WithToaster: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Toaster
				reverseOrder={true}
				containerStyle={{ marginTop: '75px' }}
				toastOptions={{
					duration: 800
				}}
			/>
			{children}
		</>
	)
}
