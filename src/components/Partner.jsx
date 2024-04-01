import * as images from "../assets";
const Partner = () => {
  const filteredImages = Object.keys(images).filter((key) =>
    key.startsWith("s")
  );
  console.log(Object.keys(images));
  return (
    <section id="partner" className="text-gray-600 body-font">
      <h2 className="py-24 font-semibold text-center text-white uppercase">
        Ils nous ont fait confiance !
      </h2>
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap items-center -m-4">
          {/* Utilisation de map pour générer dynamiquement les images */}
          {filteredImages.map((imageName, index) => (
            <div
              key={index}
              className="p-4 mb-6 sm:w-1/5 md:w-1/5 lg:w-1/5 lg:mb-0"
            >
              <div className="h-full text-center">
                <img
                  alt={`Partner-${index + 1}`}
                  className="inline-block object-cover object-center mb-8 md: w-50 h-50 "
                  src={images[imageName]}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Partner;
