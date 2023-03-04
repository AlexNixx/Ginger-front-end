import ContentLoader from "react-content-loader";

const ProductSkeleton = () => (
	<ContentLoader
		speed={5}
		width={215}
		height={310}
		viewBox="0 0 215 310"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="0" y="0" rx="5" ry="5" width="215" height="310" />
	</ContentLoader>
);

export { ProductSkeleton };
