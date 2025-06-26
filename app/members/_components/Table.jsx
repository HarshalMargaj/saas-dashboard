"use client";

import { Loader, Search } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import TableNav from "./TableNav";
import TableRow from "./TableRow";

const Table = () => {
	const [members, setMembers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		const fetchApi = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(
					"https://randomuser.me/api/?results=100"
				);
				const result = await response.json();
				setMembers(result.results);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchApi();
	}, []);

	const filterData = members.filter(member =>
		`${member.name.first} ${member.name.last}`
			.toLowerCase()
			.includes(searchQuery.toLowerCase())
	);

	return (
		<div>
			<TableNav
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>
			<table className="min-w-full table-auto text-sm text-left">
				<thead className=" text-gray-700 font-semibold border-b border-neutral-100">
					<tr>
						<th className="px-4 py-3 w-[100px]">Avatar</th>
						<th className="px-4 py-3 w-[200px]">Username</th>
						<th className="px-4 py-3 w-[300px]">Join Date</th>
						<th className="px-4 py-3 w-[300px]">Role</th>
					</tr>
				</thead>
				{isLoading ? (
					<tr>
						<td colSpan="4" className="py-6 text-center">
							<div className="flex flex-col items-center justify-center gap-2">
								<Loader
									className={
										isLoading
											? "h-5 w-5 animate-spin text-blue-500"
											: ""
									}
								/>
								<span className="text-sm text-gray-600">
									Loading members...
								</span>
							</div>
						</td>
					</tr>
				) : (
					<tbody className="divide-y divide-gray-100 text-gray-700 overflow-y-scroll">
						{filterData.length > 0 ? (
							filterData.map(member => (
								<TableRow
									key={member.login.uuid}
									member={member}
								/>
							))
						) : (
							<tr>
								<td colSpan="4" className="py-6 text-center">
									No member found
								</td>
							</tr>
						)}
					</tbody>
				)}
			</table>
		</div>
	);
};

export default Table;
