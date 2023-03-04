import { ReactNode } from 'react'

export interface IModalProps {
	isOpen: boolean
	hide: () => void
	headerText: string
	children: ReactNode
}
