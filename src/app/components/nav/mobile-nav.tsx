"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import MobileUserIcon from "@/assets/images/mobile-user-icon.svg";
import MobileSearchIcon from "@/assets/images/mobile-search-icon.svg";
import MobileCartIcon from "@/assets/images/mobile-cart-icon-sky-blue.svg";
import MobileFavoriteIcon from "@/assets/images/mobile-favorite-icon.svg";
import threeDashIcon from "@/assets/images/three-dash-icon.svg";



const MobileNav = () => {
  const [height, setHeight] = useState("hidden");
  const showDropDown = () => {
    if(height === "hidden"){
      setHeight("flex");
    } else {
      setHeight("hidden");
    }

    //setHeight(height === "0px"? "800px" : "0px");
  }



  return (
    <nav
      className={`mobile-nav w-[414px] max-h-[950px] flex flex-col items-center z-10 fixed top-0 bg-white`}
    >
      <div className="logo-3dash-container w-[414px] h-[100px] flex items-center justify-between px-[25px]">
        <Link href="/">
          <h3 className="text-[30px] text-[#252B42] leading-[45px] font-bold">
            Bandage
          </h3>
        </Link>

        <button type="button" onClick={showDropDown}>
          <Image src={threeDashIcon} alt="Three Dash Icon" />
        </button>
      </div>

      <div
        className={`mobile-nav-sub-container-1 w-[414px] h-[100%] ${height} flex flex-col items-center gap-[30px] z-20 fixed top-0 bg-white`}
      >
        <div className="logo-3dash-container w-[414px] h-[100px] flex items-center justify-between px-[25px]">
          <Link href="/">
            <h3 className="text-[30px] text-[#252B42] leading-[45px] font-bold">
              Bandage
            </h3>
          </Link>

          <button type="button" onClick={showDropDown}>
            <Image src={threeDashIcon} alt="Three Dash Icon" />
          </button>
        </div>

        <div className="links-container w-[121px] h-[360px] flex flex-col items-center gap-[20px]">
          <Link
            href={`/`}
            className="text-[30px] text-[#252B42] text-center leading-[45px] font-[400]"
          >
            Home
          </Link>

          <Link
            href={`/pages/product-details`}
            className="text-[30px] text-[#252B42] leading-[45px] font-[400]"
          >
            <select>
              <option>Shop</option>
            </select>
          </Link>

          <Link
            href={`/pages/products`}
            className="text-[30px] text-[#252B42] text-center leading-[45px] font-[400]"
          >
            Products
          </Link>

          <Link
            href={`/pages/blog`}
            className="text-[30px] text-[#252B42] text-center leading-[45px] font-[400]"
          >
            Blog
          </Link>

          <Link
            href={``}
            className="text-[30px] text-[#252B42] text-center leading-[45px] font-[400]"
          >
            About
          </Link>

          <Link
            href={``}
            className="text-[30px] text-[#252B42] text-center leading-[45px] font-[400]"
          >
            Contact
          </Link>
        </div>

        <div className="login-icons-container w-[310px] h-[265px] flex flex-col items-center gap-[25px]">
          <div className="login-register w-[310px] h-[60px] flex items-center justify-center gap-[12px]">
            <Link href={``}>
              <Image src={MobileUserIcon} alt="Mobile User Icon" />
            </Link>

            <Link href={`/auth/login`}>
              <h2 className="text-[30px] text-[#23A6F0] leading-[45px] font-[400]">
                Login
              </h2>
            </Link>

            <h2 className="text-[30px] text-[#23A6F0] leading-[45px] font-[400]">
              {"/"}
            </h2>

            <Link href={`/auth/register`}>
              <h2 className="text-[30px] text-[#23A6F0] leading-[45px] font-[400]">
                Register
              </h2>
            </Link>
          </div>

          <div className="icons-container w-[310px] h-[180px] flex flex-col items-center gap-[30px]">
            <Link href={``}>
              <Image src={MobileSearchIcon} alt="Mobile Search Icon" />
            </Link>

            <Link href={`/pages/cart`}>
              <Image src={MobileCartIcon} alt="Mobile Cart Icon" />
            </Link>

            <Link href={``}>
              <Image src={MobileFavoriteIcon} alt="Mobile Favorite Icon" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default MobileNav;