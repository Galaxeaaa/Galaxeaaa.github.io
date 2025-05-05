import React from "react";

export default function BaseCard({ children, link = null }) {
	const style = "w-full p-4 bg-white shadow-lg transition-all border-2 border-light hover:border-accent-1 rounded-3xl";
	return link ? (
		<a href={link} className={style + " no-underline"} style={{textDecoration: "none"}}>
			{children}
		</a>
	) : (
		<div className={style}>
			{children}
		</div>
	);
}