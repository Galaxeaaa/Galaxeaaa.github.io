import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import About from "../components/About"
import Projects from "../components/Projects"
import Experience from "@components/Experience";

export default function Home() {
	return (
		<ContainerBlock
			title="Cheng Wang"
			description=""
		>
			<div className="col max-w-6xl mx-auto">
				<Hero />
				<DividingLine Title="About Me" id="about"/>
				<About />
				<DividingLine Title="Selected Projects" id="projects"/>
				<Projects />
				<DividingLine Title="Experience" id="experience"/>
				<Experience />
			</div>
		</ContainerBlock>
	);
}

const DividingLine = ({ Title, id }) => {
	return (
		<div className="flex py-14 space-x-4 items-center px-10" id={id}>
			<div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700"> </div>
			<div className="text-2xl text-indigo-500 font-semibold underline decoration-4 decoration-emerald-300 min-w-fit"> {Title} </div>
			<div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700"> </div>
		</div>
	)
}

// export const getServerSideProps = async () => {
// 	console.log(process.env.GITHUB_AUTH_TOKEN);
// 	let token = process.env.GITHUB_AUTH_TOKEN;

// 	const repositories = await getLatestRepos(userData, token);
// 	// console.log("REPOSITORIES", repositories);

// 	return {
// 		props: {
// 			repositories,
// 		},
// 	};
// };
