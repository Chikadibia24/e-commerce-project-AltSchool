"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {logOut , getCurrentUser } from "../../utils/cart";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CountContext } from "@/context/index";


import Image from "next/image";
import userIcon from "@/assets/images/user-icon.svg";
import searchIcon from "@/assets/images/search-icon.svg";
import mobileViewSearchIcon from "@/assets/images/mobile-view-search-icon.svg";
import cartIcon from "@/assets/images/cart-icon.svg";
import mobileCartIcon from "@/assets/images/mobile-cart-icon.svg";
import favoriteIcon from "@/assets/images/favorite-icon.svg";
import threeDashIcon from "@/assets/images/three-dash-icon.svg";



export default function NavbarLight() {

  const context = useContext(CountContext);

  if (!context) {
    throw new Error("CounterComponent must be used within a CountProvider");
  }

  const {cartItemsCount } = context;


  const router = useRouter();
  const user = getCurrentUser();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const checkUserLoginStatus = (): boolean => {
    return !!user; // Returns true if user exists, otherwise false
  };

  useEffect(() => {
    const loggedIn = checkUserLoginStatus();
    setIsLoggedIn(loggedIn);

    // let reloadWindow = setTimeout(() => {
       // setIsLoggedIn(loggedIn);
    //   window.location.reload();
    //   setIsLoggedIn(loggedIn);
    // }, 0)
    
    // return () => clearTimeout(reloadWindow);
  }, []);


  const handleGoToCart = (path: string) => {
    const user = getCurrentUser();
    if (!user) {
      alert(`Please Sign in to view cart`)
      router.push("/auth/login");
    } else if (user) {
      router.push(path);
    }
  };

  const handleLogOut = () => {
    logOut();
    setIsLoggedIn(false);
    router.push("/");
  }


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

        <div className="login-register-icons flex items-center gap-[2px] lg:w-[324px] h-[54px]">
          <div className="userIcon-welcome-login-register-logout-wrapper hidden items-center justify-center gap-[2px] w-[210px] h-[54px] lg:flex">
            <div className="user-icon w-[40px] h-[46px] flex items-center justify-center">
              <Link href="">
                <Image src={userIcon} alt="User Icon" />
              </Link>
            </div>

            <div className="render-welcome-login-register w-[155px] h-[46px] flex items-center justify-center gap-[10px]">
              {isLoggedIn ? (
                <div
                  className={`welcome-&-logout-wrapper items-center gap-[5px] flex`}
                >
                  <p className="text-[19px] text-[#23A6F0] leading-[20px] font-[600]">
                    Welcome!
                  </p>

                  <button
                    onClick={handleLogOut}
                    className="flex items-center justify-center text-[12px] text-[#ffffff] leading-[14px] font-[600] bg-[#23A6F0] px-[5px] py-[5px] rounded-[4px]"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div
                  className={`login-&-register-wrapper items-center gap-[10px] flex`}
                >
                  <Link
                    href="/auth/login"
                    className="text-[18px] text-[#23A6F0] leading-[24px] font-bold"
                  >
                    Login
                  </Link>

                  <p className="text-[20px] text-[#23A6F0] leading-[24px] font-bold">
                    /
                  </p>

                  <Link
                    href="/auth/register"
                    className="text-[18px] text-[#23A6F0] leading-[24px] font-bold"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="search-cart-favorite-icons flex items-center">
            <div className="w-[40px] h-[46px] flex items-center justify-center lg:justify-start">
              <div className="mobile-search-icon hidden items-center justify-center lg:hidden hover:cursor-pointer">
                <Image src={mobileViewSearchIcon} alt="Search Icon" />
              </div>

              <div className="desktop-search-icon  items-center justify-center hidden lg:flex hover:cursor-pointer">
                <Image src={searchIcon} alt="Search Icon" />
              </div>
            </div>

            <div className="w-[33px] h-[46px] flex items-center justify-center">
              <div className="mobile-cart-icon hidden items-center justify-center lg:hidden">
                <Link href="/pages/cart">
                  <Image src={mobileCartIcon} alt="Cart Icon" />
                </Link>
              </div>

              <div className="desktop-cart-icon relative hidden items-center justify-center lg:flex">
                <button
                  type="button"
                  onClick={() => {
                    handleGoToCart("/pages/cart");
                  }}
                >
                  <Image src={cartIcon} alt="Cart Icon" />
                </button>
                <span className="flex items-center justify-center text-[12px] text-[#252B42] font-bold w-[14px] h-[14px] rounded-full border border-[#23A6F0] absolute bottom-[10px] left-[10px] z-[1]">
                  {cartItemsCount}
                </span>
              </div>
            </div>

            <div className="w-[30px] h-[46px] hidden items-center justify-center lg:flex">
              <Link href="">
                <Image src={favoriteIcon} alt="Favorite Icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[46px] h-[46px] hidden items-center">
        <button type="button">
          <Image src={threeDashIcon} alt="Three Dash Icon" />
        </button>
      </div>
    </nav>
  );
}
