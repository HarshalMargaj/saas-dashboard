import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/_components/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Admin Dashboard",
	description: "Build by Harshal Margaj",
	icons: {
		icon: "/dashboard.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-100`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
