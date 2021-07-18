import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Hero() {
  return (
    <section className="hero">
       <div className="hero__image">
        <img
          src="/photo.png"
          className="hero-image"
          alt="my_image"
          width={120}
          height={120}
        />

      </div>

      <div className="text__content">
        <h1 className="title">Web designer & developer</h1>
        <p className="description">
          Hello! my name is Henry Oke, I’m a Freelance web{" "}
          <strong>developer</strong> and occasional designer currently based in
          Toronto CA. My role as a developer is to help my clients build{" "}
          <strong>websites</strong> and web-based <strong>applications</strong>{" "}
          to meet business goals. Do you have a project in mind? Let’s work!
        </p> 
      </div> 

      <div className="cta__buttons">
        <div className="learn__more"></div>
        <div className="hireme"></div>
      </div>

      <div className="scroll_icon">
          <span className="circle"></span>
      </div>

    </section>
  );
}

export default Hero;
