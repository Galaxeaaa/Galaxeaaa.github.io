"use client"

import React from "react";
import Link from "next/link";

export default function Navbar() {
	return (
		<>
			<div className="h-20 sticky bg-white/90 backdrop-blur border-b w-full transition-all duration-500 top-0 z-40 overflow-hidden">
				<div className="flex items-center justify-start px-10 w-full max-w-6xl mx-auto h-full my-auto">
					<div
						onClick={() => {
							window.scrollTo({ top: 0, behavior: "smooth" });
						}}
						className="cursor-pointer text-xl font-bold text-color-accent-1 underline decoration-4 decoration-color-accent-2 mr-4">
						Cheng Wang
					</div>
					<div className="flex-grow"></div>
					<div className="flex justify-self-end font-medium">
						<ScrollLink to="about">About</ScrollLink>
						<ScrollLink to="publications">Publications</ScrollLink>
						<ScrollLink to="projects">Projects</ScrollLink>
						<ScrollLink to="experience">Experience</ScrollLink>
					</div>
				</div>
			</div>
		</>
	);
}

function ScrollLink({ to, children }) {
	const handleClick = (e) => {
		e.preventDefault();
		const element = document.getElementById(to);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<a href={`#${to}`} onClick={handleClick} className="no-underline hidden sm:block">
			<p className="cursor-pointer text-color-plain hover:text-color-accent-1-dark hover:bg-color-accent-1/20 transition-all ease-in-out px-4 py-2 rounded-lg">
				{children}
			</p>
		</a>
	);
}