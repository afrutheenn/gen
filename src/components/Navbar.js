import React, { useState } from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex md:w-full w-[1000px]">
        <div className="grid place-content-center md:px-10 p-10 md:h-32 h-40 md:w-52 w-52">
          <img src={logo} alt="logo" />
        </div>

        <div className="md:border border-x-slate-950 grid place-content-center w-3/5">
          <ul className="md:flex hidden ">
            <li className="ml-">Home</li>
            <li className="ml-16 text-gray-500">About Us</li>
            <li className="ml-16 text-gray-500">Support</li>
            <li className="ml-16  text-gray-500">Products</li>
          </ul>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="space-x-9 flex pt-14 h-32 ">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-20 md:flex hidden" />
          <FontAwesomeIcon icon={faHeart} className="ml-20 md:flex hidden"/>
          <FontAwesomeIcon icon={faCartShopping} className="ml-20 md:flex hidden"/>
        </div>
        <div className="md:hidden md:pt-0 pt-14 md:ml-0 ml-9">
          {" "}
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>

      <hr />
    </div>
  );
}

export default Navbar;
