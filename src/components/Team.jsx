import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import ainaImage from "../assets/team/aina.jpg";
import eddlyImage from "../assets/team/eddly.jpg";
import njakaImage from "../assets/team/njaka.jpg";
import rindraImage from "../assets/team/rindra.jpg";
const Team = () => {
  const teamData = [
    {
      name: "Aina Midget",
      role: "FOUNDER - CEO",
      shortDesc:
        "En tant que fondatrice et PDG, Aina est la force motrice derrière OLTEK, guidant l’entreprise avec une vision stratégique pour le développement de solutions numériques innovantes et la mise en œuvre de pratiques de ses talents numériques",
      description:
        "Aina Midget, fondatrice et PDG d'OLTEK, incarne l'audace et l'innovation. Issue d'un parcours alliant l'ingénierie agronome à une carrière florissante dans la rédaction web et la transcription freelance, elle se distingue par sa passion pour la création de solutions numériques novatrices. Sa formation pointue en NoCode et en UX/UI design, acquise auprès d'institutions prestigieuses, témoigne de son engagement envers l'excellence et son désir constant de repousser les limites du possible.",
      image: ainaImage,
    },
    {
      name: "Rindra Henintsoa",
      role: "Rédacteur - Tuteur",
      shortDesc:
        "Rindra Henintsoa apporte son expérience en ingénierie minière à OLTEK, où il excelle en tant que rédacteur et mentor. Il inspire l’équipe à relever de nouveaux défis et à innover sans cesse.",
      description:
        "Rindra, ingénieur minier reconverti en rédacteur et tuteur chez OLTEK, apporte à l'équipe une fusion unique de compétences techniques et créatives. Son passage réussi de l'ingénierie à l'écriture reflète son adaptabilité et sa capacité à embrasser de nouveaux défis avec enthousiasme. En tant que membre dévoué de l'équipe, Rindra est un mentor précieux, partageant son expertise et inspirant les autres à repousser les limites de leur créativité.",
      image: rindraImage,
    },
    {
      name: "Eddly",
      role: "UI Developer",
      shortDesc:
        "Eddly, chef pâtissière et expert NoCode, allie créativité et technologie pour enrichir les projets d’OLTEK. Ses conceptions numériques sont à la fois esthétiques et fonctionnelles, reflétant son art de la pâtisserie.",
      description:
        "Eddly, chef pâtissière et spécialiste NoCode chez OLTEK, combine habilement l'art de la pâtisserie avec l'innovation technologique. Sa créativité débordante et son expertise en matière de NoCode lui permettent de concevoir des solutions numériques uniques et esthétiquement raffinées. En apportant une perspective originale et une approche artisanale à son travail, il contribue à positionner OLTEK comme un leader de l'innovation dans le domaine du développement web.",
      image: eddlyImage,
    },
    {
      name: "Njaka Fitiavana",
      role: "Designer",
      shortDesc:
        "Njaka Fitiavana, avec son parcours dans l’hôtellerie de luxe, est dédié à offrir un service client exceptionnel chez OLTEK. Il est essentiel dans la création d’expériences mémorables pour les clients, grâce à son empathie et son attention aux détails.",
      description:
        "Njaka, ancien réceptionniste d'hôtel de luxe devenu gestionnaire des relations clients chez OLTEK, représente l'essence même du service personnalisé et de l'engagement envers la satisfaction client. Sa transition réussie vers un rôle axé sur les relations clients témoigne de sa capacité à s'adapter et à exceller dans de nouveaux environnements. Grâce à son empathie naturelle et à son souci du détail, il crée des expériences client inoubliables et renforce la réputation d'OLTEK en tant que partenaire de confiance pour ses clients.",
      image: njakaImage,
    },
  ];

  return (
    <section id="team" className="text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h2 className="mb-4 text-4xl font-medium tracking-widest text-white title-font">
            La <span className="uppercase">TEAM</span>
          </h2>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3 ">
            L&apos;équipe d&apos;OLTEK.STUDIO réunit des spécialistes du web,
            des talents reconvertis et des ingénieurs. En tant que plateforme
            principalement axée sur le freelance, ces membres représentent le
            cœur et l&apos;âme d&apos;OLTEK.STUDIO.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {teamData.map((member, index) => (
            <div className="p-4 lg:w-1/2" key={index}>
              <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
                <img
                  alt={member.name}
                  className="flex-shrink-0 object-cover object-center w-48 h-full mb-4 rounded-lg sm:mb-0"
                  src={member.image}
                />
                <div className="flex flex-col items-stretch w-full h-full justify-evenly sm:pl-8">
                  <h2 className="text-lg font-medium text-white title-font">
                    {member.name}
                  </h2>
                  <h3 className="mb-3 text-gray-500">{member.role}</h3>
                  <p className="mb-4 text-justify">{member.shortDesc}</p>
                  <span className="flex flex-nowrap">
                    <a href="" className="text-gray-500">
                      <IoIosMail size={25} color="white" />
                    </a>
                    <a href="" className="ml-2 text-gray-500">
                      <FaLinkedin size={25} color="white" />
                    </a>
                    <a href="" className="ml-2 text-gray-500">
                      <FaInstagram size={25} color="white" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
