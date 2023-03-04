import styles from "./Loader.module.scss";

const Loader = () => {
	return (
		<div className={styles.full_screen}>
			<div className={styles.loader}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export { Loader };
