"use client";

import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const handleClick = () => {router.push("/pages/product-details");}
  
  return (
    <button onClick={handleClick} onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === "Space") {
        handleClick();
      }
    }}
      className="w-[295px] h-[522px] lg:w-[240px] lg:h-[445px] flex flex-col items-center justify-center hover:shadow-2xl hover:-translate-y-1 duration-[0.2s]  ease-linear">
      <div className="w-[295px] flex justify-center h-[522px] lg:w-[235px] lg:h-[280px]">
        <Image src={imageMobile} alt={imageAlt} className={classNameMobile} />
        <Image src={imageDesktop} alt={imageAlt} className={classNameDesktop} />
      </div>

      <div className="w-[183px] h-[162px] flex flex-col items-center justify-center gap-[10px] px-[25px] pt-[25px] pb-[25px]">
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
    </button>
  );
}