"use client";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { memberGrowthData } from "@/constants/charts";

const LineChartCard = () => {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md w-full">
			<h2 className="text-lg font-semibold mb-2 text-gray-700">
				Member Growth This Week
			</h2>
			<ResponsiveContainer width="100%" height={400}>
				<LineChart data={memberGrowthData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Line
						type="monotone"
						dataKey="members"
						stroke="#3b82f6"
						strokeWidth={2}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default LineChartCard;
