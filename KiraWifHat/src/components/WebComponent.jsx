import React, { useEffect, useRef, useState } from "react";

const WebComponent = () => {
  return (
    <div className="main">
      <header className="">
        {/* Header Section*/}
        <div className="nav mb-10 max-sm:flex max-sm:justify-center">
          <a href="https://seiviour.xyz" className="bg-inherit ">
            <div className="flex items-center bg-inherit ">
              <img
                src={Logo}
                alt="Seiviour logo"
                className="w-[60px] max-sm:w-[40px] rounded-full overflow-hidden shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200"
              ></img>
              <h1 className="bg-inherit text-white text-4xl max-sm:text-3xl px-2">
                SEIviour
              </h1>
            </div>
          </a>
          <div className="flex gap-16 bg-inherit max-sm:hidden">
            <ScrollLink
              to="links"
              smooth={true}
              duration={900}
              className="bg-inherit"
            >
              <div className="bg-inherit border border-yellow-500 rounded-[50px] w-[150px] text-center text-[#e2c67a] text-2xl hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
                <a href="" className="bg-inherit">
                  Buy
                </a>
              </div>
            </ScrollLink>
            <div className="bg-inherit border border-yellow-500 rounded-[50px] w-[150px] text-center text-[#e2c67a] text-xl hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
              <Link to="/About" className="bg-inherit">
                About
              </Link>
            </div>
            {/*
            <div className="bg-inherit border border-yellow-500 rounded-[50px] w-[100px] text-center text-[#e2c67a] text-xl hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
              <a href="/register" className="bg-inherit ">
                NFTS
              </a>
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default WebComponent;
