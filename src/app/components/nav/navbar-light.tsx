"use client";
import Link from "next/link";
import MobileNav from "./mobile-nav";

import Image from "next/image";
import userIcon from "@/assets/images/user-icon.svg";
import searchIcon from "@/assets/images/search-icon.svg";
import mobileViewSearchIcon from "@/assets/images/mobile-view-search-icon.svg";
import cartIcon from "@/assets/images/cart-icon.svg";
import mobileCartIcon from "@/assets/images/mobile-cart-icon.svg";
import favoriteIcon from "@/assets/images/favorite-icon.svg";
import threeDashIcon from "@/assets/images/three-dash-icon.svg";



export default function NavbarLight() {
  return (
    <nav
      className="navbar-light flex items-center
    justify-around lg:justify-between h-[58px] w-[98%] pl-[15px]"
    >
      <div className="logo-container w-[187px] h-[58px] hidden lg:flex items-center">
        <Link href="/">
          <h3 className="text-[24px] text-[#252B42] leading-[32px] font-bold">
            Bandage
          </h3>
        </Link>
      </div>

      <div className="navlinks-main-container flex items-center lg:w-[1155px] h-[58px]">
        <div className="navlinks-sub-container items-center flex-grow-[2] justify-center gap-[15px] lg:w-[361px] h-[25px] hidden lg:flex">
          <div className="w-[40px] h-[24px]">
            <Link
              href="/"
              className="text-[14px] text-[#737373] leading-[24px] font-bold"
            >
              Home
            </Link>
          </div>

          <div className="flex items-center w-[58px] h-[25px]">
            <Link
              href="/pages/product-details"
              className="text-[14px] text-[#252B42] leading-[28px] font-bold"
            >
              <select>
                <option>Shop</option>
              </select>
            </Link>
          </div>

          <div className="w-[65px] h-[24px]">
            <Link
              href="/pages/products"
              className="text-[14px] text-[#737373] leading-[24px] font-bold"
            >
              Products
            </Link>
          </div>

          <div className="w-[33px] h-[24px]">
            <Link
              href="/pages/blog"
              className="text-[14px] text-[#737373] leading-[24px] font-bold"
            >
              Blog
            </Link>
          </div>

          <div className="w-[45px] h-[24px]">
            <Link
              href=""
              className="text-[14px] text-[#737373] leading-[24px] font-bold"
            >
              About
            </Link>
          </div>

          <div className="w-[50px] h-[24px]">
            <Link
              href=""
              className="text-[14px] text-[#737373] leading-[24px] font-bold"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="login-register-social-icons flex items-center gap-[10px] lg:w-[324px] h-[54px]">
          <div className="hidden items-center justify-end gap-[10px] w-[166px] h-[54px] lg:flex">
            <Link href="">
              <Image src={userIcon} alt="User Icon" />
            </Link>

            <Link
              href="/auth/login"
              className="text-[14px] text-[#23A6F0] leading-[24px] font-bold"
            >
              Login
            </Link>

            <p className="text-[16px] text-[#23A6F0] leading-[24px] font-bold">
              /
            </p>

            <Link
              href="/auth/register"
              className="text-[14px] text-[#23A6F0] leading-[24px] font-bold"
            >
              Register
            </Link>
          </div>

          <div className="social-icons flex items-center">
            <div className="w-[46px] h-[46px] flex items-center justify-center lg:justify-start">
              <div className="mobile-search-icon hidden items-center justify-center lg:hidden hover:cursor-pointer">
                <Image src={mobileViewSearchIcon} alt="Search Icon" />
              </div>

              <div className="desktop-search-icon  items-center justify-center hidden lg:flex hover:cursor-pointer">
                <Image src={searchIcon} alt="Search Icon" />
              </div>
            </div>

            <div className="w-[46px] h-[46px] flex items-center justify-center lg:justify-start">
              <div className="mobile-cart-icon hidden items-center justify-center lg:hidden">
                <Link href="/pages/cart">
                  <Image src={mobileCartIcon} alt="Cart Icon" />
                </Link>
              </div>

              <div className="desktop-cart-icon hidden items-center justify-center lg:flex">
                <Link href="/pages/cart">
                  <Image src={cartIcon} alt="Cart Icon" />
                </Link>
              </div>
            </div>

            <div className="w-[46px] h-[46px] hidden items-center lg:flex">
              <Link href="">
                <Image src={favoriteIcon} alt="Favorite Icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[46px] h-[46px] hidden items-center lg:hidden">
        <button type="button">
          <Image src={threeDashIcon} alt="Three Dash Icon" />
        </button>
        
      </div>
    </nav>
  );
}
