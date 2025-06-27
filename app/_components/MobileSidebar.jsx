import React, { useRef } from "react";

import {
	LayoutDashboard,
	MessageCircle,
	UserRoundCog,
	Users,
	Bell,
	Moon,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { useOnClickOutside } from "usehooks-ts";

const items = [
	{ id: 1, name: "Dashboard", icon: <LayoutDashboard />, path: "/dashboard" },
	{ id: 2, name: "Members", icon: <Users />, path: "/members" },
	{ id: 3, name: "Roles", icon: <UserRoundCog />, path: "/roles" },
	{ id: 4, name: "Messages", icon: <MessageCircle />, path: "/messages" },
	{ id: 5, name: "Notifications", icon: <Bell />, path: "" },
	{ id: 6, name: "Theme", icon: <Moon />, path: "" },
];

const MobileSidebar = ({ setMenuVisible }) => {
	const router = useRouter();
	const dropdownRef = useRef();

	useOnClickOutside(dropdownRef, () => setMenuVisible(false));

	return (
		<div
			ref={dropdownRef}
			className="md:hidden space-y-4 pb-4 text-gray-700 shadow-md rounded-md border border-neutral-100 w-[300px]"
		>
			<div className="flex gap-2 items-center p-2 border-b border-neutral-100">
				<img
					src="https://randomuser.me/api/portraits/men/36.jpg"
					alt=""
					className="rounded-full h-10 w-10"
				/>
				<div className="text-[#333333] font-semibold">Admin</div>
			</div>
			{items.map(item => (
				<div
					onClick={() => {
						router.push(item.path);
					}}
					key={item.id}
					className={`flex gap-2 items-center p-2  rounded-md cursor-pointer`}
				>
					{item.icon}
					<div>{item.name}</div>
				</div>
			))}
		</div>
	);
};

export default MobileSidebar;
