import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Hero() {
  return (
    <section className="hero">
      <div className="image">
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
        {/* <div className="social-icons">
          <div className="icon facebook">
            <GrFacebookOption className="fb" size={50} />
          </div>
          <div className="icon twitter">
            <FaTwitter className="fb" size={50} />
          </div>
          <div className="icon instagram">
            <FaInstagram className="fb" size={50} />
          </div>
          <div className="icon email">
            <SiGmail className="fb" size={50} />
          </div>
        </div> */}
        <div className="scroll_icon">
          <span className="circle"></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
