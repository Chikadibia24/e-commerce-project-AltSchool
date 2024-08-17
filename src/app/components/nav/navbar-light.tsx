import Image from "next/image";
import userIcon from "/src/assets/images/user-icon.svg";
import searchIcon from "/src/assets/images/search-icon.svg";
import mobileViewSearchIcon from "/src/assets/images/mobile-view-search-icon.svg";
import cartIcon from "/src/assets/images/cart-icon.svg";
import mobileCartIcon from "/src/assets/images/mobile-cart-icon.svg";
import favoriteIcon from "/src/assets/images/favorite-icon.svg";
import threeDashIcon from "/src/assets/images/three-dash-icon.svg";



export default function NavbarLight() {
  return (
    <nav
      className="navbar-light flex items-center
    justify-around lg:justify-between h-[58px] w-[98%] pl-[15px]"
    >
      <div className="logo-container w-[187px] h-[58px] flex items-center">
        <h3 className="text-[24px] text-[#252B42] leading-[32px] font-bold">
          Bandage
        </h3>
      </div>

      <div className="navlinks-main-container flex items-center lg:w-[1155px] h-[58px]">
        <div className="navlinks-sub-container items-center flex-grow-[2] justify-center gap-[15px] lg:w-[361px] h-[25px] hidden lg:flex">
          <div className="w-[43px] h-[24px]">
            <a
              href="#"
              className="text-[14px] text-[#737373] leading-[24px] font-bold"
            >
              Home
            </a>
          </div>

          <div className="flex items-center w-[63px] h-[25px]">
            <a
              href="#"
              className="text-[14px] text-[#252B42] leading-[28px] font-bold"
            >
              <select>
                <option>Shop</option>
              </select>
            </a>
          </div>

          <div className="w-[45px] h-[24px]">
            <a
              href="#"
              className="text-[14px] text-[#737373] leading-[24px] font-bold"
            >
              About
            </a>
          </div>

          <div className="w-[33px] h-[24px]">
            <a
              href="#"
              className="text-[14px] text-[#737373] leading-[24px] font-bold"
            >
              Blog
            </a>
          </div>

          <div className="w-[58px] h-[24px]">
            <a
              href="#"
              className="text-[14px] text-[#737373] leading-[24px] font-bold"
            >
              Contact
            </a>
          </div>

          <div className="w-[44px] h-[24px]">
            <a
              href="#"
              className="text-[14px] text-[#737373] leading-[24px] font-bold"
            >
              Pages
            </a>
          </div>
        </div>

        <div className="login-register-social-icons flex items-center gap-[10px] lg:w-[324px] h-[54px]">
          <div className="hidden items-center justify-end gap-[10px] w-[166px] h-[54px] lg:flex">
            <Image src={userIcon} alt="User Icon" />

            <a
              href="#"
              className="text-[14px] text-[#23A6F0] leading-[24px] font-bold"
            >
              Login / Register
            </a>
          </div>

          <div className="social-icons flex items-center">
            <div className="w-[46px] h-[46px] flex items-center justify-center lg:justify-start">
              <div className="mobile-search-icon flex items-center justify-center lg:hidden">
                <Image src={mobileViewSearchIcon} alt="Search Icon" />
              </div>

              <div className="desktop-search-icon  items-center justify-center hidden lg:flex">
                <Image src={searchIcon} alt="Search Icon" />
              </div>
            </div>

            <div className="w-[46px] h-[46px] flex items-center justify-center lg:justify-start">
              <div className="mobile-cart-icon flex items-center justify-center lg:hidden">
                <Image src={mobileCartIcon} alt="Cart Icon" />
              </div>

              <div className="desktop-cart-icon hidden items-center justify-center lg:flex">
                <Image src={cartIcon} alt="Cart Icon" />
              </div>
            </div>

            <div className="w-[46px] h-[46px] hidden items-center lg:flex">
              <Image src={favoriteIcon} alt="Favorite Icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[46px] h-[46px] flex items-center lg:hidden">
        <Image src={threeDashIcon} alt="Three Dash Icon" />
      </div>
    </nav>
  );
}
