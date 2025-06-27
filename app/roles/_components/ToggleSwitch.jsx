"use client";

import React, { useState } from "react";

const ToggleSwitch = () => {
	const [on, setOn] = useState(false);
	return (
		<div
			onClick={() => setOn(!on)}
			className="p-[1px] border border-neutral-100 rounded-md w-8 shadow-sm cursor-pointer"
		>
			<div
				className={`rounded-md bg-blue-500 h-4 w-4 ${
					on ? "translate-x-3" : ""
				}`}
			></div>
		</div>
	);
};

export default ToggleSwitch;
