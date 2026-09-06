import ApiWindow from "../components/ApiWindow";

const Hero = () => {
  return (
    <section>
      <div
        className="grid grid-cols-1 gap-8 py-16 px-4 mx-auto sm:grid-cols-2 sm:items-center
          "
      >
        <h1 className="text-3xl text-accent-900">Your Name</h1>
        <ApiWindow filepath="portfolio_controller.py" apiEndpoint="/api/portfolio">
          <div className="w-100 h-100">
            Just a Text
          </div>
        </ApiWindow>
      </div>
    </section>
  );
};

export default Hero;
