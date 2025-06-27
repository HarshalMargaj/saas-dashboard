import {
	MessageCircle,
	UserRoundCheck,
	UserRoundCog,
	UserRoundPlus,
	UsersRound,
} from "lucide-react";

const metrics = [
	{
		id: 1,
		title: "Total Members",
		value: 100,
		icon: <UsersRound />,
		color: "bg-blue-100 text-blue-700",
	},
	{
		id: 2,
		title: "Online Users",
		value: 67,
		icon: <UserRoundCheck />,
		color: "bg-green-100 text-green-700",
	},
	{
		id: 3,
		title: "Messages Today",
		value: 245,
		icon: <MessageCircle />,
		color: "bg-purple-100 text-purple-700",
	},
	{
		id: 4,
		title: "Active Roles",
		value: 10,
		icon: <UserRoundCog />,
		color: "bg-yellow-100 text-yellow-700",
	},
];

export default metrics;
