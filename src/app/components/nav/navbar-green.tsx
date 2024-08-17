import Image from "next/image";
import phoneIcon from "/src/assets/images/phone-icon2.svg";
import envelopeIcon from "/src/assets/images/envelope-icon2.svg";
import instagramIcon from "/src/assets/images/instagram-icon.svg";
import youtubeIcon from "/src/assets/images/youtube-icon.svg";
import facebookIcon from "/src/assets/images/facebook-icon.svg";
import twitterIcon from "/src/assets/images/twitter-icon.svg";

export default function NavbarGreen() {
  return (
    <nav className="navbar-dark-green sticky top-0 bg-[#23856D] hidden lg:flex lg:items-center lg:justify-between h-[58px] w-[100%] px-[20px]">
      <div className="flex items-center justify-start w-[415px] h-[46px] gap-[15px]">
        <div className="flex w-[145px] h-[44px] p-[10px] gap-[5px] text-white">
          <Image src={phoneIcon} alt="phoneIcon" />
          <h6 className="text-[14px] leading-[24px] font-bold">
            (+234)8036505218
          </h6>
        </div>

        <div className="flex w-[260px] justify-center h-[44px] p-[10px] gap-[5px] text-white">
          <Image src={envelopeIcon} alt="envelopeIcon" />
          <h6 className="text-[14px] leading-[24px] font-bold">
            ogbuchika71@gmail.com
          </h6>
        </div>
      </div>

      <div className="flex items-center justify-start w-[332px] h-[44px] p-[10px] gap-[10px] text-white">
        <h6 className="text-[14px] leading-[24px] font-bold">
          Follow us and get a chance to win 80% off
        </h6>
      </div>

      <div className="flex items-center justify-start w-[233px] h-[46px] p-[10px] gap-[10px] text-white">
        <div className="w-[83px] flex items-center justify-center">
          <h6 className="text-[14px] leading-[24px] font-bold">Follow Us :</h6>
        </div>

        <div className="flex gap-[5px] w-[120px] h-[26px] items-center">
          <Image src={instagramIcon} alt="InstagramIcon" />
          <Image src={youtubeIcon} alt="YoutubeIcon" />
          <Image src={facebookIcon} alt="FacebookIcon" />
          <Image src={twitterIcon} alt="TwitterIcon" />
        </div>
      </div>
    </nav>
  );
}
