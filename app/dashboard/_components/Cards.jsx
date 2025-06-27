import React from "react";
import metrics from "@/constants/metrics";
import Card from "./Card";

const Cards = () => {
	return (
		<div className="flex gap-4">
			{metrics.map(metric => (
				<Card key={metric.id} metric={metric} />
			))}
		</div>
	);
};

export default Cards;
