import React, { useRef, useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useOnClickOutside } from "usehooks-ts";
import Modal from "./Modal";

const TableNav = ({
	searchQuery,
	setSearchQuery,
	selectedRole,
	setSelectedRole,
	roles,
}) => {
	const [isClicked, setIsClicked] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const searchRef = useRef();
	const dropdownRef = useRef();

	useOnClickOutside(dropdownRef, () => setIsVisible(false));

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
		<div className="flex md:flex-row flex-col justify-between md:items-center">
			<h1 className="text-3xl text-gray-700 font-bold mb-4">Members</h1>
			<div
				className="flex md:flex-row flex-col items-center gap-4"
				ref={searchRef}
			>
				<div className="flex  items-center gap-2  text-gray-700">
					<div>Filter: </div>
					<div className="relative" ref={dropdownRef}>
						<div
							onClick={() => setIsVisible(true)}
							className="border border-neutral-100 rounded-md p-2 w-[150px] text-gray-500"
						>
							{selectedRole || "Select role..."}
						</div>
						{isVisible && (
							<div className="shadow-md border border-neutral-100 p-2 absolute bg-white w-full top-12 rounded-md z-10">
								{roles.map((role, index) => (
									<div
										key={index}
										onClick={() => {
											setSelectedRole(role);
											setIsVisible(false);
										}}
										className="hover:bg-blue-100 rounded-md p-2 hover:text-blue-600 cursor-pointer"
									>
										{role}
									</div>
								))}
							</div>
						)}
					</div>
				</div>
				<div className="flex gap-2 items-center border border-neutral-100 p-2 rounded-md w-full sm:hidden">
					<Search className="text-gray-500" size={20} />
					<input
						type="text"
						placeholder="Search..."
						className="outline-none w-full"
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
					/>
				</div>
				{isClicked ? (
					<div className="hidden md:flex gap-2 items-center border border-neutral-100 p-2 rounded-md">
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
						className="hidden md:block text-gray-700 cursor-pointer"
						onClick={toggleSearch}
						size={20}
					/>
				)}
				<button
					onClick={() => setOpenModal(true)}
					className="bg-blue-500 p-2 rounded-md text-white cursor-pointer hover:bg-blue-600 md:text-sm text-xs"
				>
					Add Member
				</button>
				{openModal && <Modal setOpenModal={setOpenModal} />}
			</div>
		</div>
	);
};

export default TableNav;
