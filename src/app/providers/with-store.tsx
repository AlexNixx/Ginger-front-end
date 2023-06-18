import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../store/store'

export const withStore = (component: () => React.ReactNode) => () =>
	(
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{component()}
			</PersistGate>
		</Provider>
	)
