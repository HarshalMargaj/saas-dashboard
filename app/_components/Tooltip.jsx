const Tooltip = ({ label }) => {
	return (
		<span className="absolute top-10 left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-neutral-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-max z-10">
			{label}
		</span>
	);
};

export default Tooltip;
