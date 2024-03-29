import React, { useState } from "react";
import { FacebookLogo } from "phosphor-react";
import { TwitterLogo } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";
import { Plus } from "phosphor-react";
import { Minus } from "phosphor-react";
import { Link } from "react-router-dom";
import whitelogo from "../Assets/whit_logo.png";

const Footer = () => {
  const [showHelp, setShowHelp] = useState(false);
  const [showMyvet, setShowMyvet] = useState(false);
  const [showPromotions, setShowPromotions] = useState(false);

  return (
    <div className="flex flex-col bg-[#111111] text-[#7e7e7e] pt-10 pb-2 px-4 sm:pt-10 gap-4 sm:gap-10 overflow-hidden relative bottom-0">
      <div className="w-full justify-center flex flex-col gap-4 sm:gap-20 sm:flex-row">
        {/* help */}
        <div className="relative">
        <h1 className="text-2xl text-white mb-2 sm:mb-4 cursor-pointer sm:cursor-default" onClick={() => {
              setShowHelp(!showHelp);
            }} >Help</h1>
          <div
            className={`flex-col gap-4 pl-8 sm:pl-0 mb-8 sm:mb-0 ${
              showHelp ? `flex` : `hidden sm:flex`
            }`}
          >
            <Link to="/Help" onClick={() => window.scrollTo(0, 0)} className="hover:text-white text-sm sm:text-md">
              Get help
            </Link>
            <a href="#" className="hover:text-white text-sm sm:text-md">
              Order Status
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-md">
              Delivery
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-md">
              Returns
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-md">
              Payement options
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-md">
              Contact Us
            </a>
          </div>
          <button
            onClick={() => {
              setShowHelp(!showHelp);
            }}
            className="absolute right-4 top-0 sm:hidden"
          >
            {showHelp ? (
              <Minus size={30} color="#fafafa" />
            ) : (
              <Plus size={30} color="#fafafa" />
            )}
          </button>
        </div>
        {/* myvet */}
        <div className="relative">
        <h1 className="text-2xl text-white mb-2 sm:mb-4 cursor-pointer sm:cursor-default" onClick={() => {
              setShowMyvet(!showMyvet);
            }} >Myvet</h1>
          <div
            className={`flex-col gap-4 pl-8 sm:pl-0 mb-8 sm:mb-0 ${
              showMyvet ? `flex` : `hidden sm:flex`
            }`}
          >
            <a href="#" className="hover:text-white text-sm sm:text-md">
              About Us
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-md">
              Careers
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-md">
              News
            </a>
          </div>
          <button
            onClick={() => {
              setShowMyvet(!showMyvet);
            }}
            className="absolute right-4 top-0 sm:hidden"
          >
            {showMyvet ? (
              <Minus size={30} color="#fafafa" />
            ) : (
              <Plus size={30} color="#fafafa" />
            )}
          </button>
        </div>
        {/* promotions */}
        <div className="relative">
          <h1 className="text-2xl text-white mb-2 sm:mb-4 cursor-pointer sm:cursor-default" onClick={() => {
              setShowPromotions(!showPromotions);
            }} >
            Promotions & Offers
          </h1>
          <div
            className={`flex-col gap-4 mb-8 pl-8 sm:pl-0 sm:mb-0 ${
              showPromotions ? `flex` : `hidden sm:flex`
            }`}
          >
            <a href="#" className="hover:text-white text-sm sm:text-md">
              Gift Cards
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-md">
              Birthdays
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-md">
              Students
            </a>
          </div>
          <button
            onClick={() => {
              setShowPromotions(!showPromotions);
            }}
            className="absolute right-4 top-0 sm:hidden"
          >
            {showPromotions ? (
              <Minus size={30} color="#fafafa" />
            ) : (
              <Plus size={30} color="#fafafa" />
            )}
          </button>
        </div>
        {/* social */}
        <div className="relative mt-8 sm:mt-0 flex flex-col items-center justify-center ">
            <h1 className="text-xl text-white mb-2 sm:mb-4 mt-4 sm:block cursor-default">Follow Myvet :</h1>
          <div
            className={`flex sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-0 `}
          >
            <a href="#">
              <FacebookLogo size={32} color="#fafafa" />
            </a>
            <a href="#">
              <TwitterLogo size={32} color="#fafafa" />
            </a>
            <a href="#">
              <InstagramLogo size={32} color="#fafafa" />
            </a>
          </div>
          <div className="">
          <img src={whitelogo} alt="MyvetLogo" className="aspect-square w-40" />
          </div>
        </div>
      </div>
      <div className="flex sm:w-full flex-col-reverse sm:flex-row sm:gap-40 gap-4 items-center justify-center">
        <div className="">
          <p className="text-[10px] sm:text-md cursor-default">©Myvet 2024 All Rights Reserved.</p>
        </div>
        <div className="flex sm:justify-end gap-8">
          <a href="#" className="hover:text-white text-[10px] sm:text-md">
            Guides
          </a>
          <a href="#" className="hover:text-white text-[10px] sm:text-md">
            Terms of Sale
          </a>
          <a href="#" className="hover:text-white text-[10px] sm:text-md">
            Terms of use
          </a>
          <a href="#" className="hover:text-white text-[10px] sm:text-md">
            Myvet Privacy policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
