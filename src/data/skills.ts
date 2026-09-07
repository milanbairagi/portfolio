import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";

import { FaReact } from "react-icons/fa";
import { SiTanstack } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

import { SiDjango } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { SiCelery } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";


import { FaDocker } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiNginx } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGunicorn } from "react-icons/si";
import { FaLinux } from "react-icons/fa";

const techStack = [
  {
    "category": "Programming Languages",
    "technologies": [
      { "name": "Python", "icon": FaPython, "color": "#3776AB" },
      { "name": "JavaScript", "icon": IoLogoJavascript, "color": "#F7DF1E" },
      { "name": "HTML", "icon": FaHtml5, "color": "#E34F26" },
      { "name": "CSS", "icon": FaCss3Alt, "color": "#1572B6" },
      { "name": "C++", "icon": TbBrandCpp, "color": "#00599C" },
      { "name": "C#", "icon": TbBrandCSharp, "color": "#68217A" }
    ]
  },
  {
    "category": "Frontend Development",
    "technologies": [
      { "name": "React", "icon": FaReact, "color": "#61DAFB" },
      { "name": "TanStack Query", "icon": SiTanstack, "color": "#FF4154" },
      { "name": "Tailwind CSS", "icon": RiTailwindCssFill, "color": "#06B6D4" },
      { "name": "Bootstrap", "icon": FaBootstrap, "color": "#7952B3" },
      { "name": "Axios", "icon": SiAxios, "color": "#5A29E4" },
      { "name": "Redux", "icon": SiRedux, "color": "#764ABC" },
      { "name": "Figma", "icon": FaFigma, "color": "#F24E1E" }
    ]
  },
  {
    "category": "Backend Development",
    "technologies": [
      { "name": "Django", "icon": SiDjango, "color": "#092E20" },
      { "name": "Django REST Framework", "icon": SiDjango, "color": "#092E20" },
      { "name": "Redis", "icon": DiRedis, "color": "#DC382D" },
      { "name": "Celery", "icon": SiCelery, "color": "#37814A" },
      { "name": "MySQL", "icon": DiMysql, "color": "#4479A1" },
      { "name": "PostgreSQL", "icon": SiPostgresql, "color": "#336791" },
      { "name": "JWT", "icon": SiJsonwebtokens, "color": "#000000" }
    ]
  },
  {
    "category": "DevOps & Tools",
    "technologies": [
      { "name": "Docker", "icon": FaDocker, "color": "#2496ED" },
      { "name": "Azure", "icon": VscAzure, "color": "#0078D4" },
      { "name": "Nginx", "icon": SiNginx, "color": "#009639" },
      { "name": "Git", "icon": FaGitAlt, "color": "#F05032" },
      { "name": "GitHub", "icon": FaGithub, "color": "#181717" },
      { "name": "Gunicorn", "icon": SiGunicorn, "color": "#499848" },
      { "name": "Linux", "icon": FaLinux, "color": "#FCC624" }
    ]
  }
];

export default techStack;