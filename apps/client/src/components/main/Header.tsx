import Image from "next/image";

import logo from "../../../public/logo.svg";
import Link from "next/link";
import SearchBar from "../header/SearchBar";
import { HiOutlineBellAlert, HiOutlineHome } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import ShoppingCart from "../ShoppingCart";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import ProfileButton from "./ProfileButton";

const Header = () => {
  return (
    <header
      className="w-full h-14 border-b border-black/10
     mb-2 flex justify-between items-center"
    >
      <Link href={"/"} className="flex w-fit gap-2 items-center">
        <Image
          width={40}
          height={40}
          className="h-8 w-8 md:w-10 md:h-10 overflow-hidden"
          alt="buynux"
          src={logo}
        />
        <h3 className="hidden md:flex font-semibold text-lg text-text">
          NuxBuy
        </h3>
      </Link>
      <div className="flex items-center gap-3 ">
        <SearchBar />
        <div className="flex items-center gap-3 ">
          <HiOutlineHome className="text-xl hover:text-primary hover:cursor-pointer" />
          <HiOutlineBellAlert className="text-xl hover:text-primary hover:cursor-pointer" />
          <ShoppingCart />
          <SignedOut>
            <SignInButton />
            {/* <SignUpButton>
              <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton> */}
          </SignedOut>
          <SignedIn>
            <ProfileButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
