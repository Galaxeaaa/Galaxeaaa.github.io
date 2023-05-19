import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useRouter } from "next/router";

export default function Navbar() {
	const router = useRouter();
	console.log(router.asPath);

	return (
		<div className="bg-white/90 backdrop-blur border-b w-full transition-colors duration-500 sticky top-0 z-50">
			<div className="py-4 px-10 max-w-6xl mx-auto flex items-center text-lg font-normal space-x-2">
				<a onClick={() => scroll.scrollToTop({ duration: 1 })} className="cursor-pointer text-xl font-bold text-indigo-500 underline decoration-4 decoration-emerald-300 mr-4">
					Cheng Wang
				</a>
				<ScrollLink to="about" spy={true} offset={-50}>
					<p className="cursor-pointer text-gray-700 hover:text-indigo-700 hover:bg-indigo-500/20 transition-all ease-in-out px-4 py-2 rounded-lg" >
						About
					</p>
				</ScrollLink>
				<ScrollLink to="projects" spy={true} offset={-50}>
					<p className="cursor-pointer text-gray-700 hover:text-indigo-700 hover:bg-indigo-500/20 transition-all ease-in-out px-4 py-2 rounded-lg" >
						Projects
					</p>
				</ScrollLink>
				<ScrollLink to="experience" spy={true} offset={-50}>
					<p className="cursor-pointer text-gray-700 hover:text-indigo-700 hover:bg-indigo-500/20 transition-all ease-in-out px-4 py-2 rounded-lg" >
						Experience
					</p>
				</ScrollLink>
			</div>
		</div >
	);
}
