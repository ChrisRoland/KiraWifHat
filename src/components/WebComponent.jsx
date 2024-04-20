import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/KiraWifHat.svg";
import Paw from "../assets/image.png";
import Cool from "../assets/Coolkat.png";
import Coin from "../assets/Coin.png";

const WebComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="main text-xl max-sm:text-[1.1rem]">
      {/*Header */}
      <header className=" ">
        <div className=" p-3 pl-[21rem]">
          <button
            className="hamburger bg-[rgba(40,94,105,0.74)] p-2.5 rounded border border-[#85c9f2]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {}
            &#9776;
          </button>
        </div>
        <div
          className={`nav-links ${
            isMenuOpen
              ? "mobile-open w-fit bg-[rgba(40,94,105,0.74)] mx-auto px-2 py-1 shadow-[0_1px_5px_0px_rgba(0,0,0,0.3)] shadow-blue-200 rounded text-center"
              : ""
          }`}
        >
          <div className="shadow-xl lg:hidden md:hidden gap-6 mobNav">
            <a href="/#home" className="hover:underline pr-1">
              Buy KiraWifHat
            </a>
            <a href="/#How-to-buy" className="hover:underline px-1 border-l-[#85c9f2] border-l border-r-[#85c9f2] border-r">
              PawMap
            </a>
            <a href="https://t.co/buRePTlZ9D" className="hover:underline px-1 border-r-[#85c9f2] border-r">
              Telegram
            </a>
            <a
              href="https://twitter.com/KiraWifHat"
              className="hover:underline pl-2"
            >
              X
            </a>
          </div>
        </div>
        <div className="max-sm:hidden navbar sticky top-0 shadow-xl ">
          <a href="/#home" className="hover:underline">
            Buy KiraWifHat
          </a>
          <a href="/#How-to-buy" className="hover:underline">
            PawMap
          </a>

          <img
            src={Logo}
            alt="KiraWifHat logo"
            className="inline m-3 w-[60px] max-sm:w-[40px] max-sm:hidden rounded-full overflow-hidden shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-blue-200"
          ></img>

          <a href="https://t.co/buRePTlZ9D" className="hover:underline">
            Telegram
          </a>
          <a href="https://twitter.com/KiraWifHat" className="hover:underline">
            Twitter / X
          </a>
        </div>
      </header>
      {/*Hero Section*/}
      <div className="wrapper pt-[11.5rem] max-sm:pt-[3rem]">
        <div className="inner flex gap-10 max-sm:gap-0 max-sm:flex-col-reverse max-sm:justify-center">
          <div className="title w-[50%] max-sm:w-[100%] text-center pt-11">
            <h1 className="text-7xl max-sm:text-5xl m-5 brand text-[#0ad0f8e5] text-sh">
              KiraWifHat
            </h1>
            <p>
              <img src={Paw} alt="paw prints" className="inline h-5 w-5"></img>
              The Purr-fect Token on Injective Chain!
              <img src={Paw} alt="paw prints" className="inline h-5 w-5"></img>
            </p>
            <p className="">Coolest cats are cats with Hats 🐱🎩</p>
            <div className="buttons mt-7 flex flex-col justify-center md:flex-row gap-3 lg:gap-5 xl:gap-7 items-center lg:mt-6 xl:mt-8">
              <a
                href=""
                className="hov border-2 bg-[#0ad0f8e5] hover:bg-blue-200 text-white hover:text-gray-600 shadow-[0_5px_2px_0px_rgba(0,0,0,0.3)] shadow-blue-300 text-center text-2xl max-sm:text-1xl xl:text-3xl transition-all duration-500 rounded-xl lg:rounded-2xl py-2 px-3 max-sm:px-3 max-sm:py-1 hover:-translate-y-2"
              >
                Buy £KiraWifHat
              </a>
              <a
                href=""
                className="border-2 bg-[#0ad0f8e5] hover:bg-blue-200 text-white hover:text-gray-600 shadow-[0_5px_2px_0px_rgba(0,0,0,0.3)] shadow-blue-300 text-center text-2xl max-sm:text-1xl xl:text-3xl transition-all duration-500 rounded-xl lg:rounded-2xl py-2 px-3 max-sm:px-3 max-sm:py-1 hover:transform hover:-translate-y-2"
              >
                PlayGround 🐾
              </a>
            </div>
            <div className="socials justify-center mt-5 flex p-5">
              <a
                className="px-3 hover:-translate-y-2 transition-all duration-500"
                href="https://twitter.com/KiraWifHat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="white"
                  fill="lightblue"
                  strokeWidth="10"
                  viewBox="0 0 512 512"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a>

              <a
                href=""
                className="hover:-translate-y-2 transition-all duration-500"
              >
                <img
                  src={Coin}
                  alt="coinhall logo"
                  className="rounded-3xl w-9 h-9"
                ></img>
              </a>

              <a
                className="px-3 hover:-translate-y-2 transition-all duration-500"
                href="https://t.co/buRePTlZ9D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="white"
                  fill="lightblue"
                  strokeWidth="10"
                  viewBox="0 0 448 512"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                </svg>
              </a>
            </div>
            <div className="flex justify-center">
              <hr className="w-[80%]"></hr>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={Cool}
              alt="cool cat"
              className="w-[450px] h-[450px] max-sm:w-[300px] max-sm:h-[300px] rounded-[30%]"
            ></img>
          </div>
        </div>

        {/*About*/}
        <div className="my-20 max-sm:my-10 flex-row justify-center">
          <div className=" text-center">
            <h2 className="text-5xl max-sm:text-4xl text-[#0ad0f8e5] text-center underline font-bold">
              Our Furry Story
            </h2>
            <div className="flex p-5">
              <div className="w-[40%] max-sm:hidden">
                <img
                  src={Cool}
                  alt="cool cat"
                  className="w-[450px] h-[450px] rounded-[30%]"
                ></img>
              </div>
              <div className="flex justify-center items-center w-[50%] max-sm:w-full">
                <div className="px-15">
                  In a world filled with serious investments and transactions, a
                  cat pounced onto the scene with a vision: to make the
                  blockchain a place for both fun and profit. With a hat as her
                  crown and the Injective blockchain as her realm, she’s on a
                  mission to whisker you away into the world of KiraWifHat,
                  where finance meets fun in the most delightful way.
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <hr className="w-[50%]"></hr>
          </div>
        </div>

        {/*Contract Address */}
        <div className="m-10">
          <div className="w-full text-center">
            <h2 className="text-5xl max-sm:text-3xl text-[#0ad0f8e5] text-center underline font-bold">
              Contract Address
            </h2>
            <p className="p-5">
              <a
                href="#"
                className="hover:text-2xl hover:underline transition-all duration-500"
              >
                factory/injxxxxx/KiraWifHat
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="w-[50%]"></hr>
        </div>

        {/*Tokenomics */}
        <div className="m-10">
          <div className="w-full text-center">
            <h2 className="text-5xl max-sm:text-3xl text-[#0ad0f8e5] text-center underline font-bold">
              Tokenomics
            </h2>
            <p className="p-5">
              Liquidity ≠ 700%<br></br>
              Presale ≠ 200% <br></br>
              Marketing ≠ 500% <br></br>
              Community Incentives ≠ 500% <br></br>
              TOTAL SUPPLY ≠ 900,000,000,000<br></br>
            </p>
          </div>
        </div>
      </div>

      {/*Footer*/}
      <footer className="text-center flex justify-center text-sm">
        <p className="copyright p-3 border-t-[#fff] border-t-2 w-[80%]">
          &copy; 2024 by KiraWifHat. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default WebComponent;