"use client";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { memberGrowthData } from "@/constants/charts";

const BarChartCard = () => {
	return (
		<div className="bg-white p-4 rounded-lg shadow-sm w-full">
			<h2 className="text-lg font-semibold mb-2 text-gray-700">
				Member Growth This Week
			</h2>
			<ResponsiveContainer width="100%" height={400}>
				<BarChart data={memberGrowthData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="members" fill="#6366f1" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default BarChartCard;
