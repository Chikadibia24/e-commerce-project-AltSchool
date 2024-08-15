import Image from "next/image";
import clockIcon from "/src/assets/images/clock-icon.svg";
import chartIcon from "/src/assets/images/chart-icon.svg";
import rightArrowIcon from "/src/assets/images/right-arrow-icon.svg";



export default function BlogCard({ bgImage }: { bgImage: string }) {
  return (
    <div className="blog-card w-[348px] h-[606px] flex flex-col shadow-md">
      {/* Wrapper - 1 */}
      <div className={`wrapper-1 w-[348px] h-[300px] pl-[20px] pt-[20px] ${bgImage}`}>
        <div className="w-[58px] h-[24px] px-[10px] bg-[#E74040] rounded-[3px]">
          <h6 className="text-[14px] text-[#ffffff] leading-[24px] font-bold text-center">
            NEW
          </h6>
        </div>
      </div>

      {/* Wrapper - 2 */}
      <div className="wrapper-2 w-[348px] h-[306px] flex flex-col gap-[10px] pt-[25px] px-[25px] pb-[35px]">
        <div className="wrapper-2-breadcrumb w-[159px] h-[16px] flex items-center gap-[15px]">
          <p className="text-[12px] text-[#8EC2F2] leading-[16px] font-[400]">
            Google
          </p>

          <p className="text-[12px] text-[#737373] leading-[16px] font-[400]">
            Trending
          </p>

          <p className="text-[12px] text-[#737373] leading-[16px] font-[400]">
            New
          </p>
        </div>

        <div className="wrapper-2-h4 w-[247px] h-[60px]">
          <h4 className="text-[20px] text-[#252B42] leading-[30px] font-[400]">{`Loudest à la Madison #1 (L'integral)`}</h4>
        </div>

        <div className="wrapper-2-para w-[270px] h-[60px]">
          <p className="text-[14px] text-[#737373] leading-[20px] font-[400]">
            {`We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.`}
          </p>
        </div>

        <div className="wrapper-2-time-date-comments w-[298px] h-[46px] flex items-center justify-between py-[15px]">
          <div className="w-[98px] h-[16px] flex items-center gap-[5px]">
            <Image src={clockIcon} alt="Clock Icon" />
            <p className="text-[12px] text-[#737373] leading-[16px] font-[400]">
              22 April 2021
            </p>
          </div>

          <div className="w-[105px] h-[16px] flex items-center gap-[5px]">
            <Image src={chartIcon} alt="Chart Icon" />
            <p className="text-[12px] text-[#737373] leading-[16px] font-[400]">
              10 comments
            </p>
          </div>
        </div>

        <div className="wrapper-2-learn-more w-[104px] h-[24px] flex items-center gap-[10px]">
          <h6 className="text-[14px] text-[#737373] leading-[24px] font-bold text-center">
            Learn More
          </h6>
          <Image src={rightArrowIcon} alt="Right Arrow Icon" />
        </div>
      </div>
    </div>
  );
}
