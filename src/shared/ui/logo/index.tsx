import logo from "../../assets/images/logo.svg";
import styles from "./Image.module.scss";

const Logo = () => {
	return <img src={logo} alt="gadgets-logo" className={styles.logo} />;
};

export { Logo };
