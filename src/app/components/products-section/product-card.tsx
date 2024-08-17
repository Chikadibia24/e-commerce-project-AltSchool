import Image from "next/image";

export default function ProductCard({
  imageMobile,
  imageDesktop,
  imageAlt,
  classNameMobile,
  classNameDesktop,
}: {
  imageMobile: string;
  imageDesktop: string;
  imageAlt: string;
  classNameMobile: string;
  classNameDesktop: string;
}) {
  return (
    <div className="w-[295px] h-[522px] lg:w-[240px] lg:h-[400px] flex flex-col items-center justify-center shadow-md">
      <div className="w-[295px] h-[522px] lg:w-[239px] lg:h-[280px]">
        <Image src={imageMobile} alt={imageAlt} className={classNameMobile} />
        <Image src={imageDesktop} alt={imageAlt} className={classNameDesktop} />
      </div>

      <div className="w-[183px] h-[162px] flex flex-col items-center justify-center gap-[10px] px-[25px] pt-[25px] pb-[35px]">
        <h5 className="text-[16px] text-[#252B42] leading-[24px] font-bold text-center">
          Graphic Design
        </h5>

        <div className="w-[183px] flex justify-center">
          <a
            href=""
            className="text-[14px] text-[#737373] leading-[24px] font-bold text-center"
          >
            English Department
          </a>
        </div>

        <div className="w-[108px] h-[34px] flex items-center gap-[5px] py-[5px] px-[3px]">
          <h5 className="text-[16px] text-[#BDBDBD] leading-[24px] font-bold text-center">
            $16.48
          </h5>

          <h5 className="text-[16px] text-[#23856D] leading-[24px] font-bold text-center">
            $6.48
          </h5>
        </div>
      </div>
    </div>
  );
}