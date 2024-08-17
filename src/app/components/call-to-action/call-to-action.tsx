import "/src/app/globals.css";

export default function CallToAction() {
  return (
    <section
      className="cta-section 
      
      bg-[url('https://res.cloudinary.com/chikadibia/image/upload/v1723673837/e-commerce-project-AltSchool/mobile-cta-background_ie8hox.svg')]

     lg:bg-[url('https://res.cloudinary.com/chikadibia/image/upload/v1723403888/e-commerce-project-AltSchool/cta-background_nk5flw.png')] w-[100%] flex items-center justify-center"
    >
      <div className="w-[358px] h-[712px] lg:w-[1050px] lg:h-[640px] flex items-center justify-center pt-[160px] pb-[112px]">
        <div className="w-[358px] h-[488px] lg:w-[571px] lg:h-[368px] flex items-center flex-col gap-[30px]">
          <div className="w-[209px] h-[24px]">
            <h6 className="text-[14px] text-[#23A6F0] leading-[24px] font-bold text-center">
              Designing Better Experience
            </h6>
          </div>

          <div className="w-[325px] h-[200px] lg:w-[571px] lg:h-[100px]">
            <h2 className="text-[40px] text-[#252B42] leading-[50px] font-bold text-center">
              Problems trying to resolve the conflict between
            </h2>
          </div>

          <div className="w-[280px] h-[60px] lg:w-[447px] lg:h-[40px]">
            <p className="text-[14px] text-[#737373] leading-[20px] font-[400] text-center">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:
            </p>
          </div>

          <div className="w-[86px] h-[32px] px-[3px]">
            <h3 className="text-[24px] text-[#23856D] leading-[32px] font-bold text-center">
              $16.48
            </h3>
          </div>

          <button className="w-[292px] h-[52px] px-[40px] py-[15px] bg-[#23A6F0] rounded-[5px] text-[14px] leading-[22px] text-center font-bold text-[#ffffff]">
            Shop With Us Now!
          </button>
        </div>
      </div>
    </section>
  );
}
