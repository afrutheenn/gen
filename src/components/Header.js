import React from "react";
import Star from "../images/Star 1.png";
import arrow from "../images/arrow.png";
import arrow1 from "../images/arrow1.png";
import Frame from "../images/Frame .png";
import Round from "../images/Round.png";
import frame from "../images/frame.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <Navbar />
      <div className="">
        <div>
          <div className="md:flex">
            <div className="border md:w-3/5 w-[800px] border-neutral-950 ml-32">
              <div className="flex">
                <h1 className="text-6xl font-bold pl-20 pt-20">NEXT GEN</h1>
                <img src={Star} alt="" className="h-24 w-24 mt-11" />
              </div>
              <div>
                <h1 className="text-6xl font-bold pl-20 mt-4">SMART WATCH</h1>
              </div>

              <div className="pl-16 mt-8 text-2xl text-neutral-800">
                <p>Everyone looks your watch and it represents</p>
                <p className="pt-2">
                  who you are your values and your personal style.
                </p>
              </div>

              <div className="font-bold pl-16 mt-10 text-3xl">
                <p>$550.00</p>
              </div>

              <div className="flex">
                {" "}
                <button className="bg-ornge h-12 w-36 ml-16 mt-10 border border-slate-950">
                  Shop Now
                </button>
                <img src={arrow} alt="arr" className="pl-24 pt-10" />
                <img src={arrow1} alt="arr1" className="pl-48 mb-16" />
              </div>
            </div>
            <div>
              {" "}
              <img src={frame} alt="frame" className="md:h-[530px] h-[400px] md:w-full w-96 md:ml-0 ml-80" />
            </div>
          </div>

          <div className="md:flex ">
            <img src={Frame} alt="" className="md:pl-32 md:ml-0 ml-96" />
            <div className="md:ml-0 ml-44 p-10 border border-neutral-950 md:w-[572px] w-[700px] md:h-full h-80">
              <img src={Round} alt="" className="h-20 w-20 absolute " />
              <p className="absolute p-9 text-2xl">
                EVERYONE LOOKS AT YOUR WATCH AND
              </p>
              <p className="text-2xl md:mt-20 mt-48  ml-9">
                IT REPRESENTS WHO YOU ARE, YOUR
              </p>
              <p className="text-2xl md:mt-3 ml-9">
                VALUES AND YOUR PERSONAL STYLE.
              </p>
            </div>
            <div>
          {/* <img src={frame} alt="frame" className="h-[530px]" /> */}
          <div className="md:ml-0 ml-80 h-[242px] w-[354px] bg-manja grid place-content-center text-4xl font-bold">
            <p>WHATS</p>
            <p>TRENDING?</p>
          </div>
        </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Header;
