import { Button } from "antd";
import { useState } from "react";
import { AiFillDelete, AiOutlineFileAdd, AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { BsDashLg } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { MdNoteAlt } from "react-icons/md";

export default function ItemOrder() {
	const [isCheckStar, setIsCheckStar] = useState(false);
	return (
		<div className="flex w-full relative">
			<div className="flex flex-col justify-between items-center h-full w-[32px]">
				<div>
					<Button
						shape="circle"
						size="small"
						icon={<AiFillDelete size={16} />}
						className="border-none flex !text-cyan-900 justify-center items-center hover:bg-slate-200"
					/>
				</div>
				<div>
					{isCheckStar ? (
						<Button
							shape="circle"
							size="small"
							icon={<AiOutlineStar size={16} />}
							className="border-none flex !text-cyan-900 justify-center items-center hover:bg-slate-200"
							onClick={() => setIsCheckStar(!isCheckStar)}
						/>
					) : (
						<Button
							shape="circle"
							size="small"
							icon={<AiTwotoneStar size={16} />}
							className="border-none flex !text-orange-500 justify-center items-center hover:bg-slate-200"
							onClick={() => setIsCheckStar(!isCheckStar)}
						/>
					)}
				</div>
			</div>
			<div className="info_order">
				<div className="font-semibold">1. Cà phê</div>
				<div className="flex gap-1 items-center text-slate-300 text-xs cursor-pointer">
					<MdNoteAlt size={16} /> <span>Nhập Ghi chú/Món thêm</span>
				</div>
			</div>
			<div className="flex flex-col justify-start items-center h-full w-[102px]">
				<div className="flex gap-1 items-center justify-around w-full">
					<Button
						shape="circle"
						size="small"
						icon={<BsDashLg size={22} />}
						className="border-none flex !text-cyan-900 justify-center items-center hover:bg-slate-200 bg-slate-100"
					/>
					<span className="cursor-pointer">3</span>
					<Button
						shape="circle"
						size="small"
						icon={<IoMdAdd size={22} />}
						className="border-none flex !text-cyan-900 justify-center items-center hover:bg-slate-200 bg-slate-100"
					/>
				</div>
			</div>
			<div className="flex flex-col justify-start items-end h-full w-[86px]">
				<div className="border-b w-full text-end cursor-pointer">
					39,000
				</div>
			</div>
			<div className="price_order w-[86px]">
				<div className="font-semibold">177,000</div>
			</div>
			<div className="add_order absolute w-[86px]">
				<div className="flex justify-end items-center pr-3">
					<Button
						shape="circle"
						size="middle"
						icon={<AiOutlineFileAdd size={20} />}
						className="border-none flex !text-cyan-900 justify-center items-center hover:bg-slate-200 bg-slate-100"
					/>
				</div>
			</div>
		</div>
	);
}
