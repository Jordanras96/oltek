import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [inputs, setInputs] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const [pulsatingFields, setPulsatingFields] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation des champs
    const emptyFields = [];
    for (const key in inputs) {
      if (!inputs[key]) {
        emptyFields.push(key);
      }
    }

    if (emptyFields.length > 0) {
      toast.error(
        `Veuillez remplir le(s) champ(s) suivant(s): ${emptyFields.join(", ")}`,
        {
          position: "bottom-right",
        }
      );
      setPulsatingFields(emptyFields);
      return;
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.user_email)) {
      toast.error("Veuillez entrer une adresse email valide.", {
        position: "bottom-right",
      });
      return;
    }

    emailjs
      .sendForm("service_wpcmn9m", "template_57ialyr", form.current, {
        publicKey: "jPbcpx2tD3MXfx4Lg",
      })
      .then((response) => {
        toast.success("📨 Message reçu", {
          position: "bottom-right",
          autoClose: 3000,
        });
        console.log(response.status, response.text);
      })
      .catch((error) => {
        toast.error("❌ Erreur! Réessayer plus tard", {
          position: "bottom-right",
          autoClose: 3000,
        });
        console.log(error.text, error.status);
      });
  };

  return (
    <section id="contact" className="relative text-white body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col w-full mb-12 text-center">
          <h1 className="mb-20 text-2xl font-medium text-white uppercase sm:text-3xl title-font">
            Collaborons !
          </h1>
          <p className="container mx-auto text-base leading-relaxed lg:w-2/3">
            N&apos;hésitez pas à nous contacter pour toute question, commande ou
            projet. Chez OLTEK.STUDIO, nous sommes là pour concrétiser vos idées
            et donner vie à vos projets numériques.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto lg:w-1/2 md:w-2/3"
        >
          <div className="flex flex-wrap -m-2">
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="text-lg leading-7 text-gray-300"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nom"
                  name="user_name"
                  value={inputs.user_name}
                  onChange={handleChange}
                  className={`w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 ${
                    pulsatingFields.includes("user_name")
                      ? "animate-pulse border-red-500"
                      : ""
                  }`}
                />
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="text-lg leading-7 text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="user_email"
                  value={inputs.user_email}
                  onChange={handleChange}
                  className={`w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 ${
                    pulsatingFields.includes("user_email")
                      ? "animate-pulse border-red-500"
                      : ""
                  }`}
                />
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="text-lg leading-7 text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  name="user_message"
                  value={inputs.user_message}
                  onChange={handleChange}
                  className={`w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 ${
                    pulsatingFields.includes("user_message")
                      ? "animate-pulse border-red-500"
                      : ""
                  }`}
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <button
                type="submit"
                className="flex px-8 py-2 mx-auto text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
              >
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
