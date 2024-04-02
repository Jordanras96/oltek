import { logosub } from "@/src/assets";
import { useCallback, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const updateSelectedSection = useCallback(() => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      if (isElementInViewport(section)) {
        setSelectedSection(section.id);
      }
    });
  }, []);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 200);
        updateSelectedSection();
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updateSelectedSection]);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const navItems = [
    { text: "Histoire", section: "about" },
    { text: "Valeurs", section: "features" },
    { text: "Services", section: "services" },
    { text: "Partenaires", section: "partner" },
    { text: "TEAM", section: "team" },
    { text: "Collaborons", section: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };

  const scrollToHeroSection = () => {
    const heroSection = document.getElementById("hero");
    heroSection.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`text-gray-300 body-font ${
        isScrolled || !isVisible
          ? "sticky top-0 bg-black z-50 transition-all ease-in-out duration-500"
          : ""
      }`}
    >
      <div className="container flex flex-col items-center p-5 mx-auto sm:flex-col md:flex-row">
        <a
          className="flex items-center mb-4 font-medium text-gray-300 cursor-pointer title-font md:mb-0"
          onClick={scrollToHeroSection}
        >
          <img
            src={logosub}
            alt="logo"
            className={`flex title-font font-medium items-center text-gray-300 ${
              isScrolled
                ? "w-20 md:w-28 sm:w-20"
                : "w-96 xl:w-72 lg:w-52 md:w-32 sm:w-20"
            } transition-all duration-500`}
          />
        </a>
        <div className="md:hidden">
          <RxHamburgerMenu onClick={toggleMobileMenu} />
        </div>
        {/* Menu burger sur les écrans mobiles */}
        {isMobileMenuOpen ? (
          <nav className="w-full md:hidden">
            {navItems.map((item, index) => (
              <a
                key={index}
                className="block px-4 py-2 text-xl text-gray-300 cursor-pointer"
                onClick={() => {
                  scrollToSection(item.section);
                  toggleMobileMenu();
                }}
              >
                {item.text}
              </a>
            ))}
          </nav>
        ) : (
          // Menu en ligne sur les écrans non-mobiles
          <nav className="hidden md:flex md:ml-auto">
            {navItems.map((item, index) => (
              <a
                key={index}
                className={`mr-5 relative text-xl w-fit text-nowrap md:text-sm  lg:text-base xl:text-lg 2xl:text-xl block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center uppercase section ${
                  selectedSection === item.section ? "selected" : ""
                } transition-all duration-500 cursor-pointer`}
                onClick={() => scrollToSection(item.section)}
              >
                {item.text}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
