import { projects } from "../../data/projects";
import Title from "../Hero/Title";
import CustomSection from "../SectionComponent/CustomSection";
import Project from "./Project";

type Props = {};

const Projects = (props: Props) => {
	return (
		<CustomSection id="projects" bg="brand.800" waveOption={4}>
			<Title title="Few Things I've Built!" fontWeight="bold" size="5xl" />

			{projects.map((project, id) => (
				<Project
					key={id + project.title}
					title={project.title}
					image={project.image}
					description={project.description}
					projectLink={project.projectLink}
					githubLink={project.githubLink}
				/>
			))}
		</CustomSection>
	);
};

export default Projects;
