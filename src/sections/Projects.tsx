import SectionHeading from "../components/texts/SectionHeading";
import { projectData } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="container mt-12 mx-auto">
      <SectionHeading title="Projects" />

      {projectData.map((project, index) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          imageUrl={project.image}
          projectUrl={project.liveUrl}
          githubUrl={project.githubUrl}
          technologies={project.technologies}
          imagePosition={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </section>
  );
};

export default Projects;