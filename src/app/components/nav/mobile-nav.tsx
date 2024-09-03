"use client"

import Link from "next/link";
import Image from "next/image";
import React,{ useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { logOut, getCurrentUser } from "../../utils/cart";
import { useContext } from "react";
import { CountContext } from "@/context/index";


import MobileUserIcon from "@/assets/images/mobile-user-icon.svg";
import MobileSearchIcon from "@/assets/images/mobile-search-icon.svg";
import MobileCartIcon from "@/assets/images/mobile-cart-icon-sky-blue.svg";
import MobileFavoriteIcon from "@/assets/images/mobile-favorite-icon.svg";
import threeDashIcon from "@/assets/images/three-dash-icon.svg";
import mobileCartIcon from "@/assets/images/mobile-cart-icon.svg";
import mobileViewSearchIcon from "@/assets/images/mobile-view-search-icon.svg";



const MobileNav = () => {


  const context = useContext(CountContext);

  if (!context) {
    throw new Error("CounterComponent must be used within a CountProvider");
  }

  const { cartItemsCount } = context;


  const [show, setShow] = useState<string>("hidden");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const router = useRouter();
  const user = getCurrentUser();

  const checkUserLoginStatus = (): boolean => {
      return !!user; // Returns true if user exists in local storage
  };

  useEffect(() => {
    const loggedIn = checkUserLoginStatus();
    setIsLoggedIn(loggedIn);
    // window.location.reload();

    // Force a re-render to apply the styles
    //  setTimeout(() => {
    //    window.location.reload();
    //  },0);
  }, []);

  


  const showDropDown = () => {
    if (show !== "hidden") {
      setShow("hidden");
    } else {
      setShow("flex");
    }

    //setHeight(height === "0px"? "800px" : "0px");
  };

  //Handle Menu Click
  const handleMenuClick = (path: string) => {
    router.push(path);
    setShow("hidden");
  };

  //Handle Go To Cart
  const handleGoToCart = (path: string) => {
    if (!user) {
      alert(`Please Sign in to view cart`);
      router.push("/auth/login");
      setShow("hidden");
    } else if (user) {
      router.push(path);
      setShow("hidden");
    }
  };

  //Handle Logout
  const handleLogOut = () => {
    logOut();
    setIsLoggedIn(false);
    router.push("/");
    setShow("hidden");
  };

  // const renderLoginRegister = () => {
  //   if (user) {
  //     setShow("hidden");
  //   } else if (!user) {
  //     setShow("flex");
  //   }
  // };

  return (
    <nav
      className={`mobile-nav w-[100%] flex flex-col items-center z-10 fixed top-0 bg-white lg:hidden`}
    >
      <div className="logo-search-cart-3dash-container w-[100%] h-[100px] flex items-center justify-between px-[25px]">
        <Link href="/">
          <h3 className="text-[30px] text-[#252B42] leading-[45px] font-bold">
            Bandage
          </h3>
        </Link>

        <div className="search-cart-3dash-icons flex items-center gap-[20px]">
          <button
            type="button"
            onClick={() => {
              handleMenuClick("");
            }}
          >
            <Image src={mobileViewSearchIcon} alt="Search Icon" />
          </button>

          <button
            type="button"
            onClick={() => {
              handleGoToCart("/pages/cart");
            }}
            className="relative"
          >
            <Image src={mobileCartIcon} alt="Cart Icon" />
            <span className="flex items-center justify-center text-[12px] text-[#252B42] font-bold w-[16px] h-[16px] rounded-full border border-[#252B42] absolute bottom-[16px] left-[16px]">
              {cartItemsCount}
            </span>
          </button>

          <button type="button" onClick={showDropDown}>
            <Image src={threeDashIcon} alt="Three Dash Icon" />
          </button>
        </div>
      </div>

      <div
        className={`mobile-nav-sub-container-1 w-[100%] h-[100vh] ${show} flex flex-col items-center gap-[20px] z-20 fixed top-0 bg-white`}
      >
        <div className="logo-3dash-container w-[100%] h-[100px] flex items-center justify-between px-[25px]">
          <button
            type="button"
            onClick={() => {
              handleMenuClick("/");
            }}
          >
            <h3 className="text-[30px] text-[#252B42] leading-[45px] font-bold">
              Bandage
            </h3>
          </button>

          <button type="button" onClick={showDropDown}>
            <Image src={threeDashIcon} alt="Three Dash Icon" />
          </button>
        </div>

        <div className="links-container w-[121px] h-[320px] flex flex-col items-center gap-[10px]">
          <button
            type="button"
            onClick={() => {
              handleMenuClick("/");
            }}
            className="text-[30px] text-[#252B42] text-center leading-[45px] font-[400]"
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => {
              handleMenuClick("/pages/product-details");
            }}
            className="text-[30px] text-[#252B42] leading-[45px] font-[400]"
          >
            <select>
              <option>Shop</option>
            </select>
          </button>

          <button
            type="button"
            onClick={() => {
              handleMenuClick("/pages/products");
            }}
            className="text-[30px] text-[#252B42] text-center leading-[45px] font-[400]"
          >
            Products
          </button>

          <button
            type="button"
            onClick={() => {
              handleMenuClick("/pages/blog");
            }}
            className="text-[30px] text-[#252B42] text-center leading-[45px] font-[400]"
          >
            Blog
          </button>

          <button
            type="button"
            onClick={() => {
              handleMenuClick("");
            }}
            className="text-[30px] text-[#252B42] text-center leading-[45px] font-[400]"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => {
              handleMenuClick("");
            }}
            className="text-[30px] text-[#252B42] text-center leading-[45px] font-[400]"
          >
            Contact
          </button>
        </div>

        <div className="login-&-icons-container w-[310px] h-[265px] flex flex-col items-center gap-[15px]">
          <div className="user-icon-&-login-register-wrapper w-[310px] h-[60px] flex items-center justify-center gap-[15px]">
            <button
              type="button"
              onClick={() => {
                handleMenuClick("");
              }}
            >
              <Image src={MobileUserIcon} alt="Mobile User Icon" />
            </button>

            <div
              className={`login-&-register-wrapper items-center gap-[12px] ${
                isLoggedIn ? "hidden" : "flex"
              }`}
            >
              <button
                type="button"
                onClick={() => {
                  handleMenuClick("/auth/login");
                }}
              >
                <h2 className="text-[30px] text-[#23A6F0] leading-[45px] font-[400]">
                  Login
                </h2>
              </button>

              <h2 className="text-[30px] text-[#23A6F0] leading-[45px] font-[400]">
                {"/"}
              </h2>

              <button
                type="button"
                onClick={() => {
                  handleMenuClick("/auth/register");
                }}
              >
                <h2 className="text-[30px] text-[#23A6F0] leading-[45px] font-[400]">
                  Register
                </h2>
              </button>
            </div>
          </div>

          <div className="icons-logout-container w-[310px] h-[180px] flex flex-col items-center gap-[30px]">
            <button
              type="button"
              onClick={() => {
                handleMenuClick("");
              }}
            >
              <Image src={MobileSearchIcon} alt="Mobile Search Icon" />
            </button>

            <button
              type="button"
              onClick={() => {
                handleGoToCart("/pages/cart");
              }}
              className="relative"
            >
              <Image src={MobileCartIcon} alt="Mobile Cart Icon" />
              <span className="flex items-center justify-center text-[12px] text-[#252B42] font-bold absolute bottom-[12px] right-[12px]">
                {cartItemsCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                handleMenuClick("");
              }}
            >
              <Image src={MobileFavoriteIcon} alt="Mobile Favorite Icon" />
            </button>

            <button
              onClick={handleLogOut}
              className={`${
                isLoggedIn ? "flex" : "hidden"
              } items-center justify-center text-[24px] text-[#ffffff] leading-[20px] font-[600] bg-[#23A6F0] px-[25px] py-[16px] rounded-[6px]`}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default MobileNav;