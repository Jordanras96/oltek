import bulb from "@/src/assets/services/bulb.png";
import PropTypes from "prop-types";

const ServiceItem = ({
  title,
  description,
  gradientFrom,
  gradientTo,
  parentClasses,
  childClasses,
}) => {
  return (
    <div
      className={`h-24 ${parentClasses} lg:max-w-screen-lg 2xl:max-w-3xl rounded-md bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] p-1 underline-gradient bg-[length:200%_200%] bg-[left_0%_bottom_0%] bg-repeat-x animate-background hover:scale-125`}
    >
      <div
        className={`flex flex-col lg:items-start items-center h-full w-full bg-gray-800 ${childClasses} `}
      >
        <h1 className="text-2xl font-black text-white mb-3">{title}</h1>
        <p className="leading-relaxed text-base text-white">{description}</p>
      </div>
    </div>
  );
};

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gradientFrom: PropTypes.string.isRequired,
  gradientTo: PropTypes.string.isRequired,
  parentClasses: PropTypes.string.isRequired,
  childClasses: PropTypes.string.isRequired,
};

const Services = () => {
  const servicesData = [
    {
      title: "UX Writing",
      description:
        "Création de contenu textuel pour les interfaces utilisateur",
      gradientFrom: "#fa5357",
      gradientTo: "#a1035c",
      parentClasses: "xl:max-w-4xl animation-bg lg:-ml-80 xl:-ml-64 2xl:-ml-64",
      childClasses: "lg:pl-72 xl:pl-96 2xl:pl-80",
    },
    {
      title: "UI Design",
      description:
        "Création de contenu textuel pour les interfaces utilisateur",
      gradientFrom: "#50c5d4",
      gradientTo: "#064290",
      parentClasses: "xl:max-w-3xl   lg:-ml-80 xl:-ml-[15rem] 2xl:-ml-80",
      childClasses: "lg:pl-60 xl:pl-72 2xl:pl-80",
    },
    {
      title: "NoCode",
      description: "Personnalisation et intégration de solutions NoCode",
      gradientFrom: "#4d58cc",
      gradientTo: "#a258c4",
      parentClasses: "xl:max-w-[46rem] lg:-ml-80 xl:-ml-72 2xl:-ml-96",
      childClasses: "lg:pl-52 xl:pl-64 2xl:pl-80",
    },
    {
      title: "Tutorat",
      description:
        "Dans l'apprentissage des technologies numériques / Conseil-carrière",
      gradientFrom: "#122e78",
      gradientTo: "#7d4dcd",
      parentClasses: "xl:max-w-3xl   lg:-ml-80 xl:-ml-96 2xl:-ml-[28rem]",
      childClasses: "lg:pl-32 xl:pl-56 2xl:pl-64",
    },
    {
      title: "Rédaction de subventions/ montage de dossier",
      description:
        "Élaboration de propositions de subvention et montage de dossiers",
      gradientFrom: "#8665fc",
      gradientTo: "#5ce0e6",
      parentClasses:
        "xl:max-w-3xl lg:-ml-[20rem] xl:-ml-[28rem] 2xl:-ml-[32rem]",
      childClasses: "sm:px-4 md:px-20 lg:pl-[4.8rem] xl:pl-28 2xl:pl-28",
    },
  ];

  return (
    <section id="services" className="text-gray-600 body-font">
      <h2 className="uppercase font-medium text-white text-3xl container mx-auto text-center">
        à votre service
      </h2>
      <div className="container px-5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden z-10">
          <img
            alt="Services"
            className="object-scale-down h-full w-full"
            src={bulb}
          />
        </div>
        <div className="flex flex-col justify-evenly flex-wrap lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          {servicesData.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              gradientFrom={service.gradientFrom}
              gradientTo={service.gradientTo}
              parentClasses={service.parentClasses}
              childClasses={service.childClasses}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
