import { Button } from "antd";
import React, { useState } from "react";
import ItemMenu from "./itemMenu";

const ButtonMenu = [
	{
		id: 0,
		name: "Tất cả",
		isActive: true,
	},
	{
		id: 1,
		name: "Thức uống",
		isActive: true,
	},
	{
		id: 2,
		name: "Đồ ăn",
		isActive: true,
	},
];

export default function MenuPos() {
	const [isButtonActive, setIsButtonActive] = useState(0);
	return (
		<div className="flex-col h-full px-3">
			<div className="h-12 flex items-center gap-2 mb-1">
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
				<div className="h-[calc(100%-52px)] pb-2">
					<div className="box_group_item_menu">
						<ItemMenu />
					</div>
				</div>
			</div>
		</div>
	);
}
