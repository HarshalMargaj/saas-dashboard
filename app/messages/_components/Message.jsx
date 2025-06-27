"use client";

import { Trash } from "lucide-react";
import React, { useState } from "react";

const Message = ({ message }) => {
	const [visible, setVisible] = useState(false);

	return (
		<div
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			className="flex items-center justify-between py-2 px-4 border-b border-neutral-100 hover:bg-blue-50 md:text-sm text-xs"
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

			<button className="md:hidden text-red-500 cursor-pointer border border-red-500 rounded-md p-1 text-xs">
				<Trash size={10} />
			</button>

			{visible && (
				<button className="hidden md:block text-red-500 cursor-pointer border border-red-500 rounded-md p-1 text-xs">
					Delete
				</button>
			)}
		</div>
	);
};

export default Message;
