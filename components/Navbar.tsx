import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useRouter } from "next/router";

export default function Navbar() {
	const router = useRouter();
	console.log(router.asPath);

	const [isToggled, setIsToggled] = useState(false);

	const handleToggle = () => {
		setIsToggled(!isToggled);
	};

	const tt = 'h-40'

	return (
		<div className={`${isToggled ? 'h-56' : 'h-20'} bg-white/90 backdrop-blur border-b w-full transition-all duration-500 sticky top-0 z-50 overflow-hidden`}>
			<div className="py-4 px-6 md:px-10 max-w-6xl mx-auto flex items-center justify-between sm:justify-start text-lg font-normal space-x-2">
				<div onClick={() => scroll.scrollToTop({ duration: 1 })} className="cursor-pointer text-xl font-bold text-indigo-500 underline decoration-4 decoration-emerald-300 mr-4">
					Cheng Wang
				</div>
				<div className="hidden sm:block">
					<NavLink to="about">About</NavLink>
				</div>
				<div className="hidden sm:block">
					<NavLink to="projects">Projects</NavLink>
				</div>
				<div className="hidden sm:block">
					<NavLink to="experience">Experience</NavLink>
				</div>
				<button onClick={handleToggle} className="w-12 h-12 p-2 text-2xl rounded-full text-gray-700 text-center hover:text-indigo-700 hover:bg-indigo-500/20 sm:hidden">=</button>
			</div>
			<div className="flex flex-col items-end px-10 -pt-4 pb-4">
				<NavLink to="about">About</NavLink>
				<NavLink to="projects">Projects</NavLink>
				<NavLink to="experience">Experience</NavLink>
			</div>
		</div>
	);
}

function NavLink({ to, children }) {
	return (
		<ScrollLink to={to} spy={true} offset={-50} className="no-underline">
			<p className="cursor-pointer text-gray-700 hover:text-indigo-700 hover:bg-indigo-500/20 transition-all ease-in-out px-4 py-2 rounded-lg" >
				{children}
			</p>
		</ScrollLink>
	)
}