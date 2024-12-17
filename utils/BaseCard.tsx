import React from "react";

export default function BaseCard({ children, link = null }) {
	const style = "w-full p-4 bg-white shadow-lg transition-all border-2 border-color-light hover:border-color-accent-1";
	return link ? (
		<a href={link} className={style + " no-underline"}>
			{children}
		</a>
	) : (
		<div className={style}>
			{children}
		</div>
	);
}