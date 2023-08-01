import Image from "next/image";
import React from "react";
import ImageMenu from "../../../../public/assets/A_small_cup_of_coffee.JPG";
import ImageMenu1 from "../../../../public/assets/luong-duong-trong-1-ly-tra-sua.jpg";
import ImageMenu2 from "../../../../public/assets/top-10-loai-nuoc-ep-bo-duong-ho-tro-tang-cuong-suc-khoe-mua-dich-h1.jpg";

const ListMenu = [
	{
		id: 0,
		name: "Cà phê",
		image: ImageMenu,
		price: 39000,
		isActive: true,
	},
	{
		id: 1,
		name: "Trà sữa",
		image: ImageMenu1,
		price: 49000,
		isActive: true,
	},
	{
		id: 2,
		name: "Nước ép",
		image: ImageMenu2,
		price: 59000,
		isActive: true,
	},
];

export default function ItemMenu() {
	return ListMenu.map((item, index) => (
		<div className="flex-col h-full" key={index}>
			<div className="h-[calc(100%-44px)] relative">
				<Image
					src={item.image}
					alt="menu"
					className="w-full h-full p-1 object-cover rounded-lg"
				/>
				<div className="px-1 pt-1 absolute w-fit left-0 right-0 bottom-1 mx-auto text-teal-900 font-semibold text-xs bg-[rgba(255,255,255,0.7)] rounded-t-lg">
					{item.price} đ
				</div>
			</div>
			<div className="h-11 text-center font-bold">{item.name}</div>
		</div>
	));
}
