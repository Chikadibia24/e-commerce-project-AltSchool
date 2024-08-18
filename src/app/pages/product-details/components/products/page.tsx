import ProductCard from "@/app/components/products-section/product-card";
import BestSellerProductCover1 from "/src/assets/images/best-seller-product-cover-1.svg"
import BestSellerProductCover2 from "/src/assets/images/best-seller-product-cover-2.svg";
import BestSellerProductCover3 from "/src/assets/images/best-seller-product-cover-3.svg";
import BestSellerProductCover4 from "/src/assets/images/best-seller-product-cover-4.svg";
import BestSellerProductCover5 from "/src/assets/images/best-seller-product-cover-5.svg";
import BestSellerProductCover6 from "/src/assets/images/best-seller-product-cover-6.svg";
import BestSellerProductCover7 from "/src/assets/images/best-seller-product-cover-7.svg";
import BestSellerProductCover8 from "/src/assets/images/best-seller-product-cover-8.svg";


export default function ProductsSection({text}:{text:string}){
  return (
    <section className="products-section w-[100%] h-[1086px] hidden lg:flex justify-center">
      {/* Products Container */}
      <div className="products-container w-[1124px] h-[1086px] py-[48px] flex flex-col items-center gap-[24px]">
        {/* Heading Container */}
        <div className="heading-container w-[1040px] h-[32px]">
          <h3 className="text-[24px] leading-8 text-[#252b42] font-bold">
            {text}
          </h3>
        </div>

        {/* Horizontal Rule */}
        <div className="horizontal-rule w-[1042px] h-[2px] bg-[#ececec]"></div>

        {/* Products Cards Container - 1 */}
        <div className="product-cards-container-1 w-[1049px] h-[485px] flex items-center gap-[24px]">
          <ProductCard
            imageMobile={``}
            imageDesktop={BestSellerProductCover1}
            imageAlt={`Best Seller Product Cover`}
            classNameMobile={`block lg:hidden`}
            classNameDesktop={`hidden lg:block`}
          />
          <ProductCard
            imageMobile={``}
            imageDesktop={BestSellerProductCover2}
            imageAlt={`Best Seller Product Cover`}
            classNameMobile={`block lg:hidden`}
            classNameDesktop={`hidden lg:block`}
          />
          <ProductCard
            imageMobile={``}
            imageDesktop={BestSellerProductCover3}
            imageAlt={`Best Seller Product Cover`}
            classNameMobile={`block lg:hidden`}
            classNameDesktop={`hidden lg:block`}
          />
          <ProductCard
            imageMobile={``}
            imageDesktop={BestSellerProductCover4}
            imageAlt={`Best Seller Product Cover`}
            classNameMobile={`block lg:hidden`}
            classNameDesktop={`hidden lg:block`}
          />
        </div>

        {/* Products Cards Container - 2 */}
        <div className="product-cards-container-2 w-[1049px] h-[485px] flex items-center gap-[24px]">
          <ProductCard
            imageMobile={``}
            imageDesktop={BestSellerProductCover5}
            imageAlt={`Best Seller Product Cover`}
            classNameMobile={`block lg:hidden`}
            classNameDesktop={`hidden lg:block`}
          />
          <ProductCard
            imageMobile={``}
            imageDesktop={BestSellerProductCover6}
            imageAlt={`Best Seller Product Cover`}
            classNameMobile={`block lg:hidden`}
            classNameDesktop={`hidden lg:block`}
          />
          <ProductCard
            imageMobile={``}
            imageDesktop={BestSellerProductCover7}
            imageAlt={`Best Seller Product Cover`}
            classNameMobile={`block lg:hidden`}
            classNameDesktop={`hidden lg:block`}
          />
          <ProductCard
            imageMobile={``}
            imageDesktop={BestSellerProductCover8}
            imageAlt={`Best Seller Product Cover`}
            classNameMobile={`block lg:hidden`}
            classNameDesktop={`hidden lg:block`}
          />
        </div>
      </div>
    </section>
  );
}