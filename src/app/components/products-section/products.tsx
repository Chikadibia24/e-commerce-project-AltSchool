"use client";

import ProductCard from "./product-card";
import ProductCardOneImage from "@/assets/images/product-card-1-image.svg";
import mobileProductCardOneImage from "@/assets/images/mobile-product-card-1-image.svg";
import ProductCardTwoImage from "@/assets/images/product-card-2-image.svg";
import mobileProductCardTwoImage from "@/assets/images/mobile-product-card-2-image.svg";
import ProductCardThreeImage from "@/assets/images/product-card-3-image.svg";
import mobileProductCardThreeImage from "@/assets/images/mobile-product-card-3-image.svg";
import ProductCardFourImage from "@/assets/images/product-card-4-image.svg";
import mobileProductCardFourImage from "@/assets/images/mobile-product-card-4-image.svg";
import ProductCardSevenImage from "@/assets/images/product-card-7-image.svg";
import ProductCardNineImage from "@/assets/images/product-card-9-image.svg";
import ProductCardTenImage from "@/assets/images/product-card-10-image.svg";
import { useRouter } from "next/navigation";



export default function Products() {

  const router = useRouter();
  const handleClick = () => {
    router.push("/pages/products");
  };



  return (
    <section className="products-section w-[100%] flex justify-center items-center">
      {/* Main Wrapper */}
      <div className="main-wrapper w-[343px] lg:w-[100%] h-[3168px] lg:h-[1241px] flex flex-col items-center justify-center gap-[30px] py-[80px]">
        {/* Sub Wrapper - 1 */}
        <div className="sub-wrapper-1 w-[300px] lg:w-[692px] h-[114px] lg:h-[102px] flex flex-col items-center gap-[10px]">
          <h2 className="text-[20px] text-[#737373] leading-[30px] font-bold text-center">
            Featured Products
          </h2>

          <h3 className="text-[24px] text-[#252B42] leading-[32px] font-bold text-center">
            BESTSELLER PRODUCTS
          </h3>

          <p className="text-[14px] text-[#737373] leading-[20px] font-[400] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Sub Wrapper - 2 */}
        <div className="sub-wrapper-2 w-[343px] lg:w-[100%] h-[2794px] lg:h-[980px] flex flex-col items-center justify-center p-[24px] gap-[17px]">
          <div className="sub-wrapper-2-1 w-[295px] lg:w-[100%] lg:h-[485px] flex flex-col lg:flex-row items-center justify-center gap-[15px]">
            <ProductCard
              imageMobile={mobileProductCardOneImage}
              imageDesktop={ProductCardOneImage}
              imageAlt={`Product Card One Image`}
              classNameMobile={`block lg:hidden`}
              classNameDesktop={`hidden lg:block`}
            />
            <ProductCard
              imageMobile={mobileProductCardTwoImage}
              imageDesktop={ProductCardTwoImage}
              imageAlt={`Product Card Two Image`}
              classNameMobile={`block lg:hidden`}
              classNameDesktop={`hidden lg:block`}
            />
            <ProductCard
              imageMobile={mobileProductCardThreeImage}
              imageDesktop={ProductCardThreeImage}
              imageAlt={`Product Card Three Image`}
              classNameMobile={`block lg:hidden`}
              classNameDesktop={`hidden lg:block`}
            />
            <ProductCard
              imageMobile={mobileProductCardFourImage}
              imageDesktop={ProductCardFourImage}
              imageAlt={`Product Card Four Image`}
              classNameMobile={`block lg:hidden`}
              classNameDesktop={`hidden lg:block`}
            />
            <ProductCard
              imageMobile={``}
              imageDesktop={``}
              imageAlt={``}
              classNameMobile={`block lg:hidden`}
              classNameDesktop={`hidden lg:block`}
            />
          </div>

          <div className="sub-wrapper-2-2 w-[295px] lg:w-[100%] lg:h-[485px] hidden lg:flex lg:flex-row items-center justify-center gap-[15px]">
            <ProductCard
              imageMobile={``}
              imageDesktop={``}
              imageAlt={``}
              classNameMobile={`block lg:hidden`}
              classNameDesktop={`hidden lg:block`}
            />
            <ProductCard
              imageMobile={``}
              imageDesktop={ProductCardSevenImage}
              imageAlt={`Product Card Seven Image`}
              classNameMobile={`block lg:hidden`}
              classNameDesktop={`hidden lg:block`}
            />
            <ProductCard
              imageMobile={``}
              imageDesktop={``}
              imageAlt={``}
              classNameMobile={`block lg:hidden`}
              classNameDesktop={`hidden lg:block`}
            />
            <ProductCard
              imageMobile={``}
              imageDesktop={ProductCardNineImage}
              imageAlt={`Product Card Nine Image`}
              classNameMobile={`block lg:hidden`}
              classNameDesktop={`hidden lg:block`}
            />
            <ProductCard
              imageMobile={``}
              imageDesktop={ProductCardTenImage}
              imageAlt={`Product Card Ten Image`}
              classNameMobile={`block lg:hidden`}
              classNameDesktop={`hidden lg:block`}
            />
          </div>
        </div>

        {/* Button Wrapper */}
        <div className="button-wrapper w-[261px] h-[52px]">
          <button
            onClick={handleClick}
            className="w-[261px] h-[52px] text-[14px] text-[#23A6F0] leading-[22px] font-bold text-center py-[15px] px-[40px] border border-solid border-[#23A6F0] rounded-[5px]"
          >
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
}