import Image from "next/image";
import BreadcrumbRightArrow from "/src/assets/images/breadcrumb-right-arrow.svg";


export default function BreadCrumb({
  text1,
  text2,
  arrow2 }: {
  text1: string;
  text2: string;
  arrow2: string;
}) {
  return (
    <section className="breadcrumb-section w-[100%] h-[92px] flex items-center justify-center py-[24px]">
      {/*Main Container*/}
      <div className="main-wrapper w-[414px] lg:w-[1033px] h-[44px] flex items-center justify-center lg:justify-start">
        <div className="breadcrumb w-[275px] h-[44px] flex items-center gap-[15px]">
          <a
            href="http://"
            className="text-[14px] text-[#252B42] leading-6 font-bold"
          >
            Home
          </a>

          <Image src={BreadcrumbRightArrow} alt="Breadcrumb Right Arrow" />

          <a
            href="http://"
            className={`text-[14px] leading-6 font-bold ${text1}`}
          >
            Shop
          </a>

          <Image
            src={BreadcrumbRightArrow}
            alt="Breadcrumb Right Arrow"
            className={`${arrow2}`}
          />

          <a
            href="http://"
            className={`text-[14px] leading-6 font-bold ${text2}`}
          >
            Shopping Cart
          </a>
        </div>
      </div>
    </section>
  );
}