import Image from "next/image";
import StarIcon from "@/assets/images/cart-star-icon.svg";
import DinningChair from "@/assets/images/mobile-view-dinning-chair.svg";
import NairaSignOne from "@/assets/images/naira-sign.svg";
import NairaSignTwo from "@/assets/images/naira-sign-2.svg";
import DeleteIcon from "@/assets/images/delete-icon.svg";



export default function MobileItemDetailsCard() {

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
    <div className="main-wrapper w-[385px] flex flex-col gap-[15px] pb-[20px] border-b border-b-[#DCDCDC]">
      <div className="main-container w-[356px] h-[103px] flex gap-[22px]">
        <div className="sub-wrapper-1-1 w-[100px] h-[103px]">
          <Image src={DinningChair} alt="Dinning Chair Product" />
        </div>

        <div className="sub-wrapper-1-2 w-[200px] h-[103px] flex flex-col gap-[8px]">
          <div className=" w-[200px] h-[77px] flex flex-col gap-[6px]">
            <p className="text-[18px] text-[#2B2B2B] leading-[23px] font-[500]">
              Graphic Design
            </p>

            <div className="flex w-[180px] gap-[10px]">
              <div className="w-[60px] h-[22px] flex items-center gap-[4px]">
                <Image src={NairaSignOne} alt="Naira Sign" />
                <p className="text-[14px] text-[#121517] leading-[20px] font-[500]">
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

            <p className="text-[16px] text-[#2BA501] leading-[22px] font-[400]">
              In Stock
            </p>

            <div className="w-[170px] h-[15px] flex items-center gap-[6px]">
              <div className="ratings-container flex items-center">
                <Image src={StarIcon} alt="Star rating Icon" />
                <Image src={StarIcon} alt="Star rating Icon" />
                <Image src={StarIcon} alt="Star rating Icon" />
                <Image src={StarIcon} alt="Star rating Icon" />
                <Image src={StarIcon} alt="Star rating Icon" />
              </div>
              <div className="review-container flex items-center">
                <p className="text-[14px] text-[#3A3C3E] leading-[17px] font-[400]">
                  {`${28} Reviews`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[385px] h-[35px] flex items-center justify-between">
        <button
          type="button"
          className="w-[71px] h-[16px] flex items-center gap-[5px]"
        >
          <Image src={DeleteIcon} alt="Delete Icon" />
          <span className="text-[16px] text-[#23A6F0] leading-[19px] font-[700]">
            REMOVE
          </span>
        </button>

        <div className="sub-wrapper-2 w-[142px] h-[32px] flex items-center gap-[10px]">
          <AddMinusButton
            styles={`bg-[#E8EAEC] text-[22px] text-[#3A3C3E]`}
            text={`-`}
          />
          <div className="w-[64px] h-[28px] flex items-center justify-center border border-[#3A3C3E] rounded-[4px]">
            {1}
          </div>
          <AddMinusButton styles={`bg-[#23A6F0] text-[#FCFCFC]`} text={`+`} />
        </div>
      </div>
    </div>
  );
}
