import React from "react";
import roles from "@/constants/Roles.json";
import Role from "./Role";
import ToggleSwitch from "./ToggleSwitch";

const Roles = () => {
	return (
		<div className="space-y-4  w-full md:w-1/2">
			<h1 className="text-3xl text-gray-700 font-bold mb-4">Roles</h1>
			{roles.map(role => (
				<div
					key={role.id}
					className="flex items-center justify-between"
				>
					<Role role={role} />
					<ToggleSwitch />
				</div>
			))}
		</div>
	);
};

export default Roles;
