import React from "react";
import { about } from "@/data/data";

export default function About() {
	return (
		<div className="col items-center space-y-8 text-gray-700 px-16">
			<div className="col space-y-4 text-justify">
				{/* {about.description?.map((desc, idx) => (
					<div key={idx}> {desc} </div>
				))} */}
				<p>Hi! I'm Cheng Wang, a Master's student at the University of California San Diego. I completed my undergraduate studies at Chu Kochen College of Zhejiang University, where I majored in Computer Science and Technology. During my academic journey, I developed a strong passion for visual computing, particularly in the fields of physically-based rendering and inverse rendering. I am motivated to leverage technology to enhance people's lives, making them happier and more convenient.</p>

				<p>Please feel free to take a look at my <a href="https://drive.google.com/file/d/1O_jdcHgd1_u4p-KMWuS6TaWNmiuWD0Pd/view?usp=sharing" className="font-bold text-indigo-500 hover:underline">CV</a>.</p>
			</div>
			<div className="flex space-x-8">
				<div className="col w-1/2 bg-gray-100 px-4 py-2 rounded-lg">
					<div className="text-xl font-semibold mb-2">Interests</div>
					<div className="flex flex-wrap">
						{about.interests.map((str, idx) => (
							<div key={idx} className="mr-2 mb-2 px-2 py-1 bg-white rounded-lg shadow select-none hover:-translate-y-0.5 hover:scale-105 transition-all">{str}</div>
						))}
					</div>
				</div>
				<div className="col w-1/2 bg-gray-100 px-4 py-2 rounded-lg">
					<div className="text-xl font-semibold mb-2">Skills</div>
					<div className="flex flex-wrap">
						{about.skills.map((str, idx) => (
							<div key={idx} className="mr-2 mb-2 px-2 py-1 bg-white rounded-lg shadow select-none hover:-translate-y-0.5 hover:scale-105 transition-all">{str}</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
