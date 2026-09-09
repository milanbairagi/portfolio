import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  technologies: string[];
  className?: string;
  imagePosition: "left" | "right";
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectUrl,
  githubUrl,
  technologies,
  className,
  imagePosition = "left",
}: ProjectCardProps) => {
  return (
    <div
      className={`flex ${imagePosition === "left" ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"} gap-4 p-4 rounded-md ${className}`}
    >
      <img
        src={imageUrl}
        alt={title}
        className="object-cover rounded-md md:max-w-[24%] aspect-video"
      />
      <div className="flex-1 flex-col justify-between flex">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>

        <div className="flex-wrap gap-2 mt-2 flex">
          {technologies.map((tech) => (
            <TechnologyCard key={tech} name={tech} />
          ))}
        </div>
        <div className="gap-2 mt-4 flex">
          <PrimaryButton
            label="Live"
            size="sm"
            icon={<GoArrowUpRight />}
            onClick={() => window.open(projectUrl, "_blank")}
          />
          <SecondaryButton
            label="Source"
            size="sm"
            icon={<FaGithub />}
            onClick={() => window.open(githubUrl, "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

const TechnologyCard = ({ name }: { name: string }) => {
  return (
    <div className="px-2 py-1 border border-primary-400 rounded-md text-xs">
      {name}
    </div>
  );
};

export default ProjectCard;
