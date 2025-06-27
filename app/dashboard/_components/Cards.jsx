import React from "react";
import metrics from "@/constants/metrics";
import { Activity } from "lucide-react";

const Cards = () => {
	return (
		<div className="flex gap-2">
			{metrics.map(metric => (
				<div className="border border-neutral-100 w-[25%] shadow-md rounded-md p-2 space-y-2 text-gray-700">
					<div>{metric.icon}</div>

					<div className="font-semibold">{metric.title}</div>
					<div className="text-5xl">{metric.value}</div>

					<div className="flex items-center justify-between">
						<div className="text-sm">Since last month</div>
						<div className="text-green-500 flex items-center gap-2">
							25% <Activity />
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Cards;
