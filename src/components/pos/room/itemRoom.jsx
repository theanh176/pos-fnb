import React, { useState } from "react";
import { BsFillBasket3Fill } from "react-icons/bs";
import { SiAirtable } from "react-icons/si";

const ListRoom = [
	{
		id: 0,
		name: "Mang về",
		isActive: true,
		status: 1,
	},
	{
		id: 1,
		name: "Bàn 1",
		isActive: true,
		status: 2,
	},
	{
		id: 2,
		name: "Bàn 2",
		isActive: true,
		status: 2,
	},
];

export default function ItemRoom() {
	const [isRoomActive, setIsRoomActive] = useState(0);
	return ListRoom.map((item, index) => (
		<div
			className={`flex-col h-full ${
				isRoomActive === item.id ? "box_group_item_room_active" : ""
			}`}
			key={index}
			onClick={() => setIsRoomActive(item.id)}
		>
			<div className="h-fit py-2">
				{item.status === 1 ? (
					<BsFillBasket3Fill
						size={80}
						className="m-auto"
						color={`${
							isRoomActive === item.id ? "white" : "#0e7490"
						}`}
					/>
				) : (
					<SiAirtable
						size={80}
						className="m-auto"
						color={`${
							isRoomActive === item.id ? "white" : "#0e7490"
						}`}
					/>
				)}
			</div>
			<div className="text-center font-bold">{item.name}</div>
			<div className="box_item_room">Nhập ghi chú...</div>
		</div>
	));
}
