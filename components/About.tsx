import React from "react";
import { about } from "@/data/data";

export default function About() {
	return (
		<div className="flex flex-col items-center space-y-8 text-plain">
			<div className="col space-y-4 text-justify">
				<p>
					Hi! I'm Cheng Wang, a Computer Vision Research Engineer at
					{" "}<a href="https://www.meetdandy.com/" >
						Dandy
					</a>
					. I have developed a strong passion for Visual Computing, particularly
					interested in inverse problems.
					I recently earned my Master's degree in Computer Science from {" "}
					<a href="https://ucsd.edu/" >
						UC San Diego
					</a>
					, advised by{" "}
					<a href="https://cseweb.ucsd.edu/~tzli/" >
						Prof. Tzu-Mao Li
					</a>.
					Before that, I received my Bachelor's degree in Computer Science and
					Technology at{" "}
					<a href="http://ckc.zju.edu.cn/ckcen/" >
						Chu Kochen College
					</a>{" "}
					of{" "}
					<a href="http://www.zju.edu.cn" >
						Zhejiang University
					</a>
					, advised by{" "}
					<a href="http://www.cad.zju.edu.cn/home/rwang/" >
						Prof. Rui Wang
					</a>
					.
				</p>

				<p>
					I was also a Software Engineer Intern at{" "}
					<a href="https://www.ea.com" >
						Electronic Arts
					</a>{" "}
					and a Rendering Engine Engineer Intern at{" "}
					<a href="https://www.raysengine.com/" >
						Rays Engine
					</a>
					. Feel free to take a look at my{" "}
					<a
						href="https://drive.google.com/file/d/1O_jdcHgd1_u4p-KMWuS6TaWNmiuWD0Pd/view?usp=sharing"

					>
						Resume
					</a>
					.
				</p>
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
		<div
			className="mr-2 mb-2 px-2 py-1 bg-white shadow select-none hover:-translate-y-0.5 hover:scale-105 transition-all border-collapse border-2 border-light rounded-xl"
		>
			{str}
		</div>
	)
}