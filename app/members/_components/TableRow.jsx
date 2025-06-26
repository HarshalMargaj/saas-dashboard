import React from "react";

const TableRow = ({ member }) => {
	return (
		<tr className="hover:bg-blue-50">
			<td className="px-4 py-3">
				<img
					src={member.picture.large}
					alt="avatar"
					className="h-8 w-8 rounded-full object-cover"
				/>
			</td>
			<td className="px-4 py-3">{`${member.name.first} ${member.name.last}`}</td>
			<td className="px-4 py-3">{member.registered.date}</td>
			<td className="px-4 py-3">
				<span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
					Member
				</span>
			</td>
		</tr>
	);
};

export default TableRow;
