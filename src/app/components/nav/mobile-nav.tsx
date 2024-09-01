"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "../../utils/cart";




import MobileUserIcon from "@/assets/images/mobile-user-icon.svg";
import MobileSearchIcon from "@/assets/images/mobile-search-icon.svg";
import MobileCartIcon from "@/assets/images/mobile-cart-icon-sky-blue.svg";
import MobileFavoriteIcon from "@/assets/images/mobile-favorite-icon.svg";
import threeDashIcon from "@/assets/images/three-dash-icon.svg";
import mobileCartIcon from "@/assets/images/mobile-cart-icon.svg";
import mobileViewSearchIcon from "@/assets/images/mobile-view-search-icon.svg";




const MobileNav = () => {
  const [height, setHeight] = useState("hidden");
    const router = useRouter();


  const showDropDown = () => {
    if(height === "hidden"){
      setHeight("flex");
    } else {
      setHeight("hidden");
    }

    //setHeight(height === "0px"? "800px" : "0px");
  }

  const handleMenuClick = (path:string) => {
    router.push(path);
    setHeight("hidden");
  };

  const handleGoToCart = (path: string) => {
    const user = getCurrentUser();
    if (!user) {
      router.push("/auth/login");
      setHeight("hidden");
    } else if (user) {
      router.push(path);
      setHeight("hidden");
    }
  };



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
          >
            <Image src={mobileCartIcon} alt="Cart Icon" />
          </button>

          <button type="button" onClick={showDropDown}>
            <Image src={threeDashIcon} alt="Three Dash Icon" />
          </button>
        </div>
      </div>

      <div
        className={`mobile-nav-sub-container-1 w-[100%] h-[100vh] ${height} flex flex-col items-center gap-[20px] z-20 fixed top-0 bg-white`}
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

        <div className="login-icons-container w-[310px] h-[265px] flex flex-col items-center gap-[15px]">
          <div className="login-register w-[310px] h-[60px] flex items-center justify-center gap-[12px]">
            <button
              type="button"
              onClick={() => {
                handleMenuClick("");
              }}
            >
              <Image src={MobileUserIcon} alt="Mobile User Icon" />
            </button>

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

          <div className="icons-container w-[310px] h-[180px] flex flex-col items-center gap-[30px]">
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
            >
              <Image src={MobileCartIcon} alt="Mobile Cart Icon" />
            </button>

            <button
              type="button"
              onClick={() => {
                handleMenuClick("");
              }}
            >
              <Image src={MobileFavoriteIcon} alt="Mobile Favorite Icon" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default MobileNav;