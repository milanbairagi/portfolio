import { useState } from "react";
import { FiCopy, FiGithub, FiLinkedin } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import SectionHeading from "../components/texts/SectionHeading";
import Window from "../components/Window";
import { contacts } from "../data/contacts";
import { FaCheck } from "react-icons/fa6";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contacts.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contact" className="container mt-12 px-4 py-12 mx-auto">
      <SectionHeading title="contact" />
      <div className="mx-auto max-w-5xl text-center">
        <p className="mx-auto text-base text-secondary/90 leading-relaxed sm:text-xl">
          Have a project in mind or want to collaborate? I'd love to hear from
          you. Let's discuss how we can work together to bring your ideas to
          life.
        </p>
      </div>

      <div className="grid mt-12 gap-8 mx-auto max-w-5xl md:grid-cols-2">
        <Window title="send_main.py">
          <div className="flex-col p-8 min-h-88 justify-between bg-primary-800 rounded-md items-center flex">
            <div className="h-24 w-24 justify-center border-2 border-primary-400 bg-primary-600 text-4xl text-secondary rounded-md flex items-center">
              <GoMail />
            </div>

            <h3 className="text-center text-xl font-bold text-secondary md:text-3xl">
              Send me an email
            </h3>

            <a
              href={`mailto:${contacts.email}`}
              className="gap-2 px-6 py-3 justify-center border border-primary-400 bg-primary-600 font-medium text-secondary rounded-md transition-colors duration-150 hover:bg-primary-500"
            >
              SAY HELLO <span aria-hidden="true">&gt;</span>
            </a>
          </div>
        </Window>

        <Window title="contact.sh">
          <div className="min-h-88 bg-primary-800 rounded-md">
            <div className="p-5 text-sm text-secondary/90 space-y-6">
              <div className="gap-2 text-secondary/80 flex items-center">
                <span className="text-accent-900">$</span>
                <span>./contact</span>
              </div>

              <div className="gap-3 px-3 py-3 justify-between border border-primary-400 bg-primary-600 text-base text-secondary rounded-md flex items-center">
                <span className="truncate">{contacts.email}</span>
                <button
                  type="button"
                  aria-label="Copy email address"
                  className="h-8 w-8 justify-center border border-primary-400 bg-primary-700 text-secondary rounded-md flex items-center transition-colors hover:bg-primary-500"
                  onClick={handleCopyEmail}
                >
                  {isCopied ? (
                    <FaCheck className="text-sm " />
                  ) : (
                    <FiCopy className="text-sm" />
                  )}
                </button>
              </div>

              <div className="pt-2 space-y-4">
                <a
                  href={`https://${contacts.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="gap-3 text-base text-secondary flex items-center transition-opacity hover:underline"
                >
                  <FiGithub className="text-lg text-secondary" />
                  <span>{contacts.github}</span>
                </a>

                <a
                  href={`https://${contacts.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="gap-3 text-base text-secondary flex items-center transition-opacity hover:underline"
                >
                  <FiLinkedin className="text-lg text-secondary" />
                  <span>{contacts.linkedin}</span>
                </a>
              </div>
            </div>
          </div>
        </Window>
      </div>
    </section>
  );
};

export default Contact;
