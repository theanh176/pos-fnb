import Link from "next/link";
import React from "react";

export default function Blog() {
	return (
		<div>
			Blog Page <Link href={`/blog/blogId222`}>Click</Link>
		</div>
	);
}
