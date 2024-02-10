import React from "react";
import { about } from "@/data/data";

export default function About() {
	let linkClassName = "text-black underline hover:text-indigo-700 hover:decoration-indigo-500";

	return (
		<div className="col items-center space-y-8 text-gray-700">
			<div className="col space-y-4 text-justify">
				{/* {about.description?.map((desc, idx) => (
					<div key={idx}> {desc} </div>
				))} */}
				<p>Hi! I'm Cheng Wang, a second-year Master student in Computer Science at <a href="https://ucsd.edu/" className={linkClassName}>UC San Diego</a>, advised by <a href="https://cseweb.ucsd.edu/~tzli/" className={linkClassName}>Prof. Tzu-Mao Li</a>. I received my Bachelor's degree in Computer Science and Technology at <a href="http://ckc.zju.edu.cn/ckcen/" className={linkClassName}>Chu Kochen College</a> of <a href="http://www.zju.edu.cn" className={linkClassName}>Zhejiang University</a>, advised by <a href="http://www.cad.zju.edu.cn/home/rwang/" className={linkClassName}>Prof. Rui Wang</a>. During my academic journey, I developed a strong passion for visual computing, particularly interested in physically-based rendering and inverse rendering. I am motivated to leverage technology to enhance people's lives, making them happier and more convenient.</p>

				<p>I was a Software Engineer Intern at <a href="https://www.ea.com" className={linkClassName}>Electronic Arts</a> and a Rendering Engine Engineer Intern at <a href="https://www.raysengine.com/" className={linkClassName}>Rays Engine</a>. Please feel free to take a look at my <a href="https://drive.google.com/file/d/1O_jdcHgd1_u4p-KMWuS6TaWNmiuWD0Pd/view?usp=sharing" className={linkClassName}>CV</a>.</p>
			</div>
			<div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
				<div className="col md:w-1/2 bg-gray-100 px-4 py-2 rounded-lg">
					<div className="text-lg font-semibold mb-2">Skills</div>
					<div className="flex flex-wrap">
						{about.skills.map((str, idx) => (
							<div key={idx} className="mr-2 mb-2 px-2 py-1 bg-white rounded-lg shadow select-none hover:-translate-y-0.5 hover:scale-105 transition-all">{str}</div>
						))}
					</div>
				</div>
				<div className="col md:w-1/2 bg-gray-100 px-4 py-2 rounded-lg">
					<div className="text-lg font-semibold mb-2">Interests</div>
					<div className="flex flex-wrap">
						{about.interests.map((str, idx) => (
							<div key={idx} className="mr-2 mb-2 px-2 py-1 bg-white rounded-lg shadow select-none hover:-translate-y-0.5 hover:scale-105 transition-all">{str}</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
