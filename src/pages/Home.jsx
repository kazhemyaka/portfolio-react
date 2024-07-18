import { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import TextSection from "../components/TextSection/TextSection";
import Projects from "../components/Projects/Projects";

const Home = () => {
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
