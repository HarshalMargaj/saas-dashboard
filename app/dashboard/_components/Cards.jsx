import React from "react";
import metrics from "@/constants/metrics";
import Card from "./Card";

const Cards = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
			{metrics.map(metric => (
				<Card key={metric.id} metric={metric} />
			))}
		</div>
	);
};

export default Cards;
