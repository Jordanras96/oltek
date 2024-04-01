import { FaArrowDown } from "react-icons/fa6";
import { hero } from "../assets";
const Hero = () => {
  return (
    <section id="hero" className="text-gray-600 body-font hero">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">
            Bienvenue !
            <br className="hidden lg:inline-block " />
            Vous n’atterrissez pas ici par hasard !
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Des idées de projets, mais sans ressourcestechniques ? Des blocages
            sur vos opérations encours ? À la recherche d’un oeil de lynx
            pourpeaufiner vos dossiers ?
          </p>
          <div className="flex justify-center ">
            <button className="flex items-center justify-around px-6 py-2 space-x-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
              <span>Discutons !</span>
              <FaArrowDown size={20} />
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 xl:max-w-xl rounded-xl bg-green-50">
          <img
            className="object-center transform rounded  -scale-x-100 saturate-150"
            alt="hero"
            src={hero}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
