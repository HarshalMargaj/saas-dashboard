import { Bell, Moon } from "lucide-react";
import React from "react";
import Tooltip from "./Tooltip";

const navbarIcons = [
	{ id: 1, icon: <Moon size={20} />, name: "Theme" },
	{ id: 2, icon: <Bell size={20} />, name: "Notifications" },
];

const Navbar = () => {
	return (
		<div className="h-16 px-4 border-b border-neutral-200 flex items-center justify-between bg-white">
			<h1 className="text-2xl font-bold text-blue-500">
				Admin Dashboard
			</h1>
			<div className="flex items-center gap-4">
				{navbarIcons.map(icon => (
					<div
						key={icon.id}
						className="relative group p-2 shadow-sm bg-white rounded-full cursor-pointer"
					>
						{icon.icon}
						<Tooltip label={icon.name} />
					</div>
				))}
				<div className="flex gap-2 items-center">
					<div className="text-[#333333] font-semibold">Admin</div>
					<img
						src="https://randomuser.me/api/portraits/men/36.jpg"
						alt=""
						className="rounded-full h-10 w-10"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
