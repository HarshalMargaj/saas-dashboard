import React, { useRef, useState, useEffect } from "react";
import { Search } from "lucide-react";

const TableNav = ({ searchQuery, setSearchQuery }) => {
	const [isClicked, setIsClicked] = useState(false);

	const searchRef = useRef();

	const toggleSearch = () => {
		setIsClicked(true);
	};

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

	return (
		<div className="flex justify-between items-center">
			<h1 className="text-3xl text-gray-700 font-bold mb-4">Members</h1>
			<div className="flex items-center gap-4" ref={searchRef}>
				{isClicked ? (
					<div className=" flex gap-2 items-center border border-neutral-200 bg-neutral-100 p-2 rounded-md">
						<Search
							className="text-gray-500 cursor-pointer"
							size={20}
						/>
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
						className="text-gray-700 cursor-pointer"
						onClick={toggleSearch}
					/>
				)}
				<button className="bg-blue-500 p-2 rounded-md text-white cursor-pointer">
					Add Member
				</button>
			</div>
		</div>
	);
};

export default TableNav;
