import { Login } from 'feature/auth'

import styles from './SignIn.module.scss'

const SignInPage = () => {
	return (
		<div className={styles.page}>
			<Login />
		</div>
	)
}

export default SignInPage
