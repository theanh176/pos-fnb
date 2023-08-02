import { Button, Dropdown, Tooltip } from "antd";
import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { IoPricetagsOutline } from "react-icons/io5";
import {
	MdArrowDropDown,
	MdNotificationsActive,
	MdTableRestaurant,
} from "react-icons/md";
import { RiShoppingCartFill } from "react-icons/ri";
import ItemOrder from "./itemOrder";
import { IoLogoUsd } from "react-icons/io";
import { HiMenu } from "react-icons/hi";

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

export default function OrderPos() {
	const [isButtonActive, setIsButtonActive] = useState(0);
	function addFocusClass() {
		var boxInput = document.getElementById("box_input_order");
		boxInput.classList.add("box_input_order_focus");
	}

	function removeFocusClass() {
		var boxInput = document.getElementById("box_input_order");
		boxInput.classList.remove("box_input_order_focus");
	}
	return (
		<div className="flex-col h-full">
			<div className="h-12 flex items-center gap-2 px-3">
				<div className="col-span-7 grid items-center gap-2 grid-cols-11">
					<div className="col-span-2 rounded-[20px] !bg-[rgba(163,213,230,0.7)] text-cyan-800 p-2 text-center flex items-center gap-2 justify-center h-3/4">
						<MdTableRestaurant />
						Bàn 1
					</div>
					<div
						className="box_input_order flex gap-2 items-center col-span-4 h-3/4"
						id="box_input_order"
					>
						<div>
							<AiOutlineSearch size={20} />
						</div>
						<input
							className="bg-transparent w-full"
							type="text"
							placeholder="Tìm khách hàng (F4)"
							onFocus={addFocusClass}
							onBlur={removeFocusClass}
						/>
						<Button
							shape="circle"
							size="small"
							icon={<GrAdd size={16} />}
							className="border-none flex !text-cyan-900 justify-center items-center hover:bg-slate-200"
						/>
					</div>
					<Dropdown
						menu={{
							items: ButtonMenu.map((item) => ({
								key: item.id,
								label: (
									<div
										className={"w-28 hover:text-cyan-700"}
										onClick={() =>
											setIsButtonActive(item.id)
										}
									>
										{item.name}
									</div>
								),
							})),
						}}
						placement="bottomRight"
						trigger={["click"]}
					>
						<div className="box_input_order col-span-3 flex gap-2 items-center justify-between h-3/4">
							<div>
								<IoPricetagsOutline size={15} />
							</div>
							<div>{ButtonMenu[isButtonActive].name}</div>
							<div>
								<MdArrowDropDown size={15} />
							</div>
						</div>
					</Dropdown>
					<div className="h-3/4 flex items-center gap-2 group_toolbar col-span-2">
						<Tooltip title="Kênh bán">
							<Dropdown
								menu={{
									items: ButtonMenu.map((item) => ({
										key: item.id,
										label: (
											<div
												className={
													"w-28 hover:text-cyan-700"
												}
											>
												{item.name}
											</div>
										),
									})),
								}}
								placement="bottomRight"
								trigger={["click"]}
							>
								<Button
									shape="circle"
									icon={<RiShoppingCartFill />}
									className="border-cyan-50 !text-cyan-900 flex justify-center items-center !bg-slate-100"
								/>
							</Dropdown>
						</Tooltip>
						<Tooltip title="Chi tiết">
							<Dropdown
								menu={{
									items: ButtonMenu.map((item) => ({
										key: item.id,
										label: (
											<div
												className={
													"w-28 hover:text-cyan-700"
												}
											>
												{item.name}
											</div>
										),
									})),
								}}
								placement="bottomRight"
								trigger={["click"]}
							>
								<Button
									shape="circle"
									icon={<BsThreeDotsVertical />}
									className="border-cyan-50 !text-cyan-900 flex justify-center items-center !bg-slate-100"
								/>
							</Dropdown>
						</Tooltip>
					</div>
				</div>
			</div>
			<div className="box_group_item_order px-3">
				<ItemOrder />
			</div>
			<div className="h-12 flex items-center gap-2 px-3 bg-[#e6f0fa]">
				<Tooltip title="Thông báo">
					<Button
						shape="circle"
						icon={<MdNotificationsActive size={16} />}
						className="border-none !text-cyan-900 flex justify-center items-center !bg-slate-100 hover:!bg-slate-200"
					/>
				</Tooltip>
				<Tooltip title="Máy in">
					<Button
						shape="circle"
						icon={<MdNotificationsActive size={16} />}
						className="border-none !text-cyan-900 flex justify-center items-center !bg-slate-100 hover:!bg-slate-200"
					/>
				</Tooltip>
				<Dropdown
					menu={{
						items: ButtonMenu.map((item) => ({
							key: item.id,
							label: (
								<div
									className={"w-28 hover:text-cyan-700"}
									onClick={() => setIsButtonActive(item.id)}
								>
									{item.name}
								</div>
							),
						})),
					}}
					trigger={["click"]}
					placement="bottomRight"
				>
					<Button className="rounded-3xl border-none !text-cyan-900 flex justify-center items-center !bg-slate-100 hover:!bg-slate-200">
						<div className="max-w-[60px] whitespace-nowrap overflow-hidden text-ellipsis self-stretch">
							Thế Anh 12
						</div>
						<AiOutlineCaretDown size={16} />
					</Button>
				</Dropdown>
			</div>
			<div className="h-12 flex items-center gap-2 px-3 bg-[#e6f0fa] rounded-b-2xl">
				<Button className="btn-payment w-1/2 h-4/5 gap-2">
					<IoLogoUsd size={20} />
					Thanh toán (F9)
				</Button>
				<Button className="btn-notifi w-1/2 h-4/5 gap-2">
					<MdNotificationsActive size={20} />
					Thông báo (F10)
				</Button>
			</div>
		</div>
	);
}
