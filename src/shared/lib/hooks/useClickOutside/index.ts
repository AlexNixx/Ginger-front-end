import React, { useEffect } from 'react'

interface UseClickOutsideOptions {
	elementRef: React.RefObject<HTMLElement>
	triggeredRef?: React.RefObject<HTMLElement>
	enabled?: boolean
	onOutsideClick(e: MouseEvent | TouchEvent): void
}

export const useClickOutside = ({
	elementRef,
	triggeredRef,
	enabled = false,
	onOutsideClick
}: UseClickOutsideOptions) => {
	useEffect(() => {
		if (!enabled) return

		const handleClick = (e: MouseEvent | TouchEvent) => {
			const target = e.target
			if (!(target instanceof Node)) {
				return
			}
			if (!elementRef.current) {
				return
			}

			const ignoreElements = [elementRef.current]

			if (triggeredRef?.current) {
				ignoreElements.push(triggeredRef.current)
			}

			if (!elementRef.current.contains(target)) {
				onOutsideClick(e)
			}
		}

		document.addEventListener('mousedown', handleClick)
		document.addEventListener('touchstart', handleClick)

		return () => {
			document.removeEventListener('mousedown', handleClick)
			document.removeEventListener('touchstart', handleClick)
		}
	}, [onOutsideClick, enabled])
}
