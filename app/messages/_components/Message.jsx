"use client";

import { Trash } from "lucide-react";
import React, { useState } from "react";

const Message = ({ message }) => {
	const [visible, setVisible] = useState(false);

	return (
		<div
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			className="flex items-center justify-between py-2 px-4 border-b border-neutral-100 hover:bg-blue-50"
		>
			<div className="flex items-center gap-2">
				<img
					src={message.user.avatar}
					alt=""
					className="rounded-full h-10 w-10"
				/>
				<div>
					<div className="text-gray-700 font-semibold">
						{message.user.name}{" "}
						<span className="text-xs text-gray-400">
							{message.timestamp}
						</span>
					</div>
					<div className="text-gray-500">{message.message}</div>
				</div>
			</div>

			{visible && (
				<button className=" text-red-500 cursor-pointer border border-red-500 rounded-md p-1 text-xs">
					Delete
				</button>
			)}
		</div>
	);
};

export default Message;
