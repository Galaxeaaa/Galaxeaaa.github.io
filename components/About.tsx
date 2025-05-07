import React from "react";
import { about } from "@/data/data";
import AboutText from "@/components/About.mdx"

export default function About() {
	return (
		<div className="flex flex-col items-center space-y-8 text-plain">
			<div className="col space-y-4 text-justify">
				<AboutText/>
			</div>
			<div className="flex flex-col text-sm md:flex-row space-y-8 md:space-y-0 md:space-x-8">
				<TagRegion title="Skills" tags={about.skills} />
				<TagRegion title="Interests" tags={about.interests} />
			</div>
		</div>
	);
}

function TagRegion({ title, tags }) {
	return (
		<div className="col bg-gray-200 px-4 py-2 rounded-3xl">
			<div className="text-lg font-semibold mb-2">{title}</div>
			<div className="flex flex-wrap">
				{tags.map((str, idx) => (
					<Tag key={idx} str={str} />
				))}
			</div>
		</div>
	);
}

function Tag({ str }) {
	return (
		<div className="mr-2 mb-2 px-2 py-1 bg-white shadow select-none hover:-translate-y-0.5 hover:scale-105 transition-all border-collapse border-2 border-light rounded-xl">
			{str}
		</div>
	)
}