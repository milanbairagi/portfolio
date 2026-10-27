type ProjectData = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projectData: ProjectData[] = [
  {
    title: "WaveLine",
    description:
      "A cross-platform messaging application featuring real-time chat, presence tracking, read receipts, and audio/video calling. Built with Django Channels, React, and React Native.",
    image: "project-images/WaveLine.png",
    technologies: [
      "Django",
      "React",
      "React Native",
      "WebRTC",
      "PostgreSQL",
      "Redis",
      "DRF",
      "Tailwind CSS",
      "JWT",
      "WebSocket",
      "Docker",
    ],
    liveUrl: "https://wave-line.vercel.app",
    githubUrl: "https://github.com/milanbairagi/WaveLine",
  },
  {
    title: "LockLeaf",
    description:
      "A secure password manager built with Django REST API and React. It allows users to store, manage, and generate strong passwords with features like encryption and user authentication.",
    image: "project-images/leaflock.png",
    technologies: [
      "React",
      "Django",
      "PostgreSQL",
      "DRF",
      "Tailwind CSS",
      "JWT",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/milanbairagi/LockLeaf",
  },
  {
    title: "EstateEase",
    description:
      "A full-stack e-commerce solution built with Django REST API and React. Features include user authentication, payment integration, order management, and admin dashboard.",
    image: "project-images/EstateEase.png",
    technologies: [
      "React",
      "Django",
      "PostgreSQL",
      "DRF",
      "Tailwind CSS",
      "Cloudinary",
      "JWT",
    ],
    liveUrl: "https://estate-ease-rho.vercel.app",
    githubUrl: "https://github.com/milanbairagi/EstateEase",
  },
];
