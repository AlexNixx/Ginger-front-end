import { FC, PropsWithChildren } from 'react'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { responsive } from './responsive'

interface ProductCarouselProps extends PropsWithChildren {
	isDesktop: boolean
}

export const MyCarousel: FC<ProductCarouselProps> = ({
	isDesktop,
	children
}) => {
	return (
		<Carousel
			autoPlay={isDesktop ? true : false}
			autoPlaySpeed={10000}
			arrows
			showDots={false}
			draggable={isDesktop ? false : true}
			focusOnSelect={false}
			responsive={responsive}
		>
			{children}
		</Carousel>
	)
}
