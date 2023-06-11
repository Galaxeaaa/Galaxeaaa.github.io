import React from "react";
import { projects } from "@/data/data";

export default function Projects() {
	return (
		<div className="flex flex-col space-y-8 text-gray-700 px-16">
			{projects.map((proj, index) => (
				<ProjectCard
					key={index}
					title={proj.title}
					time={proj.time}
					link={proj.link}
					imgUrl={proj.imgUrl}
					description={proj.description}
				/>
			))}
		</div>
	);
}

const ProjectCard = ({ title, time, link, imgUrl, description }) => {
	return (
		<a href={link} className="flex flex-col no-underline lg:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 p-8 w-full bg-white rounded-2xl shadow-lg transition-all border-2 border-transparent hover:border-indigo-500">
			<div className="flex-shrink-0 w-full max-w-lg lg:w-1/3 shadow-lg">
				<img src={imgUrl} className="object-cover w-full" />
			</div>
			<div className="col text-gray-700">
				<div className="text-lg font-semibold mb-1">{title}</div>
				<div className="text-gray-400 mb-4">{time}</div>
				<div className="col space-y-1 text-justify">
					{description.map((desc, idx) => (
						<div key={idx}> {desc} </div>
					))}
				</div>
			</div>
		</a>
	);
};
