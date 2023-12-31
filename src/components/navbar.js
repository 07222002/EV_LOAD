import React from "react";
import Image from "../images/Framenavbar.svg";
import IconlyLightArrow from "../images/Arrow - Right 2.svg";
import Frame from "../images/Frame.svg"
import { Link } from "react-scroll"; // Import the Link component

function navbar() {
  return (
    <div className="py-5 flex justify-around items-center z-100 max-lg:hidden">
      <div className="label flex justify-start items-center">
        <img src={Image} alt="" className="iconly-light-arrow-right-2" />
        <p className="EV-load">
          <span className="text-wrapper">EV </span>
          <span className="span">Load</span>
        </p>
      </div>
        <img src={Frame} alt='' className="max-lg:flex justify-end lg:hidden cursor-pointer"/>
      <div className="rounded-[100px] flex flex-row justify-between items-center max-lg:hidden">
            <ul className="box bg-white m-0 px-10 h-[60px] gap-12 flex justify-center border-[0px] rounded-[100px] w-[450px]">
              <div className="flex flex-col relative">
                 <Link to="home" smooth={true} duration={500} className="cursor-pointer hover-link">
                  Home
                  </Link>
                <p className="w-full h-1 bg-black absolute bottom-0"></p>
                </div>
                <Link to="product" smooth={true} duration={500} className="cursor-pointer hover-link">
                  Product
                  </Link>
                <Link to="partnering" smooth={true} duration={500} className="cursor-pointer hover-link">
              Partnering
            </Link>
                <li className="cursor-pointer hover-link">Contact</li>
            </ul>
      </div>
      <div className="flex justify-end gap-2 items-center z-50 max-lg:hidden">
        <button className="btn">
          <Link to="report" smooth={true} duration={500} className="text-wrapper cursor-pointer uppercase">
              Get A report
            </Link>
          <img
            src={IconlyLightArrow}
            className="iconly-light-arrow-right-2"
            alt=""
          />
        </button>
        <button className="btn-two">
          <div className="log-in">LOG IN</div>
        </button>
      </div>
    </div>
  );
}

export default navbar;
