import React from "react";
import { publications } from "@/data/data";

export default function Publications() {
	return (
		<div className="flex flex-col items-center space-y-8 text-color-plain">
			{publications.map((proj, index) => (
				<PublicationCard
					key={index}
					title={proj.title}
					authors={proj.authors}
					myid={proj.myid}
					year={proj.year}
					publisher={proj.publisher}
					link={proj.link}
					desc={proj.desc}
				/>
			))}
		</div>
	);
}

const PublicationCard = ({ title, authors, myid, year, publisher, link, desc }) => {
	return (
		<a href={link} className="flex flex-col no-underline sm:flex-row items-start sm:items-center sm:space-x-8 p-0 sm:p-8 w-full bg-white rounded-2xl shadow-lg transition-all border-2 border-collapse hover:border-color-accent-1 overflow-hidden">
			<div className="col text-color-plain text-left p-4 sm:p-0 sm:space-y-1">
				<div className="text-lg font-semibold">{title}</div>
				<div>
					{/* Add authors names spaced with commas. Don't use <div> to add new lines. Semi-Bold the third author. */}
					{authors.map((author, idx) => (
						<span key={idx}>
							{idx > 0 && ", "}
							{idx === myid - 1 ? <span className="font-serif italic">{author}</span> : <span>{author}</span>}
						</span>
					))}
				</div>
				<div className="italic">{publisher}</div>
				<div className="hidden sm:block text-color-light">
					{desc}
				</div>
			</div>
		</a>
	);
};
