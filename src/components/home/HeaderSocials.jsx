import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/titan1728"
        target="_blank"
        className="home__social-link"
        rel="noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/lakshya-raikwal-670218193/"
        target="_blank"
        className="home__social-link"
        rel="noreferrer"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <a
        href="https://github.com/Lakshya123-cyber"
        target="_blank"
        className="home__social-link"
        rel="noreferrer"
      >
        <i class="fa-brands fa-square-github"></i>
      </a>

      <a
        href="https://www.youtube.com/@BeRaikwal"
        target="_blank"
        className="home__social-link"
        rel="noreferrer"
      >
        <i class="fa-brands fa-youtube"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
