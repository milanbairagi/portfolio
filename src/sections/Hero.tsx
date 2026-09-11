import { FaRegFile } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import ApiWindow from "../components/ApiWindow";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import type { HTMLAttributes } from "react";
import { contacts } from "../data/contacts";

const Hero = () => {
  const handleGoToContact = () => {
    window.location.href = "#contact";
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Milan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="grid max-w-5xl mx-auto min-h-dvh place-items-center"
    >
      <div
        className="grid grid-cols-1 gap-8 py-16 px-4 mx-auto sm:grid-cols-2 sm:items-center
          "
      >
        <div>
          <p className="text-lg">
            <span className="text-primary-400 text-2xl font-bold mr-2">$</span>
            hi I'm
          </p>
          <h1 className="flex gap-2">
            <span className="text-8xl font-bold text-accent-900">Milan</span>
            <span className="inline-block w-4 h-22 bg-accent-900 animate-cursor-blink"></span>
          </h1>
          <p className="mt-4 text-sm">
            I am a Full Stack Developer who enjoys building secure, real-time
            web applications from the ground up. I primarily work with Django
            and React, and I'm particularly interested in backend architecture,
            security, and systems that solve real-world problems. I've built
            projects ranging from zero-knowledge password management to
            real-time communication and property management platforms.
          </p>
          <div className="flex-col gap-4 mt-6 flex md:flex-row">
            <PrimaryButton
              label="Get in Touch"
              className="justify-center"
              onClick={handleGoToContact}
            />
            <SecondaryButton
              label="Download CV"
              icon={<FaRegFile />}
              className="justify-center"
              onClick={handleDownloadCV}
            />
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <SocialLink href={`https://www.${contacts.github}`}>
              <FiGithub />
              <span>Github</span>
            </SocialLink>
            <SocialLink href={`https://www.${contacts.linkedin}`}>
              <FiLinkedin />
              <span>LinkedIn</span>
            </SocialLink>
            <SocialLink href={`mailto:${contacts.email}`}>
              <GoMail />
              <span className="ml-0.5">Email</span>
            </SocialLink>
          </div>
        </div>

        <ApiWindow />
      </div>
    </section>
  );
};

type SocialLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  className?: string;
};

const SocialLink = ({ href, className="", children }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex gap-0.5 items-center text-sm text-accent-900 border-b hover:border-b-0 transition-all duration-100 ${className}`}
    >
      {children}
    </a>
  );
};

export default Hero;
