import { withProviders } from './providers'
import { InitAuth, InitTheme, WithToaster } from './hoc'

import { Routing } from 'app/routes'

import 'shared/styles/index.scss'

const App = () => {
	return (
		<div className='app'>
			<InitAuth>
				<InitTheme>
					<WithToaster>
						<Routing />
					</WithToaster>
				</InitTheme>
			</InitAuth>
		</div>
	)
}

export default withProviders(App)
