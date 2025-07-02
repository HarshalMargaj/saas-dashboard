"use client";

import { Bell, Menu, Moon, PanelRight, Sidebar } from "lucide-react";
import React, { useState } from "react";
import Tooltip from "./Tooltip";
import MobileSidebar from "./MobileSidebar";

const navbarIcons = [
	{ id: 1, icon: <Moon size={20} />, name: "Theme" },
	{ id: 2, icon: <Bell size={20} />, name: "Notifications" },
];

const Navbar = ({ visible, setVisible, toggleTheme, theme }) => {
	const [menuVisible, setMenuVisible] = useState(false);
	const toggleSidebar = () => {
		setVisible(!visible);
	};

	return (
		<div className="h-16 px-4 border-b border-neutral-200 flex items-center justify-between bg-white text-gray-700 dark:bg-black">
			<div
				onClick={toggleSidebar}
				className="hidden md:block hover:bg-blue-50 rounded-md p-2"
			>
				{!visible ? (
					<Sidebar className="cursor-pointer" />
				) : (
					<PanelRight className="cursor-pointer" />
				)}
			</div>
			<div className="relative flex items-center gap-2 justify-between w-full md:w-auto">
				<img src="/dashboard.png" className="h-8 w-8 md:hidden" />
				<Menu
					className="md:hidden"
					onClick={() => setMenuVisible(true)}
				/>
				{menuVisible && (
					<div className="bg-white absolute top-12 right-0 z-10">
						<MobileSidebar setMenuVisible={setMenuVisible} />
					</div>
				)}
			</div>
			<div className="flex items-center gap-4">
				<div
					className={`hidden md:block relative group p-2 shadow-sm  rounded-full cursor-pointer ${
						theme === "light" ? "bg-white" : "bg-green-600"
					}`}
				>
					<Moon size={20} onClick={toggleTheme} />
					<Tooltip label={"Theme"} />
				</div>

				<div className="md:flex gap-2 items-center hidden">
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
