import Image from "next/image";
import BreadcrumbRightArrow from "/src/assets/images/breadcrumb-right-arrow.svg";


export default function BreadCrumb() {
  return (
    <section className="breadcrumb-section w-[100%] h-[92px] flex items-center justify-center py-[24px]">
      {/*Main Container*/}
      <div className="main-wrapper w-[414px] lg:w-[1033px] h-[44px] flex items-center justify-center lg:justify-start">
        <div className="breadcrumb w-[123px] h-[44px] flex items-center gap-[15px]">
          <a
            href="http://"
            className="text-[14px] text-[#252B42] leading-6 font-bold"
          >
            Home
          </a>

          <Image src={BreadcrumbRightArrow} alt="Breadcrumb Right Arrow" />

          <h6 className="text-[14px] text-[#BDBDBD] leading-6 font-bold">
            Shop
          </h6>
        </div>
      </div>
    </section>
  );
}