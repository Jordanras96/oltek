import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Services from "./components/Services";
import Team from "./components/Team";

export default function App() {
  return (
    <div className=" bg-gradient-to-r from-black  to-[#3533cd]  ">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Services />
      <Partner />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
