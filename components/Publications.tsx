import React from "react";
import { publications } from "@/data/data";
import BaseCard from "@/utils/BaseCard";

export default function Publications() {
	return (
		<div className="flex flex-col items-center space-y-8 text-plain">
			{publications.map((proj, index) => (
				<PublicationCard
					key={index}
					title={proj.title}
					authors={proj.authors}
					myid={proj.myid}
					year={proj.year}
					publisher={proj.publisher}
					project_url={proj.project_url}
					paper_url={proj.paper_url}
					code_url={proj.code_url}
					desc={proj.desc}
				/>
			))}
		</div>
	);
}

function PublicationCard({ title, authors, myid, year, publisher, desc, project_url, paper_url, code_url }) {
	return (
		<BaseCard>
			<div className="flex flex-col text-plain text-left">
				<div className="font-semibold">{title}</div>
				<div>
					{authors.map((author, idx) => (
						<span key={idx}>
							{idx > 0 && ", "}
							{idx === myid - 1 ? <span className="font-bold">{author}</span> : <span>{author}</span>}
						</span>
					))}
				</div>
				<div className="italic">{publisher}</div>
				<div className="hidden sm:block text-light">
					{desc}
				</div>
				<div className="flex space-x-4">
					<a href={paper_url}>Paper</a>
					{project_url && <a href={project_url}>Project Page</a>}
					{code_url != "Coming" && <a href={code_url}>Code</a>}
					{code_url == "Coming" && <a>Code Coming Soon!</a>}
				</div>
			</div>
		</BaseCard>
	);
}
