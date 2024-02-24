import React from "react";
import { projects } from "@/data/data";

export default function Projects() {
	return (
		<div className="flex flex-col items-center space-y-8 text-gray-700">
			{projects.map((proj, index) => (
				<ProjectCard
					key={index}
					title={proj.title}
					time={proj.time}
					link={proj.url}
					imgUrl={proj.imgUrl}
					description={proj.desc}
				/>
			))}
		</div>
	);
}

const ProjectCard = ({ title, time, link, imgUrl, description }) => {
	return (
		<a href={link} className="flex flex-col no-underline sm:flex-row items-start sm:items-center sm:space-x-8 p-0 sm:p-8 w-full bg-white rounded-2xl shadow-lg transition-all border-2 border-collapse hover:border-indigo-500">
			<div className="flex-shrink-0 w-full sm:w-1/3 shadow-lg max-h-40 overflow-hidden">
				<img src={imgUrl} className="object-cover w-full"/>
			</div>
			<div className="col text-gray-700 text-left p-4 sm:p-0 sm:w-2/3">
				<div className="text-lg font-semibold mb-1">{title}</div>
				<div className="text-gray-400 mb-0 sm:mb-4">{time}</div>
				<div className="hidden sm:block col space-y-1 text-justify">
					{description.map((desc, idx) => (
						<div key={idx}> {desc} </div>
					))}
				</div>
			</div>
		</a>
	);
};
