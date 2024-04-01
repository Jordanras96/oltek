import { bulb } from "../assets";
const Services = () => {
  return (
    <section id="services" className="text-gray-600 body-font">
      <h2 className="uppercase font-medium text-white text-3xl container mx-auto text-center">
        {" "}
        à votre service
      </h2>
      <div className="container px-5  mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden z-10">
          <img
            alt="Services"
            className="object-scale-down h-full w-full"
            src={bulb}
          />
        </div>
        <div className="flex flex-col justify-evenly flex-wrap lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="h-24 lg:max-w-screen-lg xl:max-w-4xl 2xl:max-w-3xl animation-bg rounded-md bg-gradient-to-r from-[#fa5357] to-[#a1035c] p-1 lg:-ml-80 xl:-ml-64 2xl:-ml-64 underline-gradient bg-[length:200%_200%] bg-[left_0%_bottom_0%] bg-repeat-x animate-background">
            <div className="flex flex-col lg:items-start items-center h-full w-full  bg-gray-800 lg:pl-72 xl:pl-96 2xl:pl-80">
              <h1 className="text-2xl font-black text-white mb-3">
                UX Writing
              </h1>
              <p className="leading-relaxed text-base text-white">
                Création de contenu textuel pour les interfaces utilisateur
              </p>
            </div>
          </div>
          <div className="h-24 lg:max-w-screen-lg xl:max-w-3xl 2xl:max-w-3xl rounded-md bg-gradient-to-r from-[#50c5d4] to-[#064290] p-1 lg:-ml-80 xl:-ml-[15rem] 2xl:-ml-80 underline-gradient bg-[length:200%_200%] bg-[left_0%_bottom_0%] bg-repeat-x animate-background">
            <div className="flex flex-col lg:items-start items-center h-full w-full  bg-gray-800 lg:pl-60 xl:pl-72 2xl:pl-80">
              <h1 className="text-2xl font-black text-white mb-3">UI Design</h1>
              <p className="leading-relaxed text-base text-white">
                Création de contenu textuel pour les interfaces utilisateur
              </p>
            </div>
          </div>
          <div className="h-24 sm: md: lg:max-w-screen-lg xl:max-w-[46rem] 2xl:max-w-3xl rounded-md bg-gradient-to-r from-[#4d58cc] to-[#a258c4] p-1 lg:-ml-80 xl:-ml-72 2xl:-ml-96 underline-gradient bg-[length:200%_200%] bg-[left_0%_bottom_0%] bg-repeat-x animate-background">
            <div className="flex flex-col lg:items-start items-center h-full w-full  bg-gray-800 lg:pl-52 xl:pl-64 2xl:pl-80">
              <h1 className="text-2xl font-black text-white mb-3">NoCode</h1>
              <p className="leading-relaxed text-base text-white">
                Personnalisation et intégration de solutions NoCode
              </p>
            </div>
          </div>
          <div className="h-24 sm: md: lg:max-w-screen-lg xl:max-w-3xl 2xl:max-w-3xl rounded-md bg-gradient-to-r from-[#122e78] to-[#7d4dcd] p-1 lg:-ml-80 xl:-ml-96 2xl:-ml-[28rem] underline-gradient bg-[length:200%_200%] bg-[left_0%_bottom_0%] bg-repeat-x animate-background">
            <div className="flex flex-col lg:items-start items-center h-full w-full bg-gray-800 lg:pl-32 xl:pl-56 2xl:pl-64">
              <h1 className="text-2xl font-black text-white mb-3">Tutorat</h1>
              <p className="leading-relaxed text-base text-white">
                Dans l&apos;apprentissage des technologies numériques /
                Conseil-carrière
              </p>
            </div>
          </div>
          <div className="h-24 lg:max-w-screen-lg xl:max-w-3xl 2xl:max-w-3xl rounded-md bg-gradient-to-r from-[#8665fc] to-[#5ce0e6] p-1 lg:-ml-[20rem] xl:-ml-[28rem] 2xl:-ml-[32rem] underline-gradient bg-[length:200%_200%] bg-[left_0%_bottom_0%] bg-repeat-x animate-background">
            <div className="flex flex-col lg:items-start h-full w-full  bg-gray-800 sm:px-4 md:px-20 lg:pl-[4.8rem] xl:pl-28 2xl:pl-28 ">
              <h1 className="text-2xl font-black text-white mb-3">
                Rédaction de subventions/ montage de dossier
              </h1>
              <p className="leading-relaxed text-base text-white capitalize">
                élaboration de propositions de subvention et montage de dossiers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
