import React from "react";
import { Activity } from "lucide-react";

const Card = ({ metric }) => {
	return (
		<div className="border border-neutral-100 w-[25%] shadow-sm rounded-md p-2 space-y-2 text-gray-700">
			<div>{metric.icon}</div>

			<div className="font-semibold text-gray-500">{metric.title}</div>
			<div className="text-5xl">{metric.value}</div>

			<div className="flex items-center justify-between">
				<div className="text-sm">Since last month</div>
				<div className="text-green-500 flex items-center gap-2">
					25% <Activity />
				</div>
			</div>
		</div>
	);
};

export default Card;
