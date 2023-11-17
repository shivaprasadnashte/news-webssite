import React from "react";
import facebook from "../asets/facebook.svg";
import insta from "../asets/insta.svg";
import twitter from "../asets/twitter.svg";
import linkedin from "../asets/linkdin.svg";
import github from "../asets/github.svg";
import LOGO from "../asets/logo.png";

function Footer() {
  return (
    <>
      <div className=" flex flex-col shadow-2xl w-full mb-0 justify-evenly p-4">
        <div className=" items-center sm:flex sm:flex-col md:flex md:flex-row w-full justify-between">
          <div>
            <img src={LOGO} alt="logo" className=" w-40 h-auto" />
          </div>
          <div>
            <div className="block md:flex flex-col items-center py-5">
              <p>Made with love by</p>
              <p>❤️Shivaprasad❤️</p>
            </div>
            <div className=" flex">
              <img src={insta} alt="" />
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
              <img src={github} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>

          <div>
            <h1>CONTACT US</h1>
            <p>em@il</p>
            <p>shivaprasadnashte2020@gmail.com</p>
            <p>contact</p>
            <p>+91-8446423228</p>
            <p>github</p>
            <p>shivaprasadnashte</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
