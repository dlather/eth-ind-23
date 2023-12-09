"use client";

import React from "react";
import Image from "next/image";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import PolygonIcon from "../../public/assets/polygon.svg";
import UmaIcon from "../../public/assets/uma.svg";
import {
  ABOUT_PAGE,
  APP_RISK_MESSAGE,
  COMPANY_NAME,
  EARNINGS,
  FAQ_ID,
  FEATURES,
  companyDescription,
} from "../constants";
import { Link as LinkScroll } from "react-scroll";

const Footer = () => {
  return <div></div>;
  return (
    <>
      <div className="bg-base-100 pt-12 flex flex-col">
        <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-4 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
          <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
            <div className="flex flex-row mb-2 w-full justify-between">
              <img src="/assets/b11_logo-removebg.png" className="self-start h-16 w-auto flex" />
            </div>
            <p className="mb-1">
              <strong className="font-medium">{COMPANY_NAME}</strong> {companyDescription}
            </p>
            <p className="text-gray-400 mb-6">
              ©{new Date().getFullYear()} - {COMPANY_NAME}
            </p>
            <div className="flex w-full mt-2 mb-8 -mx-2">
              <div className="mx-2 bg-base-100 rounded-full items-center justify-center flex p-2 shadow-md">
                <Facebook className="h-6 w-6" />
              </div>
              <div className="mx-2 bg-base-100 rounded-full items-center justify-center flex p-2 shadow-md">
                <Twitter className="h-6 w-6" />
              </div>
              <div className="mx-2 bg-base-100 rounded-full items-center justify-center flex p-2 shadow-md">
                <Instagram className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
            <ul className="text-black-500 ">
              <li className="my-2 hover:text-primary cursor-pointer transition-all">
                <LinkScroll to={ABOUT_PAGE} spy={true} smooth={true} duration={1000}>
                  <a className="hover:text-primary">About us</a>
                </LinkScroll>{" "}
              </li>
              <li className="my-2 hover:text-primary cursor-pointer transition-all">
                <LinkScroll to={FEATURES} spy={true} smooth={true} duration={1000}>
                  <a className="hover:text-primary">Feature</a>
                </LinkScroll>
              </li>
              <li className="my-2 hover:text-primary cursor-pointer transition-all">
                <LinkScroll to={EARNINGS} spy={true} smooth={true} duration={1000}>
                  <a className="hover:text-primary">Earning</a>
                </LinkScroll>{" "}
              </li>
              <li className="my-2 hover:text-primary cursor-pointer transition-all">
                <LinkScroll to={FAQ_ID} spy={true} smooth={true} duration={1000}>
                  <a className="hover:text-primary">FAQ</a>
                </LinkScroll>{" "}
              </li>
            </ul>
          </div>
          <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">(Coming soon...)</p>
            <ul className="text-black-500">
              <li className="my-2 hover:text-primary cursor-pointer transition-all">Tutorials</li>
              <li className="my-2 hover:text-primary cursor-pointer transition-all">Privacy Policy </li>
              <li className="my-2 hover:text-primary cursor-pointer transition-all">Terms of Service </li>
            </ul>
          </div>
          {/* <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
            <ul className="text-black-500">
              <li className="my-2 hover:text-primary cursor-pointer transition-all">Become Provider </li>
            </ul>
          </div> */}
        </div>
      </div>
      <footer className="footer footer-center p-2 pb-2 bg-base-200 font-bold text-base-content">
        <aside>
          <div className="flex mt-2 justify-center items-center">
            <p className="mr-4">A product by</p>
            <Image
              src="/assets/fs-logo-without-bg.png"
              // layout="responsive"
              height={84}
              width={84}
              className="self-end flex"
              alt="footer_img"
            />
          </div>
          <div className="flex justify-center items-center">
            Powered By
            <PolygonIcon className="h-16 w-16" />
            and
            <UmaIcon className="h-16 w-16 " />
          </div>
        </aside>
      </footer>
      <footer className="footer footer-center p-2 pb-12 bg-base-300 text-base-content">
        <aside>
          <p>{APP_RISK_MESSAGE}</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
