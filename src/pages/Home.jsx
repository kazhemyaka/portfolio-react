import { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import TextSection from "../components/TextSection/TextSection";
import Projects from "../components/Projects/Projects";
import { useEffect } from "react";
import homeIco from "../../public/house-favicon.ico";

const Home = () => {
  useEffect(() => {
    let link = document.querySelector("link[rel='shortcut icon']");
    link.href = homeIco;
  }, []);

  return (
    <Fragment>
      <Hero />
      <Skills />
      <Projects />
      <TextSection />
    </Fragment>
  );
};

export default Home;
