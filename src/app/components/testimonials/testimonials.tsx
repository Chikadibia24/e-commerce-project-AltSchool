import Image from "next/image";
import testimonialIcon from "/src/assets/images/testimonial-icon.svg";
import starIcon from "/src/assets/images/star-icon.svg";
import starOutlineIcon from "/src/assets/images/star-icon-outline.svg";
import testimonialImage1 from "/src/assets/images/testimonial-image-1.svg";
import testimonialImage2 from "/src/assets/images/testimonial-image-2.svg";
import testimonialImage3 from "/src/assets/images/testimonial-image-3.svg";
import testimonialImage4 from "/src/assets/images/testimonial-image-4.svg";
import testimonialImage5 from "/src/assets/images/testimonial-image-5.svg";
import testimonialImage6 from "/src/assets/images/testimonial-image-6.svg";
import testimonialImage7 from "/src/assets/images/testimonial-image-7.svg";
import testimonialImage8 from "/src/assets/images/testimonial-image-8.svg";
import testimonialImage9 from "/src/assets/images/testimonial-image-9.svg";


export default function Testimonials() {
  return (
    <section className="testimonial-section w-[100%] flex items-start justify-center">
      <div className="main-wrapper w-[370px] h-[911px] lg:w-[1128px] lg:h-[600px] px-[38px] flex flex-col justify-center lg:flex-row items-center lg:justify-between">
        <div className="review-wrapper w-[351px] h-[444px] lg:w-[438px] lg:h-[388px] flex flex-col items-center gap-[28px]">
          <div className="w-[181px] h-[64px] lg:w-[287px] lg:h-[32px]">
            <h3 className="text-[24px] text-[#252B42] leading-[32px] font-bold text-center">
              What they say about us
            </h3>
          </div>

          <div className="w-[291px] h-[292px] lg:w-[442px] lg:h-[268px] flex flex-col items-center gap-[20px]">
            <div className="w-[90px] h-[90px]">
              <Image src={testimonialIcon} alt="Testimonial Icon" />
            </div>

            <div className="w-[130px] h-[22px] flex items-center gap-[5px]">
              <Image src={starIcon} alt="Star Icon" />
              <Image src={starIcon} alt="Star Icon" />
              <Image src={starIcon} alt="Star Icon" />
              <Image src={starIcon} alt="Star Icon" />
              <Image src={starOutlineIcon} alt="Star Outline Icon" />
            </div>

            <div className="w-[245px] h-[72px] lg:w-[451px] lg:h-[48px]">
              <h6 className="text-[14px] text-[#737373] leading-[24px] font-bold text-center">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </h6>
            </div>

            <div className="w-[93px] h-[48px]">
              <a
                href=""
                className="text-[14px] text-[#23A6F0] leading-[24px] font-bold text-center"
              >
                Chika Ogbu
              </a>
              <h6 className="text-[14px] text-[#252B42] leading-[24px] font-bold text-center">
                Web Developer
              </h6>
            </div>
          </div>
        </div>

        <div className="photo-gallery-wrapper w-[364px] h-[360px] lg:w-[464px] lg:h-[464px] grid grid-cols-3 justify-items-center content-center gap-[10px]">
          <div className="w-[112px] h-[112px] lg:w-[145px] lg:h-[145px]">
            <Image src={testimonialImage1} alt="Testimonial Image" />
          </div>

          <div className="w-[112px] h-[112px] lg:w-[145px] lg:h-[145px]">
            <Image src={testimonialImage2} alt="Testimonial Image" />
          </div>

          <div className="w-[112px] h-[112px] lg:w-[145px] lg:h-[145px]">
            <Image src={testimonialImage3} alt="Testimonial Image" />
          </div>

          <div className="w-[112px] h-[112px] lg:w-[145px] lg:h-[145px]">
            <Image src={testimonialImage4} alt="Testimonial Image" />
          </div>

          <div className="w-[112px] h-[112px] lg:w-[145px] lg:h-[145px]">
            <Image src={testimonialImage5} alt="Testimonial Image" />
          </div>

          <div className="w-[112px] h-[112px] lg:w-[145px] lg:h-[145px]">
            <Image src={testimonialImage6} alt="Testimonial Image" />
          </div>

          <div className="w-[112px] h-[112px] lg:w-[145px] lg:h-[145px]">
            <Image src={testimonialImage7} alt="Testimonial Image" />
          </div>

          <div className="w-[112px] h-[112px] lg:w-[145px] lg:h-[145px]">
            <Image src={testimonialImage8} alt="Testimonial Image" />
          </div>

          <div className="w-[112px] h-[112px] lg:w-[145px] lg:h-[145px]">
            <Image src={testimonialImage9} alt="Testimonial Image" />
          </div>
        </div>
      </div>
    </section>
  );
}
