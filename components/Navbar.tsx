"use client"

import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

export default function Navbar() {
	const [isToggled, setIsToggled] = useState(false);

	function handleToggle() {
		setIsToggled(!isToggled);
	};

	function closeToggle() {
		setIsToggled(false);
	};

	return (
		<>
			<div className={`${isToggled ? 'h-72' : 'h-20'} sticky bg-white/90 backdrop-blur border-b w-full transition-all duration-500 top-0 z-40 overflow-hidden`}>
				<div className="flex flex-col items-end space-y-2 px-6 py-4">
					<div className="md:px-10 w-full max-w-6xl mx-auto flex items-center justify-between sm:justify-start text-lg font-normal space-x-2">
						<div onClick={() => {scroll.scrollToTop({ duration: 1 }); closeToggle()}} className="cursor-pointer text-xl font-bold text-indigo-500 underline decoration-4 decoration-emerald-300 mr-4">
							Cheng Wang
						</div>
						<div className="hidden sm:block">
							<NavLink to="about" onClick={closeToggle}>About</NavLink>
						</div>
						<div className="hidden sm:block">
							<NavLink to="publications" onClick={closeToggle}>Publications</NavLink>
						</div>
						<div className="hidden sm:block">
							<NavLink to="projects" onClick={closeToggle}>Projects</NavLink>
						</div>
						<div className="hidden sm:block">
							<NavLink to="experience" onClick={closeToggle}>Experience</NavLink>
						</div>
						<button onClick={handleToggle} className="w-12 h-12 p-2 text-2xl rounded-full text-gray-700 text-center hover:text-indigo-700 hover:bg-indigo-500/20 sm:hidden">=</button>
					</div>
					<NavLink to="about" onClick={handleToggle}>About</NavLink>
					<NavLink to="publications" onClick={handleToggle}>Publications</NavLink>
					<NavLink to="projects" onClick={handleToggle}>Projects</NavLink>
					<NavLink to="experience" onClick={handleToggle}>Experience</NavLink>
				</div>
			</div>

			{/* <div className={`absolute ${isToggled ? 'translate-x-0' : 'translate-x-full'} right-0 transition-all bg-white/90 backdrop-blur border-b h-screen z-50 sm:hidden`}>
				<div className="flex flex-col items-end px-6 -pt-4 pb-4">
					<NavLink to="about" onClick={handleToggle}>About</NavLink>
					<NavLink to="projects" onClick={handleToggle}>Projects</NavLink>
					<NavLink to="experience" onClick={handleToggle}>Experience</NavLink>
				</div>
			</div> */}
		</>
	);
}

function NavLink({ to, children, onClick }) {
	return (
		<ScrollLink to={to} spy={true} offset={-200} className="no-underline">
			{onClick ?
				<p onClick={onClick} className="cursor-pointer text-gray-700 hover:text-indigo-700 hover:bg-indigo-500/20 transition-all ease-in-out px-4 py-2 rounded-lg" >
					{children}
				</p>
				:
				<p className="cursor-pointer text-gray-700 hover:text-indigo-700 hover:bg-indigo-500/20 transition-all ease-in-out px-4 py-2 rounded-lg" >
					{children}
				</p>
			}
		</ScrollLink>
	)
}