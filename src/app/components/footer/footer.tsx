import Image from "next/image";
import facebookIcon from "/src/assets/images/facebook-icon-footer.svg";
import instagramIcon from "/src/assets/images/instagram-icon-footer.svg";
import twitterIcon from "/src/assets/images/twitter-icon-footer.svg";



export default function Footer() {
  return (
    <footer className="footer flex flex-col items-center h-[1342px] w-[100%] lg:h-[488px]">

      <div className="bandage-main-wrapper flex items-center lg:justify-center w-[321px] h-[173px] lg:w-[100%] lg:h-[142px]">

        <div className="bandage-sub-wrapper flex flex-col gap-[18px] lg:gap-[0] lg:items-center justify-between lg:flex-row w-[243px] h-[93px] lg:w-[1050px] lg:h-[138px] py-[40px]">
          <div className="w-[236px] h-[58px]">
            <h3 className="text-[24px] text-[#252B42] leading-[32px] font-bold">
              Bandage
            </h3>
          </div>

          <div className="flex lg:justify-center gap-[20px] w-[236px] h-[24px]">
            <Image src={facebookIcon} alt="Facebook Icon" />
            <Image src={instagramIcon} alt="Instagram Icon" />
            <Image src={twitterIcon} alt="Twitter Icon" />
          </div>
        </div>
      </div>

      <hr className="w-[390px] lg:w-[1057px] border-[#E6E6E6] border-[1px]" />

      <div className="footer-links-wrapper flex items-center justify-center w-[100%] h-[1071px] lg:h-[272px]">

        <div className="footer-links-sub-wrapper flex flex-col lg:flex-row gap-[30px] w-[321px] h-[1071px] lg:w-[1050px] lg:h-[270px] py-[50px]">
          <div className="flex flex-col w-[148px] h-[170px] gap-[20px]">
            <h5 className="text-[16px] text-[#252B42] leading-[24px] font-bold">
              Company Info
            </h5>
            <div className="flex flex-col gap-[10px]">
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                About Us
              </a>
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                Career
              </a>
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                We are hiring
              </a>
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                Blog
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[148px] h-[170px] gap-[20px]">
            <h5 className="text-[16px] text-[#252B42] leading-[24px] font-bold">
              Legal
            </h5>
            <div className="flex flex-col gap-[10px]">
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                About Us
              </a>
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                Career
              </a>
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                We are hiring
              </a>
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                Blog
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[148px] h-[170px] gap-[20px]">
            <h5 className="text-[16px] text-[#252B42] leading-[24px] font-bold">
              Features
            </h5>
            <div className="flex flex-col gap-[10px]">
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                Business Marketing
              </a>
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                User Analytic
              </a>
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                Live Chat
              </a>
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                Unlimited Support
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[148px] h-[170px] gap-[20px]">
            <h5 className="text-[16px] text-[#252B42] leading-[24px] font-bold">
              Resources
            </h5>
            <div className="flex flex-col gap-[10px]">
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                IOS & Android
              </a>
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                Watch a demo
              </a>
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                Customers
              </a>
              <a
                href=""
                className="text-[14px] text-[#737373] leading-[24px] font-bold"
              >
                API
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[321px] h-[131px] gap-[20px]">
            <h5 className="text-[16px] text-[#252B42] leading-[24px] font-bold">
              Get In Touch
            </h5>
            <div className="flex flex-col gap-[10px] w-[321px] h-[87px]">
              <div className="flex items-center w-[321px] h-[58px]">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-[204px] h-[56px] border-[1px] border-solid border-[#E6E6E6] pl-[10px] rounded-l-[5px] focus:outline-none text-[14px] text-[#737373] leading-[28px] font-[400]"
                />
                <button className="w-[117px] h-[58px] text-[14px] text-[#ffffff] leading-[28px] font-[400] bg-[#23A6F0] border-[1px] border-solid border-[#E6E6E6] rounded-r-[5px]">
                  Subscribe
                </button>
              </div>

              <p className="text-[14px] text-[#737373] leading-[24px] font-bold">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[98px] lg:h-[74px] flex justify-center">
        <div className="w-[193px] h-[48px] lg:w-[1050px] lg:h-[74px] py-[25px]">
          <h6 className="text-[14px] text-[#737373] leading-[24px] font-bold text-center lg:text-left">
            Made with love by Chika. All rights reserved.
          </h6>
        </div>
      </div>
    </footer>
  );
}
