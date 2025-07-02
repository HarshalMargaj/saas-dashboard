"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const ClientLayout = ({ children }) => {
	const [sidebarVisible, setSidebarVisible] = useState(true);
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
		localStorage.setItem("theme", newTheme);
	};

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme") || "light";
		setTheme(storedTheme);
		document.documentElement.classList.toggle(
			"dark",
			storedTheme === "dark"
		);
	}, []);

	return (
		<div className="flex h-screen">
			<Sidebar visible={sidebarVisible} setVisible={setSidebarVisible} />
			<div className="flex flex-col flex-1 m-4 bg-white border border-neutral-200 rounded-2xl overflow-hidden">
				<Navbar
					visible={sidebarVisible}
					setVisible={setSidebarVisible}
					toggleTheme={toggleTheme}
				/>
				<main className="flex-1 overflow-y-auto p-4">{children}</main>
			</div>
		</div>
	);
};

export default ClientLayout;
