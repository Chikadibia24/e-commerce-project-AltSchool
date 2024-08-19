"use client";

export default function CartPage() {


  return (
    <section className="cart-section w-[100%] h-[647px] flex items-center justify-center">
      {/*Main Container*/}
      <div className="main-container w-[1161px] h-[638px] flex items-center gap-[56px]">
        {/*Cart Items*/}
        <div className="cart-items w-[654px] h-[638px] flex flex-col items-center gap-[30px] bg-white rounded-[4px]">
          {/*Shopping Cart Header Text*/}
          <div className="shopping-cart-header-text w-[590px] h-[34px]">
            <h2 className="text-[24px] text-[#121517] leading-[34px] font-[600]">
              Shopping Cart
            </h2>
          </div>

          {/* Cart Info Header*/}
          <div className="cart-items-info-header w-[590px] h-[34px]"></div>
        </div>

        
        {/*Cart Order Summary*/}
        <div className="cart-order-summary w-[451px] h-[638px] flex flex-col items-center gap-[30px] bg-white rounded-[4px]">
          {/*Order Summary Header Text*/}
          <div className="order-summary-header-text w-[383px] h-[29px] flex items-center justify-between">
            <h3 className="text-[20px] text-[#121517] leading-7 font-bold">
              Order Summary
            </h3>

            <h3 className="text-[16px] text-[#121517] leading-[30px] font-[400]">
              {`${4} Items`}
            </h3>
          </div>

          <div className="w-[383px] h-[29px]"></div>
        </div>
      </div>
    </section>
  );
}