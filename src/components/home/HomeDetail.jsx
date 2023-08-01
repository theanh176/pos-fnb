"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { BsSendCheck } from "react-icons/bs";
export default function HomeDetail() {
	const router = useRouter();
	return (
		<div>
			<Button className="bg-red-500" onClick={() => router.push("/blog")}>
				<BsSendCheck />
			</Button>
		</div>
	);
}
