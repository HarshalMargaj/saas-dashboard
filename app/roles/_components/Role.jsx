"use client";

import { Pencil } from "lucide-react";
import React, { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

const Role = ({ role }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef();

	useOnClickOutside(inputRef, () => setIsEditing(false));

	return (
		<div ref={inputRef}>
			{isEditing ? (
				<input
					type="text"
					className="border border-neutral-100 px-2 outline-none rounded-md"
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
					placeholder="Rename"
				/>
			) : (
				<div className="flex items-center gap-4">
					<div
						className={`px-2 py-1 text-sm font-semibold rounded-full w-[150px] text-center ${role.textColor} ${role.bgColor}`}
					>
						{role.roleName}
					</div>
					<div
						onClick={() => setIsEditing(true)}
						className="p-1 shadow-sm rounded-md cursor-pointer"
					>
						<Pencil size={15} className="text-gray-400" />
					</div>
				</div>
			)}
		</div>
	);
};

export default Role;
