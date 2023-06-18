import { Helmet } from 'react-helmet'
import { Head } from 'shared/ui/helmet'
import { AdminCreate } from 'widgets/admin-create-goods'

const AdminPage = () => {
	return (
		<>
			<Head title={'Admin Page'} />

			<AdminCreate />
		</>
	)
}

export default AdminPage
