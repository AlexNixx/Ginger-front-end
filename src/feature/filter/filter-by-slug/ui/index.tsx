import { memo, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'

import { getSlug, setSlug } from 'entities/filter'

import { Input } from 'shared/ui/input'
import { RoutesEnum } from 'shared/const/appRoute'

import { AiOutlineSearch } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'

export const SearchFilter = memo(() => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const slug = useAppSelector(getSlug)

	const [searchValue, setSearchValue] = useState<string>(slug)
	const debouncedValue = useDebounce<string>(searchValue, 500)

	useEffect(() => {
		setSearchValue(slug)
	}, [slug])

	useEffect(() => {
		dispatch(setSlug(debouncedValue))

		if (pathname !== RoutesEnum.Catalog && searchValue.length > 0) {
			navigate(RoutesEnum.Catalog)
		}
	}, [debouncedValue])

	const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}

	const resetHandler = () => {
		setSearchValue('')
	}

	const getIcon = () => {
		return searchValue.length > 0 ? (
			<RxCross1 onClick={resetHandler} />
		) : (
			<AiOutlineSearch />
		)
	}

	return (
		<Input
			type='text'
			placeholder='Search items'
			onChange={inputChangeHandler}
			value={searchValue}
			icon={getIcon()}
		/>
	)
})
