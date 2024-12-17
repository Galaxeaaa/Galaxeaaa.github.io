"use client"

import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

export default function Navbar() {
	return (
		<>
			<div className="h-20 sticky bg-white/90 backdrop-blur border-b w-full transition-all duration-500 top-0 z-40 overflow-hidden">
				<div className="flex items-center justify-start px-10 w-full max-w-6xl mx-auto h-full my-auto">
					<div onClick={() => { scroll.scrollToTop({ duration: 1 }); }} className="cursor-pointer text-xl font-bold text-color-accent-1 underline decoration-4 decoration-color-accent-2 mr-4">
						Cheng Wang
					</div>
					<div className="flex-grow"></div>
					<div className="flex justify-self-end font-medium">
						<CostomScrollLink to="about">About</CostomScrollLink>
						<CostomScrollLink to="publications">Publications</CostomScrollLink>
						<CostomScrollLink to="projects">Projects</CostomScrollLink>
						<CostomScrollLink to="experience">Experience</CostomScrollLink>
					</div>
				</div>
			</div>
		</>
	);
}

function CostomScrollLink({ to, children }) {
	return (
		<ScrollLink to={to} spy={true} offset={-70} className="no-underline hidden sm:block">
			<p className="cursor-pointer text-color-plain hover:text-color-accent-1-dark
			hover:bg-color-accent-1/20 transition-all ease-in-out px-4 py-2 rounded-lg" >
				{children}
			</p>
		</ScrollLink>
	)
}