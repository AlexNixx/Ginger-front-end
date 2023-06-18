import { FC } from 'react'
import { Helmet } from 'react-helmet'

type Meta = {
	property: string
	content: any
}

interface HeadProps {
	title: string
	description?: string
	meta?: Meta[]
}

export const Head: FC<HeadProps> = ({ title, description, meta = [] }) => {
	return (
		<Helmet
			title={`Ginger - ${title}`}
			htmlAttributes={{ lang: 'en' }}
			meta={[
				{
					name: `description`,
					content: description
				}
			]}
		/>
	)
}
