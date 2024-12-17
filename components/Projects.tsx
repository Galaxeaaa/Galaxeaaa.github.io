import React from "react";
import { projects } from "@/data/data";
import BaseCard from "@/utils/BaseCard";

export default function Projects() {
	return (
		<div className="flex flex-col items-center space-y-8 text-plain">
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
		<BaseCard link={link}>
			<div className="flex flex-col space-y-4 items-start sm:flex-row sm:space-y-0 sm:space-x-8">
				<div className="flex-shrink-0 w-full sm:w-1/3 shadow-md max-h-40 overflow-hidden">
					<img src={imgUrl} className="object-cover w-full" />
				</div>
				<div className="flex flex-col justify-center text-color-plain text-left sm:w-2/3">
					<div className="font-semibold">{title}</div>
					<div className="text-color-light">{time}</div>
					<div className="hidden sm:block text-justify">
						{description.map((desc, idx) => (
							<div key={idx}> {desc} </div>
						))}
					</div>
				</div>
			</div>
		</BaseCard>
	);
};
