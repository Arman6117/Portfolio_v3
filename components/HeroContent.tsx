
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Socials from "./Socials";
function HeroContent() {
  return (
    <div className="heroContentDivContainer">
      <div>
        <div className="flex flex-col">
          <div className="flex flex-col space-y-0 justify-center ">
            <p className="primaryGreetText">Hi! My name is</p>
            <h1 className="nameText">Arman Patel</h1>
            <p
              className="text-neutral-800 xl:text-2xl "
              style={{ marginTop: "14px" }}
            >
              I'm a <span className="font-black">Fullstack developer</span>
            </p>
          </div>
          <Socials/>
        </div>
      </div>
      <div className="heroImageDivContainer">
        <div className="heroImageContainer  ">
          <div
            className="heroImage"
            style={{ backgroundImage: "url('/images/HeroImage.png')" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
