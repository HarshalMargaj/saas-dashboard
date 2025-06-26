"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const ClientLayout = ({ children }) => {
	const [sidebarVisible, setSidebarVisible] = useState(true);

	return (
		<div className="flex min-h-screen">
			<Sidebar visible={sidebarVisible} setVisible={setSidebarVisible} />
			<div className="flex flex-col flex-1 m-4 bg-white border border-neutral-200 rounded-md overflow-hidden">
				<Navbar
					visible={sidebarVisible}
					setVisible={setSidebarVisible}
				/>
				<main className="flex-1 overflow-y-auto p-4">{children}</main>
			</div>
		</div>
	);
};

export default ClientLayout;
