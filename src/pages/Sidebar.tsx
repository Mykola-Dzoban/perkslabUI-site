import { Component, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	return (
		<div className="md:flex relative">
			<div
				className={`absolute md:relative bg-cyan-100 min-w-72 min-h-screen border-r-2 border-zinc-950 py-3 pl-5 flex flex-col gap-3 ${
					isSidebarOpen ? 'block' : 'hidden'
				} md:block`}>
				<div className="text-xl font-semibold flex items-center gap-1 mb-2">
					<Component />
					Components
				</div>
				<span className="absolute top-3 right-1 cursor-pointer block md:hidden" onClick={closeSidebar}>
					<X />
				</span>
				<div className="flex flex-col gap-1">
					<Link to="accordion" className="hover:underline ml-3 font-semibold" onClick={closeSidebar}>
						- Accordion
					</Link>
					<Link to="badge" className="hover:underline ml-3 font-semibold" onClick={closeSidebar}>
						- Badge
					</Link>
					<Link to="button" className="hover:underline ml-3 font-semibold" onClick={closeSidebar}>
						- Button
					</Link>
					<Link to="card" className="hover:underline ml-3 font-semibold" onClick={closeSidebar}>
						- Card
					</Link>
					<Link to="input" className="hover:underline ml-3 font-semibold" onClick={closeSidebar}>
						- Input
					</Link>
				</div>
			</div>
			<div
				onClick={openSidebar}
				className={`bg-cyan-100 min-h-screen border-r-2 border-zinc-950 block pt-3 px-2 md:hidden ${
					isSidebarOpen ? 'hidden' : 'block'
				}`}>
				<Menu />
			</div>
		</div>
	);
};

export default Sidebar;
