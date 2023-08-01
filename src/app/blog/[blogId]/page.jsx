import Link from "next/link";
import React from "react";

export default function BlogDetail() {
	return (
		<div>
			Blog Detail <Link href={`/blog`}>Click</Link>
		</div>
	);
}
