import React from "react";
import userData from "@constants/data";

export default function Projects() {
	return (
		<section className="bg-white dark:bg-gray-800">
			<div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
				<h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
					Projects
				</h1>
			</div>
			{/* Grid starts here */}
			<div className="bg-[#F1F1F1] dark:bg-gray-900">
				<div className="mx-10">
					<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 pb-40">
						{userData.projects.map((proj, idx) => (
							<ProjectCard
								title={proj.title}
								link={proj.link}
								imgUrl={proj.imgUrl}
								number={`${idx + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
	return (
		<a href={link} className="w-full block shadow-2xl aspect-[5/2]">
			<div className="relative overflow-hidden text-md sm:text-lg md:text-2xl h-full">
				<img
					src={imgUrl}
					alt="portfolio"
					className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full"
				/>
				<div className="content absolute inset-x-[5%] top-[10%] h-fit w-fit">
					<h1 className="inline-block font-bold text-gray-50 bg-orange-500 rounded-md px-1.5 py-0.5">
						{title}
					</h1>
				</div>
				<div className="absolute inset-x-[5%] bottom-[25%]">
					<h1 className="absolute text-gray-50 font-bold">
						{number.length === 1 ? "0" + number : number}
					</h1>
				</div>
			</div>
		</a>
	);
};
