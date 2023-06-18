import { MobileFilters } from './mobile-filters'
import { DesktopFilters } from './desktop-filters'

import { useMatchMedia } from 'shared/lib/hooks/useMatchMedia'
import { useMemo } from 'react'

export const Filters = () => {
	const { isDesktop } = useMatchMedia()

	const desktopFilters = useMemo(() => <DesktopFilters />, [])
	const mobileFilters = useMemo(() => <MobileFilters />, [])

	return <>{isDesktop ? desktopFilters : mobileFilters}</>
}
