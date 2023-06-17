import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-check"></i>

        <div className="">
          <h3 className="about__title">120</h3>
          <span className="about__subtitle">Projects</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-badge"></i>

        <div className="">
          <h3 className="about__title">25+</h3>
          <span className="about__subtitle">Certificates</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-social-youtube"></i>

        <div className="">
          <h3 className="about__title">300+</h3>
          <span className="about__subtitle">Subscribers</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
