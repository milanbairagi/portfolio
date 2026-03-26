import { bio } from "../data/personalData";
import asciiLogo from "../asciiLogo";
import MainWindow from "./layout/MainWindow";
import TextH1 from "./ui/TextH1";
import KeyValue from "./ui/KeyValue";

const Hero = () => {
  return (
    <MainWindow>
      <div className="flex justify-center gap-10 flex-col md:flex-row container mx-auto">
        {/* Logo */}
        <div>
          <pre className="text-md">{asciiLogo}</pre>
        </div>

        {/* Description */}
        <div>
          <TextH1>MilanBairagi@dev</TextH1>

          <div className="mt-2">
            {bio.map((data) =>
              Object.entries(data).map(([key, value]) => {
                if (!value) return null;
                if (key === "portfolio") {
                  return <KeyValue key={key} keyName={key} value={value} link={`https://${value}`} />;
                }
                if (key === "email") {
                  return <KeyValue key={key} keyName={key} value={value} link={`mailto:${value}`} />;
                }
                if (key === "linkedin") {
                  return <KeyValue key={key} keyName={key} value={value} link={`https://www.linkedin.com/in/${value}`} />;
                }
                return <KeyValue key={key} keyName={key} value={value} />;
              })
            )}
          </div>
        </div>
      </div>
      ;
    </MainWindow>
  );
};

export default Hero;
