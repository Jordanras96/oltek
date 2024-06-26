import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import InclusionIcon from "../assets/features/digital-inclusion.png";
import CollaborationIcon from "../assets/features/handshake.png";
import InnovationIcon from "../assets/features/innovation.png";

const Features = () => {
  const cardInfo = [
    {
      title: "inclusion",
      description:
        "créer des opportunités accessibles à tous, sans distinction de genre, d'origine ou de statut socio-économique",
      icon: InclusionIcon,
    },
    {
      title: "innovation",
      description:
        "en constante recherche de nouvelles solutions pourrépondre aux défis technologiques et sociaux de notre époque et notre pays",
      icon: InnovationIcon,
    },
    {
      title: "collaboration",
      description:
        "travailler ensemble pour atteindre des objectifs communs et créer un impact positif dans nos communautés",
      icon: CollaborationIcon,
    },
  ];

  return (
    <section id="features" className="mb-24 text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h2 className="mb-4 text-3xl font-medium text-white uppercase sm:text-3xl title-font">
            Nos mots d&apos;ordre et valeurs fondamentales
          </h2>
          <p className="pt-5 mx-auto leading-relaxed text-white lg:w-2/3">
            Chez OLTEK.STUDIO, nous croyons en :
          </p>
        </div>
        <div className="flex flex-wrap justify-around m-4 text-center">
          {cardInfo.map((items, i) => (
            <Card
              key={i}
              className="w-full max-w-sm p-3 m-5 text-white bg-gray-900 bg-opacity-25 shadow-lg shadow-gray-900 lg:w-1/2 xl:w-1/3 transform transition duration-500 hover:scale-125 hover:bg-white hover:text-black"
            >
              <Card className="bg-transparent ">
                <CardContent className="flex justify-center pt-5">
                  <img
                    src={items.icon}
                    alt={items.title}
                    className="w-20 text-center"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-3xl font-medium text-gray-400 uppercase title-font">
                    {items.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-pretty whitespace-nowrap">
                    {items.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Card>
            // <Card
            //   key={i}
            //   className="w-full max-w-sm p-2 m-5 text-white bg-gray-900 bg-opacity-25 shadow-lg shadow-gray-800 lg:w-1/2 xl:w-1/3"
            // >
            //   <div className="px-6 py-8 border-2 border-gray-200 rounded-lg ">
            //     <div className="flex justify-center">
            //       <img
            //         src={items.icon}
            //         alt={items.title}
            //         className="w-20 text-center"
            //       />
            //     </div>
            //     <h3 className="text-3xl font-medium text-gray-400 uppercase title-font">
            //       {items.title}
            //     </h3>
            //     <p className="leading-relaxed text-pretty whitespace-nowrap">
            //       {items.description}
            //     </p>
            //   </div>
            // </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
