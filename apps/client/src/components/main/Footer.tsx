import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.svg";
import { footerLink } from "@/lib/const";
const Footer = () => {
  return (
    <footer className="w-full flex gap-20 md:gap-30 px-5 py-8 bg-blue rounded-lg">
      <div className="flex flex-col gap-4 flex-grow w-fit">
        <Link href={"/"} className="flex w-fit gap-3 items-center">
          <Image
            width={50}
            height={50}
            className="w-10 h-10 md:w-12 md:h-12 overflow-hidden"
            alt="buynux"
            src={logo}
          />
          <h3 className=" font-semibold text-lg text-text-inverse">NuxBuy</h3>
        </Link>
        <div className="text-nowrap flex flex-col gap-2 ml-2  text-text-muted text-xs md:text-sm ">
          <h4>&copy; 2025 NuxBuy.</h4>
          <h4>All rights reserved</h4>
        </div>
      </div>
      <div
        className="w-full mt-4  hidden md:grid  grid-flow-col md:grid-rows-4
       gap-y-2  text-text-muted text-xs  md:text-sm
          "
      >
        {footerLink.map((link, index) => (
          <Link className="hover:text-primary" key={index} href={link.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
