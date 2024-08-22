import Image from "next/image";
import StarIcon from "@/assets/images/cart-star-icon.svg";
import DinningChair from "@/assets/images/dinning-chair-product.svg";
import NairaSignOne from "@/assets/images/naira-sign.svg";
import NairaSignTwo from "@/assets/images/naira-sign-2.svg";
import DeleteIcon from "@/assets/images/delete-icon.svg";



export default function ItemDetailsCard() {
  const AddMinusButton = ({
    text,
    styles,
  }: {
    text: string;
    styles: string;
  }) => {
    return (
      <button
        type="button"
        className={`w-[28px] h-[28px] flex items-center justify-center rounded-full ${styles}`}
      >
        {text}
      </button>
    );
  };

  return (
    <div className="main-wrapper w-[566px] flex flex-col gap-[15px] pb-[10px] border-b border-b-[#DCDCDC]">
      <div className="main-container flex items-center gap-[40px]">
        <div className="sub-wrapper-1 w-[244px] h-[75px] flex items-center gap-[16px]">
          <div className="sub-wrapper-1-1 w-[100px] h-[75px]">
            <Image src={DinningChair} alt="Dinning Chair Product" />
          </div>

          <div className="sub-wrapper-1-2 w-[128px] h-[54px]">
            <div className="w-[128px] h-[33px] flex flex-col gap-[4px]">
              <p className="text-[12px] text-[#2B2B2B] leading-[15px] font-[500]">
                Graphic Design
              </p>
              <p className="text-[10px] text-[#2BA501] leading-[14px] font-[400]">
                In Stock
              </p>
            </div>
            <div className="w-[128px] h-[15px] flex items-center gap-[6px]">
              <div className="ratings-container flex items-center">
                <Image src={StarIcon} alt="Star rating Icon" />
                <Image src={StarIcon} alt="Star rating Icon" />
                <Image src={StarIcon} alt="Star rating Icon" />
                <Image src={StarIcon} alt="Star rating Icon" />
                <Image src={StarIcon} alt="Star rating Icon" />
              </div>
              <div className="review-container flex items-center">
                <p className="text-[8px] text-[#3A3C3E] leading-[10px] font-[400]">
                  {`${28} Reviews`}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sub-wrapper-2 w-[152px] h-[32px] flex items-center gap-[10px]">
          <AddMinusButton
            styles={`bg-[#E8EAEC] text-[22px] text-[#3A3C3E]`}
            text={`-`}
          />
          <div className="w-[64px] h-[28px] flex items-center justify-center border border-[#3A3C3E] rounded-[4px]">
            {1}
          </div>
          <AddMinusButton styles={`bg-[#23A6F0] text-[#FCFCFC]`} text={`+`} />
        </div>

        <div className="sub-wrapper-3 w-[90px] h-[47px]">
          <div className="w-[60px] h-[22px] flex items-center gap-[4px]">
            <Image src={NairaSignOne} alt="Naira Sign" />
            <p className="text-[16px] text-[#121517] leading-[22px] font-[500]">
              3,000
            </p>
          </div>
          <div className="w-[90px] h-[24px] flex items-center gap-[4px]">
            <Image src={NairaSignTwo} alt="Naira Sign" />
            <p className="text-[10px] text-[#6C6C6C] leading-[14px] font-[400]">
              3,000
            </p>
            <p className="text-[10px] text-[#6C6C6C] leading-[14px] font-[400]">
              {`x`}
            </p>
            <p className="text-[10px] text-[#6C6C6C] leading-[14px] font-[400]">
              {`${1} item`}
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="w-[71px] h-[16px] flex items-start gap-[5px]"
      >
        <Image src={DeleteIcon} alt="Delete Icon" />
        <span className="text-[12px] text-[#23A6F0] leading-[14px] font-[700]">
          REMOVE
        </span>
      </button>
    </div>
  );
};
