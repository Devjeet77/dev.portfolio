import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/Devjeet77" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/devjeet77/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
