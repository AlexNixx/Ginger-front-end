export interface ResponsiveType {
	[key: string]: {
		breakpoint: { max: number; min: number }
		items: number
	}
}

export const responsive: ResponsiveType = {
	superLargeDesktop: {
		breakpoint: { max: 3000, min: 2000 },
		items: 8
	},
	largeDesktop: {
		breakpoint: { max: 2000, min: 1600 },
		items: 5
	},
	desktop: {
		breakpoint: { max: 1600, min: 1200 },
		items: 4
	},
	smallDesktop: {
		breakpoint: { max: 1200, min: 1000 },
		items: 3
	},
	tablet: {
		breakpoint: { max: 1000, min: 675 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 471, min: 0 },
		items: 1
	}
}
