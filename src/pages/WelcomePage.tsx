import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const WelcomePage = () => {
	return (
		<>
			<Navbar />
			<div className='flex items-start'>
				<Sidebar />
				<Outlet />
			</div>
		</>
	);
};
export default WelcomePage;
