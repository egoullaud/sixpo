import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sixpo-logo.png";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

function Footer() {
  return (
    <div
      className="
        flex
        flex-col
        md:flex-row 
        justify-between items-center bg-black text-white px-2"
    >
      <div
        className="
          flex 
          flex-col
          lg:flex-row
          lg:justify-around
          w-[100%]
          md:w-[20%] 
          justify-center 
          items-center"
      >
        <Link className="w-[50%] md:w-[100%] lg:w-[50%]" to="/">
          <img
            src={logo}
            alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below."
          />
        </Link>
        <ul className="flex mx-2 text-white text-2xl pt-2 bg-black">
          <a href="https://www.instagram.com/yvrsixpo/" target="_blank">
            {" "}
            <li className="mr-2">
              <AiFillInstagram />
            </li>
          </a>
          <a href="https://www.facebook.com/yvrsixpo/" target="_blank">
            {" "}
            <li>
              <AiFillFacebook />
            </li>
          </a>
        </ul>
      </div>
      <div
        className="
        w-[100%]
        md:w-[85%]"
      >
        <p className="text-center p-4 mx-4 text-sm">
          {" "}
          Members of SIXPO respectfully acknowledge that we live, learn and
          gather on the unceded, traditional and ancestral territories of the
          xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh Úxwumixw (Squamish), səl̓ilw̓ətaʔɬ
          (Tsleil-Waututh) the Katzie, Kwantlen, Kwikwetlem, Qayqayt and
          Tla'amin Nations.
          <br /> Non-Indigenous folks in Canada please take a look at
          <a href="https://www.whose.land/en/" target="_blank">
            <span className="font-semibold text-[#ffef91] hover:underline hover:transition-all hover:duration-500 hover:text-[#ffa2a2] ">
              Whose Land
            </span>
          </a>{" "}
          to learn more about the indigenous nation(s) on whose land you live!
        </p>
        <a href="https://egoullaud-portfolio.netlify.app/" target="_blank">
          <p className="text-center pb-2 text-xs underline hover:transition-all hover:duration-500 hover:text-[#bcf0ff]">
            Website by Lee Goullaud 2023
          </p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
