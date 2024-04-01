import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi2";
import { IoMailOpenOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-100 ">
        <div className="container flex items-center justify-around w-full mx-auto space-x-5 sm:flex-row">
          <div className="w-1/4">
            <p className="text-sm text-center text-gray-500 sm:text-left">
              © 2024 OLTEK.STUDIO —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="ml-1 text-gray-600"
                target="_blank"
              >
                All rights reserved
              </a>
            </p>
          </div>
          <div className="w-1/4">
            <a
              href="info@oltekstudio.com"
              className="flex items-center justify-center text-indigo-300"
            >
              <IoMailOpenOutline size={25} />
              <span className="pl-2">info@oltekstudio.com</span>
            </a>
          </div>
          <div className="w-1/4">
            <p className="flex items-center justify-center my-5 leading-normal ">
              <HiOutlinePhone size={25} />
              <span className="pl-2">+261 34 385 09</span>
            </p>
          </div>
          <div className="flex justify-center w-1/4">
            <a className="text-gray-500">
              <FaFacebook size={25} color="gray" />
            </a>
            <a className="ml-4 text-gray-500">
              <FaInstagram size={25} color="gray" />
            </a>
            <a className="ml-4 text-gray-500">
              <FaLinkedin size={25} color="gray" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
