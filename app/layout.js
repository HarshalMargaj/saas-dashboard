import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ClientLayout from "./_components/ClientLayout";

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
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[linear-gradient(to_bottom,_rgba(59,130,246,0.08),_white,_rgba(59,130,246,0.08))]`}
			>
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
