import asciiLogo from "../asciiLogo";

const Hero = () => {
  return <div className="flex justify-center gap-10 flex-col md:flex-row container mx-auto">
    <div>
      <h2 className="text-3xl">Hey! I'm <span className="highlight">Milan Bairagi</span></h2>
      <p className="text-sm mt-2 text-wrap">
        Lorem ipsum dolor sit amet consectetur <span className="highlight">adipisicing elit</span>. Exercitationem, sit doloremque? Odio rerum vero ducimus tenetur omnis nihil numquam ut quibusdam eum sunt itaque maiores voluptas enim natus, eligendi eveniet. Suscipit nam est expedita nobis dolorum, officiis sit eveniet dolor voluptatibus, magni qui architecto deserunt ipsa voluptates earum quidem quaerat, distinctio necessitatibus. Itaque aspernatur esse aliquid atque beatae, alias voluptates iure ipsum doloremque dolor ducimus inventore sit necessitatibus eos excepturi laborum nam! Nisi quaerat quae sequi, ut aliquam sapiente quidem maxime esse, vitae quisquam quos cupiditate aspernatur est optio iste maiores at. Tempore provident quod fugiat modi odio! Maiores, minima?
      </p>
    </div>
    <div>
      <pre className="text-md">
        {asciiLogo}
      </pre>
    </div>

  </div>;
};

export default Hero;
