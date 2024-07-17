import { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import TextSection from "../components/TextSection/TextSection";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Skills />
      <TextSection />
    </Fragment>
  );
};

export default Home;
