import React from "react";
import userData from "@constants/data";

export default function Projects() {
	return (
		<div className="col space-y-8 text-gray-700 px-16">
			{userData.projects.map((proj) => (
				<ProjectCard
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
		<a href={link} className="flex items-center space-x-8 p-8 w-full bg-white rounded-2xl shadow-lg transition-all border-2 border-transparent hover:border-indigo-500">
			<div className="flex-shrink-0 w-1/3 shadow-lg">
				<img src={imgUrl} className="object-cover w-full" />
			</div>
			<div className="col">
				<div className="text-lg font-semibold mb-1">{title}</div>
				<div className="text-gray-400 mb-4">{time}</div>
				<div className="col space-y-1 text-justify">
					{description.map((desc, idx) => (
						<div key={idx} className="dark:text-gray-300"> {desc} </div>
					))}
				</div>
			</div>
		</a>
	);
};
