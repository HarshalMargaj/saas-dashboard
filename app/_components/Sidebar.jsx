"use client";

import {
	LayoutDashboard,
	MessageCircle,
	Table2,
	UserRoundCog,
	Users,
} from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const items = [
	{ id: 5, name: "Spreadsheet", icon: <Table2 />, path: "/spreadsheet" },
	{ id: 1, name: "Dashboard", icon: <LayoutDashboard />, path: "/dashboard" },
	{ id: 2, name: "Members", icon: <Users />, path: "/members" },
	{ id: 3, name: "Roles", icon: <UserRoundCog />, path: "/roles" },
	{ id: 4, name: "Messages", icon: <MessageCircle />, path: "/messages" },
];

const Sidebar = ({ visible }) => {
	const [selectedTab, setSelectedTab] = useState(1);
	const router = useRouter();

	return (
		<div
			className={`py-8 pl-4 transition-all duration-300 ease-in-out ${
				visible ? "w-[300px]" : "w-20 items-center flex-col"
			} space-y-8 hidden md:flex md:flex-col`}
		>
			<h1 className="text-2xl font-bold text-blue-500">
				{visible ? (
					"Admin Dashboard"
				) : (
					<img src="/dashboard.png" className="h-8 w-8" />
				)}
			</h1>
			<div className="space-y-4 text-gray-700">
				{items.map(item => (
					<div
						onClick={() => {
							router.push(item.path);
							setSelectedTab(item.id);
						}}
						key={item.id}
						className={`flex gap-2 items-center p-2  rounded-md ${
							visible ? "flex-row" : "flex-col"
						} cursor-pointer ${
							selectedTab === item.id
								? "bg-blue-100 text-blue-600"
								: "hover:bg-blue-200 hover:text-blue-600"
						}`}
					>
						{item.icon}
						<div className={`${visible ? "" : "text-xs"}`}>
							{item.name}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
