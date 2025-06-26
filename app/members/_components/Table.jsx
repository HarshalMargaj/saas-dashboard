"use client";

import { Loader, Search } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const Table = () => {
	const [members, setMembers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isClicked, setIsClicked] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const searchRef = useRef();

	const toggleSearch = () => {
		setIsClicked(true);
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

	useEffect(() => {
		const handleClickOutside = e => {
			if (searchRef.current && !searchRef.current.contains(e.target)) {
				setIsClicked(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const filterData = members.filter(member =>
		`${member.name.first} ${member.name.last}`
			.toLowerCase()
			.includes(searchQuery.toLowerCase())
	);

	return (
		<div>
			<div className="flex justify-between items-center">
				<h1 className="text-3xl text-gray-700 font-bold mb-4">
					Members
				</h1>
				<div className="flex items-center gap-4" ref={searchRef}>
					{isClicked ? (
						<div className=" flex gap-2 items-center border border-neutral-200 bg-neutral-100 p-2 rounded-md">
							<Search className="text-gray-500" size={20} />
							<input
								type="text"
								placeholder="Search..."
								className="outline-none w-full"
								value={searchQuery}
								onChange={e => setSearchQuery(e.target.value)}
							/>
						</div>
					) : (
						<Search
							className="text-gray-700"
							onClick={toggleSearch}
						/>
					)}
					<button className="bg-blue-500 p-2 rounded-md text-white">
						Add Member
					</button>
				</div>
			</div>
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
								<tr
									key={member.login.uuid}
									className="hover:bg-blue-50"
								>
									<td className="px-4 py-3">
										<img
											src={member.picture.medium}
											alt="avatar"
											className="h-8 w-8 rounded-full object-cover"
										/>
									</td>
									<td className="px-4 py-3">{`${member.name.first} ${member.name.last}`}</td>
									<td className="px-4 py-3">
										{member.registered.date}
									</td>
									<td className="px-4 py-3">
										<span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
											Member
										</span>
									</td>
								</tr>
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
