import { Button, Radio } from "antd";
import React, { useState } from "react";
import ItemRoom from "./itemRoom";

const ButtonMenu = [
	{
		id: 0,
		name: "Tất cả",
		isActive: true,
	},
];

export default function RoomPos() {
	const [isButtonActive, setIsButtonActive] = useState(0);
	return (
		<div className="flex-col h-full px-3">
			<div className="h-12 flex items-center gap-2">
				{ButtonMenu.map((item, index) => (
					<Button
						type="text"
						key={index}
						className={` ${
							isButtonActive === index ? "cus_btn_active" : ""
						}

							`}
						onClick={() => setIsButtonActive(index)}
					>
						{item.name}
					</Button>
				))}
			</div>
			<div className="h-full">
				<div className="h-11">
					<Radio.Group
						name="radiogroup"
						defaultValue={1}
						className="h-full flex items-center"
					>
						<Radio value={1}>Tất cả (2)</Radio>
						<Radio value={2}>Sử dụng (2)</Radio>
						<Radio value={3}>Còn trống (0)</Radio>
					</Radio.Group>
				</div>
				<div className="h-[calc(100%-92px)]">
					<div className="box_group_item_room">
						<ItemRoom />
					</div>
				</div>
			</div>
		</div>
	);
}
