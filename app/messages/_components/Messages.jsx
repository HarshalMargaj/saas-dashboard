import React from "react";
import messages from "@/constants/messages.json";
import Message from "./Message";

const Messages = () => {
	return (
		<div>
			<h1 className="text-3xl text-gray-700 font-bold mb-4">Messages</h1>
			{messages.map(message => (
				<Message key={message.id} message={message} />
			))}
		</div>
	);
};

export default Messages;
