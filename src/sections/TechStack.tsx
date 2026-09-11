import type { CSSProperties, ReactNode } from "react";

import SectionHeading from "../components/texts/SectionHeading";
import techStack from "../data/skills";
import { getIsLightColor } from "../utils/style";

const TechStack = () => {
  return (
    <section id="tech-stack" className="container mt-4 px-4 mx-auto">
      <SectionHeading title="Tech Stack" />

      <table>
        {techStack.map((stack) => (
          <tr key={stack.category} className="border-b border-primary-700">
            <th className="px-4 text-lg text-accent-900 font-bold">
              {stack.category}
            </th>
            <td className="flex-wrap gap-2 px-0 py-4 flex">
              {stack.technologies.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={<skill.icon />}
                  color={skill.color}
                />
              ))}
            </td>
          </tr>
        ))}
      </table>
    </section>
  );
};

const SkillCard = ({
  name,
  icon,
  color,
}: {
  name: string;
  icon: ReactNode;
  color?: string;
}) => {
  const isLightHoverColor = color ? getIsLightColor(color) : false;

  const skillStyle = {
    ["--skill-hover"]: color ?? "var(--primary-color-400)",
  } as CSSProperties;

  const hoverTextClass = isLightHoverColor
    ? "hover:text-primary-900"
    : "hover:text-white";

  return (
    <div
      className={`gap-2 px-2 py-2 border border-primary-400 bg-primary-600 font-normal text-white text-xs rounded-sm justify-between inline-flex items-center leading-none transition-colors duration-150 hover:bg-(--skill-hover) ${hoverTextClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-900 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900`}
      style={skillStyle}
    >
      <span className="text-[1.25em]">{icon}</span>
      <span>{name}</span>
    </div>
  );
};

export default TechStack;
