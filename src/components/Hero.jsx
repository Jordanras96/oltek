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
            Vous n&apos;atterrissez pas ici par hasard !
          </h1>
          <p className="mb-8 leading-relaxed text-white text-balance">
            Des idées de projets, mais sans ressourcestechniques ? Des blocages
            sur vos opérations en cours ? À la recherche d&apos;un oeil de lynx
            pour peaufiner vos dossiers ?
          </p>
          <div className="flex justify-center ">
            <button className="group relative min-h-[50px] w-40 overflow-hidden border border-purple-500 bg-transparent text-purple-500 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
              <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
              <span className="absolute space-x-2 bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                <span>Discutons ! </span> <FaArrowDown size={20} />
              </span>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 xl:max-w-xl group group-hover:rounded-none transition-all duration-300  rounded-bl-full rounded-tl-full shadow-3xl bg-green-50 ">
          <img
            className="object-center group-hover:rounded-none  transition-all duration-300  rounded-br-full rounded-tr-full -scale-x-100 saturate-150"
            alt="hero"
            src={hero}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
