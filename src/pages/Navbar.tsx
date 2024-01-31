import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="border-b-2 border-zinc-950 py-3 bg-teal-100">
			<div className="container mx-auto">
				<div className="flex gap-2 w-full justify-between items-center flex-col sm:flex-row ">
					<span className="text-2xl font-bold">perkslab UI</span>
					<div className="flex gap-2 items-center">
						<Link to="https://github.com/Mykola-Dzoban/perkslabUI" className="hover:underline" target="_blank">
							GitHub
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
