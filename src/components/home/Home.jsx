import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="myself" className="home__img" />
        <h1 className="home__name">Lakshya Raikwal</h1>
        <span className="home__education">I am a Full-Stack Developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Contact Me
        </a>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
