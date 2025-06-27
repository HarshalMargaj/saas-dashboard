import React from "react";
import { TrendingUp } from "lucide-react";

const Card = ({ metric }) => {
	return (
		<div className="border border-neutral-100 w-full shadow-sm rounded-md p-2 space-y-2 text-gray-700">
			<div>{metric.icon}</div>

			<div className="font-semibold text-gray-500">{metric.title}</div>
			<div className="md:text-5xl text-4xl">{metric.value}</div>

			<div className="flex items-center justify-between">
				<div className="md:text-sm text-xs">Since last month</div>
				<div className="text-green-500 flex items-center gap-2 text-xs md:text-sm">
					25% <TrendingUp />
				</div>
			</div>
		</div>
	);
};

export default Card;
