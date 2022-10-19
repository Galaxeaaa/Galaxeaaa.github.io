import React from "react";
import userData from "@constants/data";

export default function About() {
	return (
		<div className="col items-center space-y-8 text-gray-700 px-16">
			<div className="col space-y-4 text-justify leading-relaxed">
				{userData.about.description?.map((desc, idx) => (
					<div key={idx} className="dark:text-gray-300"> {desc} </div>
				))}
			</div>
			<div className="flex space-x-8">
				<div className="col w-1/2 bg-gray-100 px-4 py-2 rounded-lg">
					<div className="text-xl font-semibold mb-2">Interests</div>
					<div className="flex flex-wrap">

						{userData.about.interests.map((str, idx) => (
							<div key={idx} className="mr-2 mb-2 px-2 py-1 bg-white rounded-lg shadow select-none hover:-translate-y-0.5 hover:scale-105 transition-all">{str}</div>
						))}
					</div>
				</div>
				<div className="col w-1/2 bg-gray-100 px-4 py-2 rounded-lg">
					<div className="text-xl font-semibold mb-2">Skills</div>
					<div className="flex flex-wrap">
						{userData.about.skills.map((str, idx) => (
							<div key={idx} className="mr-2 mb-2 px-2 py-1 bg-white rounded-lg shadow select-none hover:-translate-y-0.5 hover:scale-105 transition-all">{str}</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
