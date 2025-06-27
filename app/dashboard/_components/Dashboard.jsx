import React from "react";
import Cards from "./Cards";
import LineChartCard from "./LineChartCard";
import BarChartCard from "./BarChartCard";

const Dashboard = () => {
	return (
		<div className="space-y-4">
			<Cards />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<LineChartCard />
				<BarChartCard />
			</div>
		</div>
	);
};

export default Dashboard;
