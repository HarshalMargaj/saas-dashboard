import { Upload } from "lucide-react";
import React, { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

const Modal = ({ setOpenModal }) => {
	const modalRef = useRef();

	useOnClickOutside(modalRef, () => setOpenModal(false));

	return (
		<div className="bg-black/20 h-full w-full absolute top-0 left-0 flex items-center justify-center">
			<div
				ref={modalRef}
				className="bg-white w-[500px] h-[400px] flex items-center justify-center p-20 rounded-md"
			>
				<form
					action=""
					className="flex justify-center flex-col items-center w-full space-y-5 text-gray-700"
				>
					<label htmlFor="">Upload Photo</label>
					<div className="bg-neutral-100 rounded-md w-[100px] h-[100px] flex items-center justify-center">
						<Upload />
					</div>
					<div className="flex flex-col gap-2 w-full">
						<label htmlFor="" className="text-start">
							Enter your name
						</label>
						<input
							type="text"
							placeholder="Enter your name"
							className="outline-none border border-neutral-200 bg-neutral-100 w-full p-2 rounded-md"
						/>
					</div>
					<button className="bg-blue-500 hover:bg-blue-600 text-white p-2 w-full rounded-md cursor-pointer">
						Add member
					</button>
				</form>
			</div>
		</div>
	);
};

export default Modal;
