"use client";
import React, { useState } from "react";
import "./pos.css";
import { Button, Dropdown, Tooltip } from "antd";
import { BsLightning } from "react-icons/bs";
import { IoMdAdd, IoIosListBox } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { LuUtensilsCrossed, LuConciergeBell } from "react-icons/lu";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import { FaBell, FaPrint } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { AiOutlineCalendar, AiOutlineLogout } from "react-icons/ai";
import RoomPos from "@/components/pos/room/room";
import MenuPos from "@/components/pos/menu/menu";
import OrderPos from "@/components/pos/order/order";

const ButtonToolbar = [
	{
		id: 0,
		name: "Phòng ban",
		isActive: true,
		icon: <MdOutlineTableRestaurant size={18} />,
	},
	{
		id: 1,
		name: "Thực đơn",
		isActive: false,
		icon: <LuUtensilsCrossed size={18} />,
	},
];
const items = [
	{
		label: (
			<div className={"w-28 flex items-center hover:text-cyan-700 gap-1"}>
				<LuConciergeBell size={16} /> Nhà bếp
			</div>
		),
		key: "0",
	},
	{
		label: (
			<div className={"w-28 flex items-center hover:text-cyan-700 gap-1"}>
				<AiOutlineCalendar size={16} />
				Lễ tân
			</div>
		),
		key: "1",
	},
	{
		label: (
			<div className={"w-28 flex items-center hover:text-cyan-700 gap-1"}>
				<AiOutlineLogout size={16} />
				Đăng xuất
			</div>
		),
		key: "2",
	},
];

const BillList = [
	{
		id: 0,
		name: "1-11",
		isActive: true,
	},
	{
		id: 1,
		name: "1-12",
		isActive: false,
	},
	{
		id: 2,
		name: "1-13",
		isActive: false,
	},
];

export default function Pos() {
	const [isButtonActive, setIsButtonActive] = useState(0); // 0: Phòng ban, 1: Thực đơn
	const [isBillActive, setIsBillActive] = useState(0); // 0: 1-11, 1: 1-12
	const [isBill, setIsBill] = useState(0);
	function addFocusClass() {
		var boxInput = document.getElementById("box_input");
		boxInput.classList.add("box_input_focus");
	}

	function removeFocusClass() {
		var boxInput = document.getElementById("box_input");
		boxInput.classList.remove("box_input_focus");
	}
	return (
		<div className="px-6 pb-8 h-full">
			<div className="bg-transparent h-11 grid grid-cols-5 gap-4 text-[13px]">
				<div className="h-full col-span-3 grid grid-cols-10 gap-2 px-4">
					<div className="h-full col-span-3 flex items-end text-center">
						{ButtonToolbar.map((item, index) => (
							<div
								key={index}
								className={`btn_toolbar gap-2 w-2/4 ${
									isButtonActive === index
										? "btn_toolbar_active"
										: ""
								}`}
								onClick={() => setIsButtonActive(index)}
							>
								<div>{item.icon}</div>
								{item.name}
							</div>
						))}
					</div>
					<div className="col-span-7 flex items-center gap-2 group_toolbar">
						<div
							className="box_input w-full flex gap-2 items-center"
							id="box_input"
						>
							<div>
								<AiOutlineSearch size={20} />
							</div>
							<input
								className="bg-transparent w-full"
								type="text"
								placeholder="Tìm món (F3)"
								onFocus={addFocusClass}
								onBlur={removeFocusClass}
							/>
						</div>
						<Tooltip title="Tìm nhanh">
							<Button
								shape="circle"
								icon={<BsLightning />}
								className="border-cyan-50 text-white flex justify-center items-center"
							/>
						</Tooltip>
						<Tooltip title="Thêm">
							<Button
								shape="circle"
								icon={<IoMdAdd />}
								className="border-cyan-50 text-white flex justify-center items-center"
							/>
						</Tooltip>
					</div>
				</div>
				<div className="h-full col-span-2 grid grid-cols-10 gap-2 px-4">
					<div className="h-full col-span-4 flex items-end text-center">
						{BillList.length < 3 ? (
							BillList.map((item, index) => (
								<div
									key={index}
									className={`btn_toolbar gap-2 ${
										isBillActive === index
											? "btn_toolbar_active"
											: ""
									}`}
									onClick={() => setIsBillActive(index)}
								>
									{item.name}
									{isBillActive === index && (
										<Button
											shape="circle"
											size="small"
											icon={<GrFormClose size={13} />}
											className="border-none text-white flex justify-center items-center hover:bg-slate-200"
										/>
									)}
								</div>
							))
						) : (
							<React.Fragment>
								<div
									className={
										"btn_toolbar gap-2 btn_toolbar_active"
									}
								>
									{BillList[isBill].name}
									<Button
										shape="circle"
										size="small"
										icon={<GrFormClose size={13} />}
										className="border-none text-white flex justify-center items-center hover:bg-slate-200"
									/>
								</div>

								<Dropdown
									menu={{
										items: BillList.filter(
											(item) => item.id !== isBill
										).map((item) => ({
											key: item.id,
											label: (
												<div
													className={
														"w-28 hover:text-cyan-700"
													}
													onClick={() =>
														setIsBill(item.id)
													}
												>
													{item.name}
												</div>
											),
										})),
									}}
									placement="bottomLeft"
								>
									<div
										className={
											"btn_toolbar gap-2 !bg-cyan-900 hover:!bg-cyan-800"
										}
									>
										<IoIosListBox size={13} />
										{`(${BillList.length - 1})`}
									</div>
								</Dropdown>
							</React.Fragment>
						)}
						<div className="mr-2 p-1">
							<Tooltip title="Thêm">
								<Button
									shape="circle"
									icon={<IoMdAdd />}
									className="border-none !text-white flex justify-center items-center bg-cyan-700 hover:bg-cyan-800"
								/>
							</Tooltip>
						</div>
					</div>
					<div className="col-span-6 flex items-center gap-2 justify-end">
						<Tooltip title="Thông báo">
							<Button
								shape="circle"
								icon={<FaBell />}
								className="border-none !text-white flex justify-center items-center bg-cyan-950 hover:bg-cyan-800"
							/>
						</Tooltip>
						<Tooltip title="Máy in">
							<Button
								shape="circle"
								icon={<FaPrint />}
								className="border-none !text-white flex justify-center items-center bg-cyan-950 hover:bg-cyan-800"
							/>
						</Tooltip>
						<Tooltip title="Menu" placement="topRight">
							<Dropdown
								menu={{
									items,
								}}
								trigger={["click"]}
								placement="bottomRight"
							>
								<Button className="rounded-3xl border-none !text-white flex justify-center items-center bg-cyan-950 hover:bg-cyan-800">
									<div className="max-w-[60px] whitespace-nowrap overflow-hidden text-ellipsis self-stretch">
										0707261102
									</div>
									<HiMenu />
								</Button>
							</Dropdown>
						</Tooltip>
					</div>
				</div>
			</div>
			<div className="bg-transparent h-[calc(100vh-76px)] grid grid-cols-5 gap-4">
				<div className="bg-white h-[inherit] col-span-3 rounded-2xl">
					{isButtonActive === 0 ? ( // Phòng ban
						<RoomPos />
					) : (
						// Thực đơn
						<MenuPos />
					)}
				</div>
				<div className="bg-white h-[inherit] col-span-2 rounded-2xl">
					<OrderPos />
				</div>
			</div>
			<div className="bg-transparent h-8 grid grid-cols-5 gap-4 text-[13px]"></div>
		</div>
	);
}
