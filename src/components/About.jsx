import { GiTechnoHeart } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { HiRocketLaunch } from "react-icons/hi2";
import { TbActivityHeartbeat } from "react-icons/tb";
import AboutImage from "../assets/about/about.jpg";

const About = () => {
  const data = [
    {
      icon: <HiRocketLaunch size={28} />,
      title: "Création",
      description:
        "OLTEK.Studio est une TPE créée en janvier 2024. Jeune, toute fraîche, mais opérationnelle depuis 2014 !",
    },
    {
      icon: <TbActivityHeartbeat size={28} />,
      title: "Déclic",
      description:
        "Au fil du temps, nous avons constaté l'évolution constante du numérique et ressenti le désir croissant d'exploiter nos compétences.",
    },
    {
      icon: <GiTechnoHeart size={28} />,
      title: "All tech",
      description:
        'OLTEK.Studio incarne l\'essence de "All tech" (toutes les technologies), mettant à disposition une gamme complète de solutions technologiques.',
    },
    {
      icon: <GoGoal size={28} />,
      title: "Goals",
      description:
        "Enracinés dans notre engagement envers les causes sociales, nous oeuvrons pour un accès équitable à l'éducation, notamment en améliorant sa qualité à Madagascar.",
    },
  ];

  return (
    <section id="about" className="text-white body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        <h2 className="w-full mb-10 text-3xl font-semibold ">
          Qui sommes-nous ?
        </h2>
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            {data.map((item, index) => (
              <div key={index} className="relative flex pb-12 group ">
                {item.title !== "Goals" && (
                  <div className="absolute inset-0 flex items-center justify-center w-10 h-full ">
                    <div className="w-1 h-full bg-gray-200 pointer-events-none transition duration-500 group-hover:bg-transparent"></div>
                  </div>
                )}
                <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full group-hover:scale-150  transition duration-500 ">
                  {item.icon}
                </div>
                <div className="flex-grow pl-4 ">
                  <h2 className="mb-1 text-sm transition ease-out duration-500 font-medium tracking-wider text-white uppercase title-font group-hover:text-3xl group-hover:md:text-6xl group-hover:font-extrabold group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] group-hover:bg-[length:200%_auto] group-hover:animate-gradient">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
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
