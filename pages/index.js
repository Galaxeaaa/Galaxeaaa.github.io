import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home() {
	return (
		<ContainerBlock
			title="Cheng Wang"
			description="I've been developing websites for 5 years straight. Get in touch with me to know more."
		>
			<Hero />
			<FavouriteProjects />
			{/* <LatestCode repositories={repositories} /> */}
		</ContainerBlock>
	);
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
