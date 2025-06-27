"use client";
import React, { useState, useEffect } from "react";

import { Loader } from "lucide-react";

import TableNav from "./TableNav";
import TableRow from "./TableRow";
import headers from "@/constants/TableHeaders";

const Table = () => {
	const [members, setMembers] = useState([]);
	const roles = ["Member", "Moderator"];

	const membersWithRole = members.map(member => ({
		...member,
		role: roles[Math.floor(Math.random() * roles.length)],
	}));

	const [isLoading, setIsLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [sort, setSort] = useState({
		keyToSort: "USERNAME",
		direction: "asc",
	});

	const handleHeader = header => {
		setSort({
			keyToSort: header.key,
			direction:
				header.key === sort.keyToSort
					? sort.direction === "asc"
						? "desc"
						: "asc"
					: "asc",
		});
	};

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

	const filterData = membersWithRole.filter(member =>
		`${member.name.first} ${member.name.last}`
			.toLowerCase()
			.includes(searchQuery.toLowerCase())
	);

	const getSortedArray = arrayToSort => {
		return [...arrayToSort].sort((a, b) => {
			let aValue, bValue;

			if (sort.keyToSort === "USERNAME") {
				aValue = `${a.name.first} ${a.name.last}`.toLowerCase();
				bValue = `${b.name.first} ${b.name.last}`.toLowerCase();
			} else if (sort.keyToSort === "JOINDATE") {
				aValue = new Date(a.registered.date);
				bValue = new Date(b.registered.date);
			}

			if (sort.direction === "asc") {
				return aValue > bValue ? 1 : -1;
			} else {
				return aValue < bValue ? 1 : -1;
			}
		});
	};

	return (
		<div>
			<TableNav
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>
			<table className="min-w-full table-auto text-sm text-left">
				<thead className=" text-gray-700 font-semibold border-b border-neutral-100">
					<tr>
						{headers.map(header => (
							<th
								onClick={
									header.key === "AVATAR" ||
									header.key === "ROLE"
										? "undefined"
										: () => handleHeader(header)
								}
								key={header.id}
								className="px-4 py-3 w-[300px]"
							>
								{header.label}{" "}
								{header.key === sort.keyToSort &&
									header.sorting && (
										<span>
											{sort.direction === "asc"
												? " ↑"
												: " ↓"}
										</span>
									)}
							</th>
						))}
					</tr>
				</thead>
				{isLoading ? (
					<tbody>
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
					</tbody>
				) : (
					<tbody className="divide-y divide-gray-100 text-gray-700 overflow-y-scroll">
						{filterData.length > 0 ? (
							getSortedArray(filterData).map(member => (
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
