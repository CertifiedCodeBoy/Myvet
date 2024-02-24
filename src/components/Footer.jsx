import React, { useState } from "react";
import { FacebookLogo } from "phosphor-react";
import { TwitterLogo } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";
import { Plus } from "phosphor-react";
import { Minus } from "phosphor-react";

const Footer = () => {
  const [showHelp, setShowHelp] = useState(false);
  const [showMyvet, setShowMyvet] = useState(false);
  const [showPromotions, setShowPromotions] = useState(false);

  return (
    <div className="flex flex-col bg-black text-gray-400 p-4 sm:p-10 gap-4 sm:gap-10 overflow-hidden relative bottom-0 text-">
      <div className="flex flex-col gap-4 sm:gap-20 sm:flex-row">
        {/* help */}
        <div className="relative">
          <h1 className="text-2xl text-white mb-2 sm:mb-8">Help</h1>
          <div
            className={`flex-col gap-4 mb-8 sm:mb-0 ${
              showHelp ? `flex` : `hidden sm:flex`
            }`}
          >
            <a href="#" className="hover:text-white text-sm sm:text-lg">
              Get help
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-lg">
              Order Status
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-lg">
              Delivery
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-lg">
              Returns
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-lg">
              Payement options
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-lg">
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
          <h1 className="text-2xl text-white mb-2 sm:mb-8">Myvet</h1>
          <div
            className={`flex-col gap-4 mb-8 sm:mb-0 ${
              showMyvet ? `flex` : `hidden sm:flex`
            }`}
          >
            <a href="#" className="hover:text-white text-sm sm:text-lg">
              About Us
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-lg">
              Careers
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-lg">
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
          <h1 className="text-2xl text-white mb-2 sm:mb-8">
            Promotions & Offers
          </h1>
          <div
            className={`flex-col gap-4 mb-8 sm:mb-0 ${
              showPromotions ? `flex` : `hidden sm:flex`
            }`}
          >
            <a href="#" className="hover:text-white text-sm sm:text-lg">
              Gift Cards
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-lg">
              Birthdays
            </a>
            <a href="#" className="hover:text-white text-sm sm:text-lg">
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
        <div className="relative mt-8 sm:mt-0">
            <h1 className="text-2xl text-white mb-2 sm:mb-8 hidden sm:block">Social</h1>
          <div
            className={`flex sm:flex-col justify-center gap-4 mb-8 sm:mb-0 `}
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
        </div>
      </div>
      <div className="flex sm:w-full flex-col-reverse sm:flex-row gap-10 items-center sm:justify-around">
        <div className="">
          <p className="text-[10px] sm:text-lg">©Myvet 2024 All Rights Reserved.</p>
        </div>
        <div className="flex sm:justify-end gap-8">
          <a href="#" className="hover:text-white text-[10px] sm:text-lg">
            Guides
          </a>
          <a href="#" className="hover:text-white text-[10px] sm:text-lg">
            Terms of Sale
          </a>
          <a href="#" className="hover:text-white text-[10px] sm:text-lg">
            Terms of use
          </a>
          <a href="#" className="hover:text-white text-[10px] sm:text-lg">
            Myvet Privacy policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
