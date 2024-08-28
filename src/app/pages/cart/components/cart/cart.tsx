"use client";

import Image from "next/image";
import PayStackLogo from "@/assets/images/paystack-logo.svg";
import MasterCardLogo from "@/assets/images/mastercard-logo.svg";
import VisaCardLogo from "@/assets/images/visacard-logo.svg";

import ItemDetailsCard from "./item-details-card";
import MobileItemDetailsCard from "./mobile-item-details-card";
import OrderSummaryDetails from "./order-summary-details";
import { useRouter, usePathname } from "next/navigation";
import { getCurrentUser } from "@/app/utils/cart";




export default function CartPage() {


  
  const router = useRouter();
  const pathname = usePathname();


  const handleCheckout = () => {
    const user = getCurrentUser();
    if (!user) {
      alert("User not authenticated!");
      router.push(`/auth/login?redirectTo=${encodeURIComponent(pathname)}`);
      // return;
    } else if (user) {
      router.push('/pages/checkout')
    }

    // Proceed with checkout process
    //alert('Proceeding to checkout');
  };

  

  return (
    <section className="cart-section w-[100%] h-[1200px] lg:h-[647px] flex items-center justify-center">
      {/*Main Container*/}
      <div className="main-container w-[388px] h-[1200px] lg:w-[1161px] lg:h-[638px] flex flex-col lg:flex-row items-center lg:gap-[56px]">
        {/*Cart Items*/}
        <div className="cart-items w-[388px] h-[752px] lg:w-[654px] lg:h-[638px] flex flex-col items-center gap-[30px] pt-[30px] bg-white rounded-[4px]">
          {/*Shopping Cart Header Text*/}
          <div className="shopping-cart-header-text w-[388px] lg:w-[590px] h-[34px]">
            <h2 className="text-[24px] text-[#121517] leading-[34px] font-[600]">
              Shopping Cart
            </h2>
          </div>

          {/* Cart Info Header*/}
          <div className="cart-items-info-header-wrapper w-[590px] h-[56px] hidden lg:flex items-center justify-center rounded-tr-[4px] rounded-tl-[4px] bg-[#3B4148]">
            <div className="cart-items-info-header-container w-[542px] h-[23px] flex items-center justify-between pr-[30px]">
              <div className="item-details-container">
                <p className="text-[14px] text-[#fefefe] leading-[23px] font-[600]">
                  Item Details
                </p>
              </div>

              <div className="quantity-price-wrapper flex items-center gap-[110px]">
                <div className="quantity-container">
                  <p className="text-[14px] text-[#fefefe] leading-[23px] font-[600]">
                    Quantity
                  </p>
                </div>

                <div className="price-container">
                  <p className="text-[14px] text-[#fefefe] leading-[23px] font-[600]">
                    Price
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="desktop-cards hidden lg:flex flex-col gap-[25px]">
            <ItemDetailsCard />
            <ItemDetailsCard />
            <ItemDetailsCard />
          </div>

          <div className="mobile-cards flex flex-col gap-[25px] lg:hidden">
            <MobileItemDetailsCard />
            <MobileItemDetailsCard />
            <MobileItemDetailsCard />
          </div>
        </div>

        {/*Cart Order Summary*/}
        <div className="cart-order-summary w-[388px] lg:w-[451px] h-[638px] flex flex-col items-center gap-[30px] pt-[30px] bg-white rounded-[4px]">
          {/*Order Summary Header Text*/}
          <div className="order-summary-header-text w-[385px] h-[29px] flex items-center justify-between">
            <h3 className="text-[20px] text-[#121517] leading-7 font-bold">
              Order Summary
            </h3>

            <h3 className="text-[16px] text-[#121517] leading-[30px] font-[400]">
              {`${4} Items`}
            </h3>
          </div>

          <div className="w-[385px] flex items-center pb-[15px] border-b-[1px] border-b-[#DCDCDC]">
            <OrderSummaryDetails
              height={``}
              text1={`Delivery Charges`}
              text2={`Add your delivery address to checkout to see delivery charges.`}
              text1Style={`text-[#3A3C3E] text-[16px] leading-[23px]`}
              text2Style={`text-[#F56666] text-[10px] leading-[14px] text-right`}
            />
          </div>

          <div className="w-[385px] flex items-center border-b-[1px] border-b-[#DCDCDC]">
            <OrderSummaryDetails
              height={``}
              text1={`Subtotal`}
              text2={`${String.fromCharCode(8358)} 26,500`}
              text1Style={`text-[#3A3C3E] text-[16px] leading-[23px]`}
              text2Style={`text-[#3A3C3E] text-[15px] leading-[22px] text-right`}
            />
          </div>

          <div className="w-[385px] flex items-center border-b-[1px] border-b-[#DCDCDC]">
            <OrderSummaryDetails
              height={``}
              text1={`Total`}
              text2={`${String.fromCharCode(8358)} 26,500`}
              text1Style={`text-[#121517] text-[20px] leading-[28px]`}
              text2Style={`text-[#121517] text-[20px] leading-[28px] text-right`}
            />
          </div>

          <div className="w-[385px] flex items-center border-b-[1px] border-b-[#DCDCDC]">
            <OrderSummaryDetails
              height={``}
              text1={``}
              text2={`Excluding Delivery Charges`}
              text1Style={``}
              text2Style={`text-[#F56666] text-[10px] leading-[14px] text-right`}
            />
          </div>

          <div className="w-[385px] h-[124px] flex flex-col gap-[30px]">
            <button
              type="button"
              onClick={handleCheckout}
              className="w-[385px] h-[56px] flex items-center justify-center bg-[#23A6F0] rounded-[5px] text-[#ffffff] text-[16px] leading-6 font-bold"
            >
              Proceed to Checkout
            </button>

            <div className="w-[385px] h-[36px] flex flex-col justify-end border-t-[1px] border-t-[#DCDCDC]">
              <div className="w-[151px] h-[12px] hidden lg:flex gap-[16px]">
                <Image src={PayStackLogo} alt="PayStack Logo" />
                <Image src={MasterCardLogo} alt="MasterCard Logo" />
                <Image src={VisaCardLogo} alt="VisaCard Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}