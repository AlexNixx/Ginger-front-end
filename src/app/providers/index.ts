import compose from 'compose-function'
import { withRouter } from './with-router'
import { withStore } from './with-store'
export const withProviders = compose(withRouter, withStore)

export { WithAuth } from './with-auth'
