import { FaRegFile } from "react-icons/fa";
import ApiWindow from "../components/ApiWindow";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";

const Hero = () => {
  return (
    <section id="hero">
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            numquam earum autem quam est, voluptas consequatur accusantium cum!
            Nesciunt necessitatibus laborum enim esse aliquam. Omnis facilis,
            deleniti suscipit maxime incidunt earum quidem dolorem odit ea iste
            sapiente, quisquam eaque debitis soluta aliquam, ab dignissimos iure
            cumque ad. Commodi, aliquam enim.
          </p>
          <div className="flex flex-col gap-4 mt-6 md:flex-row">
            <PrimaryButton label="Get in Touch" className="justify-center" />
            <SecondaryButton label="Download CV" icon={<FaRegFile />} className="justify-center" />
          </div>
        </div>

        <ApiWindow
          filepath="portfolio_controller.py"
          apiEndpoint="/api/portfolio"
        >
          <div className="w-100 h-100">Just a Text</div>
        </ApiWindow>
      </div>
    </section>
  );
};

export default Hero;
