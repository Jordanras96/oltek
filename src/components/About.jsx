import { GiTechnoHeart } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { HiRocketLaunch } from "react-icons/hi2";
import { TbActivityHeartbeat } from "react-icons/tb";
import AboutImage from "../assets/about/about.jpg";

// Import dynamique pour charger l'image de manière asynchrone

const About = () => {
  return (
    <section id="about" className="text-white body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        <h2 className="w-full mb-10 text-4xl font-semibold ">
          Qui sommes-nous ?
        </h2>
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                <HiRocketLaunch size={28} />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-sm font-medium tracking-wider text-white uppercase title-font">
                  Création
                </h2>
                <p className="leading-relaxed text-white">
                  OLTEK.Studio est une TPE créée en janvier 2024. Jeune, toute
                  fraîche, mais opérationnelle depuis 2014 !
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                <TbActivityHeartbeat size={28} />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-sm font-medium tracking-wider text-white uppercase title-font">
                  Déclic
                </h2>
                <p className="leading-relaxed text-white">
                  Au fil du temps, nous avons constaté l&apos;évolution
                  constante du numérique et ressenti le désir croissant
                  d&apos;exploiter nos compétences.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                <GiTechnoHeart size={28} />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-sm font-medium tracking-wider text-white uppercase title-font">
                  All tech
                </h2>
                <p className="leading-relaxed text-white">
                  OLTEK.Studio incarne l&apos;essence de &quot;All tech&quot;
                  (toutes les technologies), mettant à disposition une gamme
                  complète de solutions technologiques.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                <GoGoal size={28} />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-sm font-medium tracking-wider text-white uppercase title-font">
                  Goals
                </h2>
                <p className="leading-relaxed text-white">
                  Enracinés dans notre engagement envers les causes sociales,
                  nous oeuvrons pour un accès équitable à l&apos;éducation,
                  notamment en améliorant sa qualité à Madagascar.
                </p>
              </div>
            </div>
          </div>

          <img
            className="object-cover object-center mt-12 rounded-lg lg:w-3/5 md:w-1/2 md:mt-0"
            src={AboutImage}
            alt="About"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
