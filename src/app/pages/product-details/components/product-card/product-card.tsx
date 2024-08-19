"use client";


import Image from "next/image";
import CarouselArrowLeft from "@/assets/images/carousel-arrow-left.svg";
import CarouselArrowRight from "@/assets/images/carousel-arrow-right.svg";
import CarouselImageOne from "@/assets/images/carousel-image-1.svg";
import CarouselImageTwo from "@/assets/images/carousel-image-2.svg";
import starIcon from "@/assets/images/star-icon.svg";
import starOutlineIcon from "@/assets/images/star-icon-outline.svg";
import ProductCardFavoriteIcon from "@/assets/images/product-card-favorite-icon.svg";
import ProductCardCartIcon from "@/assets/images/product-card-cart-icon.svg";
import ProductCardEyeIcon from "@/assets/images/product-card-eye-icon.svg";
import { useRouter } from "next/navigation";



export default function ProductCard() {
  

  function ProductColors({bgColor}: {bgColor: string}) {
    return <div className={`w-[30px] h-[30px] rounded-full hover:cursor-pointer ${bgColor}`}></div>;
  }


    const route = useRouter();
    const handleClick = (para:string) => {
      route.push(para);
    };


  function ProductActionsBg({ image, altText, onclick }: { image: string; altText: string; onclick: any}) {
    return (
      <button className="w-[44px] h-[44px] flex items-center justify-center border border-[#E8E8E8] rounded-full" onClick={(para)=>onclick(para)}>
        <Image src={image} alt={altText}/>
      </button>
    );
  }
  


  return (
    <section className="product-card-section w-[100%] h-[991px] lg:h-[598px] flex items-center justify-center">
      {/*Main Wrapper*/}
      <div className="main-wrapper w-[350px] h-[895px] lg:w-[1050px] lg:h-[550px] flex flex-col lg:flex-row justify-center gap-[30px]">
        {/*Image Card*/}
        <div className="image-card w-[350px] h-[394px] lg:w-[506px] lg:h-[546px] flex flex-col gap-[20px]">
          {/*Main Image Container*/}
          <div
            className="main-image-container w-[350px] h-[272px] lg:w-[506px] lg:h-[450px]
          
          bg-[url('https://res.cloudinary.com/chikadibia/image/upload/v1723924058/e-commerce-project-AltSchool/mobile-product-page-product-card-1-cover_u5xe3g.svg')]

          lg:bg-[url('https://res.cloudinary.com/chikadibia/image/upload/v1723912403/e-commerce-project-AltSchool/product-page-product-card-1-cover_yhdkdw.svg')] flex items-end"
          >
            <div className="image-change-arrows-wrapper w-[350px] h-[155px] lg:w-[506px] lg:h-[195px] flex items-start justify-between px-[30px]">
              <div className="w-[24px] h-[45px]">
                <a href="http://">
                  <Image src={CarouselArrowLeft} alt={`Carousel Left Arrow`} />
                </a>
              </div>

              <div className="w-[24px] h-[45px]">
                <a href="http://">
                  <Image
                    src={CarouselArrowRight}
                    alt={`Carousel Right Arrow`}
                  />
                </a>
              </div>
            </div>
          </div>

          {/*Carousel Image Container*/}
          <div className="carousel-image-container w-[219px] h-[75px] flex items-center gap-[10px]">
            <Image src={CarouselImageOne} alt={`Carousel Image`} />
            <Image src={CarouselImageTwo} alt={`Carousel Image`} />
          </div>
        </div>

        {/*Price Card*/}
        <div className="price-card w-[350px] lg:w-[510px] h-[471px] flex flex-col pl-[27px] lg: gap-[25px]">
          <div className="floating-phone w-[157px] h-[30px]">
            <h4 className="text-[20px] leading-8 text-[#252b42] font-[400]">
              Floating Phone
            </h4>
          </div>

          <div className="ratings-reviews w-[222px] h-[24px] flex items-center gap-[10px]">
            <div className="ratings w-[130px] h-[22px] flex items-center gap-[5px]">
              <Image src={starIcon} alt="Star Icon" />
              <Image src={starIcon} alt="Star Icon" />
              <Image src={starIcon} alt="Star Icon" />
              <Image src={starIcon} alt="Star Icon" />
              <Image src={starOutlineIcon} alt="Star Outline Icon" />
            </div>

            <div className="reviews h-[22px] flex items-center">
              <h6 className="text-[14px] leading-6 text-[#737373] font-bold">
                10 Reviews
              </h6>
            </div>
          </div>

          <div className="w-[105px] h-[32px]">
            <h3 className="text-[24px] leading-8 text-[#252b42] font-bold">
              $1,139.33
            </h3>
          </div>

          <div className="w-[163px] h-[24px] flex items-center gap-[5px] lg:pb-[110px]">
            <h6 className="text-[14px] leading-6 text-[#737373] font-bold">
              Availability :
            </h6>

            <h6 className="text-[14px] leading-6 text-[#23A6F0] font-bold">
              In Stock
            </h6>
          </div>

          <div className="w-[271px] h-[100px] lg:hidden">
            <p className="text-[14px] leading-5 text-[#858585] font-[400]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>

          <hr className="horizontal-line w-[283px] lg:w-[445px] border border-[#BDBDBD]" />

          <div className="product-colors w-[150px] h-[30px] flex items-center gap-[10px] pt-[15px] pb-[38px]">
            <ProductColors bgColor={`bg-[#23A6F0]`} />
            <ProductColors bgColor={`bg-[#2DC071]`} />
            <ProductColors bgColor={`bg-[#E77C40]`} />
            <ProductColors bgColor={`bg-[#252B42]`} />
          </div>

          <div className="product-actions w-[305px] h-[44px] flex items-center gap-[10px]">
            <button className="w-[137px] h-[44px] py-[10px] px-[20px] bg-[#23A6F0] rounded-[5px] text-[14px] text-[white] leading-6 font-bold">
              Add To Cart
            </button>

            <ProductActionsBg
              onclick={() => handleClick("")}
              image={ProductCardFavoriteIcon}
              altText={`Product Card Favorite Icon`}
            />
            <ProductActionsBg
              onclick={() => handleClick("/pages/cart")}
              image={ProductCardCartIcon}
              altText={`Product Card Cart Icon`}
            />
            <ProductActionsBg
              onclick={() => handleClick("")}
              image={ProductCardEyeIcon}
              altText={`Product Card Eye Icon`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}