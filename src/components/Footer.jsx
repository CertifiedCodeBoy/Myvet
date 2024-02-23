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
  const [showSocial, setShowSocial] = useState(false);

  return (
    <div className="flex flex-col bg-black text-gray-400 p-4 sm:p-10 gap-4 sm:gap-10 overflow-hidden relative bottom-0">
      <div className="flex flex-col sm:gap-20 sm:flex-row">
        {/* help */}
        <div className="relative">
          <h1 className="text-2xl text-white mb-2 sm:mb-8">Help</h1>
          <div
            className={`flex-col gap-4 mb-8 sm:mb-0 ${
              showHelp ? `flex` : `hidden sm:flex`
            }`}
          >
            <a href="#" className="hover:text-white">
              Get help
            </a>
            <a href="#" className="hover:text-white">
              Order Status
            </a>
            <a href="#" className="hover:text-white">
              Delivery
            </a>
            <a href="#" className="hover:text-white">
              Returns
            </a>
            <a href="#" className="hover:text-white">
              Payement options
            </a>
            <a href="#" className="hover:text-white">
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
            <a href="#" className="hover:text-white">
              About Us
            </a>
            <a href="#" className="hover:text-white">
              Careers
            </a>
            <a href="#" className="hover:text-white">
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
            <a href="#" className="hover:text-white">
              Gift Cards
            </a>
            <a href="#" className="hover:text-white">
              Birthdays
            </a>
            <a href="#" className="hover:text-white">
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
        <div className="relative">
          <h1 className="text-2xl text-white mb-2 sm:mb-8">Social</h1>
          <div
            className={`flex-col gap-4 mb-8 sm:mb-0 ${
              showSocial ? `flex` : `hidden sm:flex`
            }`}
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
            <button
              onClick={() => {
                setShowSocial(!showSocial);
              }}
              className="absolute right-4 top-0 sm:hidden"
            >
              {showSocial ? (
                <Minus size={30} color="#fafafa" />
              ) : (
                <Plus size={30} color="#fafafa" />
              )}
            </button>
        </div>
      </div>
      <div className="flex sm:w-full flex-col-reverse sm:flex-row gap-10 items-center sm:justify-around">
        <div className="">
          <p>©Myvet 2024 All Rights Reserved.</p>
        </div>
        <div className="flex sm:justify-end gap-8">
          <a href="#" className="hover:text-white">
            Guides
          </a>
          <a href="#" className="hover:text-white">
            Terms of Sale
          </a>
          <a href="#" className="hover:text-white">
            Terms of use
          </a>
          <a href="#" className="hover:text-white">
            Myvet Privacy policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
