import PageContainer from "@/components/PageContainer";
import Hero from "@/components/Hero";
import About from "@/components/About"
import Publications from "@/components/Publications"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience";

export default function Home() {
	return (
		<PageContainer>
			<div className="col max-w-6xl mx-auto px-6 font-medium font-sans md:px-16">
				<Hero />
				<DividingLine title="About Me" id="about" />
				<About />
				<DividingLine title="Publications and Preprints" id="publications" />
				<Publications />
				<DividingLine title="Projects" id="projects" />
				<Projects />
				<DividingLine title="Experience" id="experience" />
				<Experience />
				<DividingLine title="" id="" />
			</div>
		</PageContainer>
	);
}

function DividingLine({ title, id }) {
	return (
		<div className="flex py-14 space-x-4 items-center -px-6" id={id}>
			{title ?
				(<>
					{/* <div className="h-0.5 w-full bg-light"> </div> */}
					<div className="text-3xl font-bold min-w-fit font-serif bg-gradient-to-r from-accent-1-dark to-accent-2-dark inline-block text-transparent bg-clip-text"> {title} </div>
					<div className="h-0.5 w-full bg-light"> </div>
				</>)
				: (
					<div className="h-0.5 w-full bg-light"> </div>
				)
			}
		</div>
	)
}
