import { Feature } from './types'

export const getOptions = (feature: Feature[]) => {
	return feature?.map((item: Feature) => ({
		label: item.name,
		value: item._id
	}))
}
