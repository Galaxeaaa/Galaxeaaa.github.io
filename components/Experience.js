import React from "react";
import userData from "@constants/data";

export default function Experience() {
	return (
		<div className="grid grid-cols-1 dark:bg-gray-900 max-w-max mx-auto px-10">
			{userData.experience.map((exp, idx) => (
				<ExperienceCard
					key={idx}
					title={exp.title}
					catagory={exp.catagory}
					desc={exp.desc}
					year={exp.year}
					company={exp.company}
					companyLink={exp.companyLink}
					last={idx === userData.experience.length - 1 ? 1 : 0}
					current={exp.current}
				/>
			))}
		</div>
	);
}

const ExperienceCard = ({ title, desc, year, company, companyLink, catagory, last, current }) => {
	return (
		<div className="flex">
			<p className="pt-[7px] mr-4 w-32 text-right text-md text-gray-400">{year}</p>
			<div className="flex flex-col items-center mr-4">
				<div>
					{current === true ?
						<div className="absolute w-10 h-10 border-[3px] rounded-full border-indigo-300 animate-ping"></div>
						: null}
					<div className="flex items-center justify-center w-10 h-10 border-[3px] rounded-full border-indigo-300">
						{(() => {
							switch (catagory) {
								case "education":
									return <EducationIcon />
								case "company":
									return <CompanyIcon />
								default:
									return null
							}
						})()
						}
					</div>
				</div>
				{last === 1 ? null : <div className="w-px h-full bg-indigo-100"></div>}
			</div>
			<div className="pt-1 pb-8">
				<p className="text-lg font-bold">{title}</p>
				<a href={companyLink} className="mb-2 text-gray-700 hover:underline hover:text-indigo-600">{company}</a>
				{/* <p className="text-gray-700">{desc}</p> */}
			</div>
		</div>
	);
};

const EducationIcon = () => {
	return (
		<svg className="fill-indigo-500" t="1661403879000" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5036" width="26" height="26"><path d="M981.567401 373.726208 981.567401 543.26272l35.689472 35.699712-74.415104 77.443072-75.336704-75.158528 51.58912-46.90944L919.094185 400.489472c-218.90048 90.257408-289.074176 118.310912-337.620992 140.2112-48.54784 21.900288-83.506176 21.789696-131.652608 3.647488-48.1536-18.147328-277.363712-101.80096-391.17824-156.269568-75.948032-36.340736-80.837632-59.388928 1.304576-90.231808 107.200512-40.725504 284.38528-105.946112 378.305536-141.541376 55.593984-22.490112 84.995072-34.768896 136.026112-9.121792C665.399209 184.810496 873.609129 262.941696 977.141673 305.6896 1067.266985 345.020416 1006.677929 357.957632 981.567401 373.726208L981.567401 373.726208zM592.030633 607.809536c52.936704-21.84192 124.314624-57.957376 202.141696-91.298816L794.172329 784.20992c0 0-100.652032 107.07456-277.599232 107.07456-190.558208 0-293.490688-107.07456-293.490688-107.07456L223.082409 534.336512c60.068864 24.4736 127.521792 45.531136 209.153024 73.473024C482.546601 625.71008 546.388905 631.899136 592.030633 607.809536L592.030633 607.809536zM592.030633 607.809536" p-id="5037"></path></svg>
	)
}

const CompanyIcon = () => {
	return (
		<svg className="fill-indigo-500" t="1661404057072" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6043" width="30" height="30"><path d="M619.712 198.186667v603.264h44.544V342.101333l144.576 50.88c12.778667 8.298667 20.864 22.037333 22.037333 37.077334l0.149334 3.797333-0.021334 367.594667h48.917334v64h-666.453334v-64h48.64l0.021334-489.493334c0-16.810667 8.661333-32.426667 22.912-41.365333l260.053333-113.770667c32.490667-20.288 74.624 3.050667 74.624 41.344z m-107.413333 284.010666l-142.72 58.944v69.226667l142.72-58.944v-69.226667z m0-151.36l-142.72 60.714667v69.546667l142.72-60.757334v-69.504z" p-id="6044"></path></svg>
	)
}
