import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

import { clearFilters } from 'entities/filter'

import { Button } from 'shared/ui/button'

export const ClearFilters = () => {
	const dispatch = useAppDispatch()

	const handleClearFilters = () => {
		dispatch(clearFilters())
	}

	return <Button onClick={handleClearFilters}>Clear</Button>
}
