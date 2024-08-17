import Image from "next/image";
import easyWinsIcon from "/src/assets/images/easy-wins-icon.svg";
import openBookIcon from "/src/assets/images/open-book-icon.svg";
import dataGrowthIcon from "/src/assets/images/data-growth-icon.svg";


export default function Features() {

  function FeaturesCard({
    imageSrc,
    imageAlt,
    height,
    heading,
    paragraph,
  }: {
      imageSrc: string;
      imageAlt: string;
      height: string;
      heading: string;
      paragraph: string;
  }) {
    return (
      <div
        className={`w-[328px] ${height} flex flex-col justify-center items-center gap-[20px] px-[40px]`}
      >
        <Image src={imageSrc} alt={imageAlt} />
        <h3 className="text-[24px] text-[#252B42] leading-[32px] font-bold text-center">
          {heading}
        </h3>

        <p className="text-[12px] text-[#737373] leading-[16px] font-[400] text-center">
          {paragraph}
        </p>
      </div>
    );
  }



  return (
    <section className="features-section w-[100%] flex justify-center bg-slate-950">
      {/* Main wrapper */}
      <div className="main-wrapper w-[414px] h-[1204px] lg:w-[1050px] lg:h-[560px] flex flex-col items-center justify-center gap-[30px] py-[20px]">
        {/* Sub wrapper 1 */}
        <div className="sub-wrapper-1 w-[246px] h-[122px] lg:w-[692px] lg:h-[102px] flex flex-col items-center gap-[10px]">
          <h2 className="text-[20px] text-[#737373] leading-[30px] font-bold text-center">
            Featured Products
          </h2>

          <h3 className="text-[24px] text-[#252B42] leading-[32px] font-bold text-center">
            THE BEST SERVICES
          </h3>

          <p className="text-[14px] text-[#737373] leading-[20px] font-[400] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Sub wrapper 2 */}
        <div className="sub-wrapper-2 w-[329px] h-[842px] lg:w-[1045px] lg:h-[274px] flex flex-col lg:flex-row lg:items-center gap-[30px]">
          <FeaturesCard
            imageSrc={easyWinsIcon}
            imageAlt={`Easy Wins Icon`}
            height={`h-[254px]`}
            heading={`Easy Wins`}
            paragraph={`Get your best looking smile now!`}
          />

          <FeaturesCard
            imageSrc={openBookIcon}
            imageAlt={`Open Book Icon`}
            height={`h-[254px]`}
            heading={`Concrete`}
            paragraph={`Defalcate is most focused in helping you discover your most beautiful smile`}
          />

          <FeaturesCard
            imageSrc={dataGrowthIcon}
            imageAlt={`Data Growth Icon`}
            height={`h-[254px]`}
            heading={`Hack Growth`}
            paragraph={`Overcame any hurdle or any other problem.`}
          />
        </div>
      </div>
    </section>
  );
}