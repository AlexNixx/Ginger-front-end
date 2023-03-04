import { withProviders, WithAuth } from './providers'
import { Routing } from 'pages'

import './styles/index.scss'

const App = () => {
	return (
		<div className='app'>
			<WithAuth>
				<Routing />
			</WithAuth>
		</div>
	)
}

export default withProviders(App)
