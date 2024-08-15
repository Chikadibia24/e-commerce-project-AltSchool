

export default function HeroSection() {
  return (
    <section className="hero-section w-[414px] lg:w-[1440px] flex justify-center bg-gray-950">
      <div className="parent-container w-[333px] h-[1245px] lg:w-[1146px] lg:h-[776px] flex items-center justify-center py-[80px]">
        <div className="parent-sub-container w-[333px] h-[1245px] lg:w-[1146px] lg:h-[616px] flex flex-col lg:flex-row lg:items-center gap-[15px]">
          {/*Card-1*/}
          <div
            className="card-1 w-[332px] h-[300px] lg:w-[452px] lg:h-[616px] 
          
          bg-[url('https://res.cloudinary.com/chikadibia/image/upload/v1723659302/e-commerce-project-AltSchool/mobile-hero-section-card-bg-1_fr6mug.svg')]

          lg:bg-[url('https://res.cloudinary.com/chikadibia/image/upload/v1723493034/e-commerce-project-AltSchool/hero-section-card-bg-1_pmzbeq.svg')]"
          >
            <div className="w-[452px] h-[156px] flex flex-col gap-[5px] p-[24px]">
              <h6 className="text-[14px] text-[#2DC071] leading-[24px] font-bold">
                5 Items
              </h6>

              <h2 className="text-[24px] lg:text-[40px] text-[#252B42] leading-[32px] lg:leading-[50px] font-bold">
                FURNITURE
              </h2>

              <h6 className="text-[14px] text-[#252B42] leading-[24px] font-bold">
                Read More
              </h6>
            </div>
          </div>

          {/*Card-2-3-4-main-container*/}
          <div className="card-2-3-4-parent-container w-[332px] lg:w-[680px] lg:h-[616px] flex flex-col gap-[15px]">
            {/*Card-2*/}
            <div
              className="card-2 w-[332px] h-[300px] lg:w-[680px] lg:h-[300px] 

            bg-[url('https://res.cloudinary.com/chikadibia/image/upload/v1723659705/e-commerce-project-AltSchool/mobile-hero-section-card-bg-2_wcqne0.svg')]
            
            lg:bg-[url('https://res.cloudinary.com/chikadibia/image/upload/v1723494506/e-commerce-project-AltSchool/hero-section-card-bg-2_a7sohr.svg')]"
            >
              <div className="w-[680px] h-[138px] flex flex-col gap-[5px] p-[24px]">
                <h6 className="text-[14px] text-[#2DC071] leading-[24px] font-bold">
                  5 Items
                </h6>

                <h3 className="text-[24px] text-[#252B42] leading-[32px] font-bold">
                  FURNITURE
                </h3>

                <h6 className="text-[14px] text-[#252B42] leading-[24px] font-bold">
                  Read More
                </h6>
              </div>
            </div>

            {/*Card-3-4-container*/}
            <div className="card-3-4-container w-[680px] lg:h-[300px] flex flex-col lg:flex-row gap-[15px]">
              {/*Card-3*/}
              <div
                className="card-3 w-[332px] h-[300px] 
              
              bg-[url('https://res.cloudinary.com/chikadibia/image/upload/v1723495858/e-commerce-project-AltSchool/hero-section-card-bg-3_zv8wmp.svg')]
              
              lg:bg-[url('https://res.cloudinary.com/chikadibia/image/upload/v1723495858/e-commerce-project-AltSchool/hero-section-card-bg-3_zv8wmp.svg')]"
              >
                <div className="w-[332px] h-[138px] flex flex-col gap-[5px] p-[24px]">
                  <h6 className="text-[14px] text-[#2DC071] leading-[24px] font-bold">
                    5 Items
                  </h6>

                  <h3 className="text-[24px] text-[#252B42] leading-[32px] font-bold">
                    FURNITURE
                  </h3>

                  <h6 className="text-[14px] text-[#252B42] leading-[24px] font-bold">
                    Read More
                  </h6>
                </div>
              </div>

              {/*Card-4*/}
              <div
                className="card-4 w-[332px] h-[300px] 
              
              bg-[url('https://res.cloudinary.com/chikadibia/image/upload/v1723495919/e-commerce-project-AltSchool/hero-section-card-bg-4_ffdcf0.svg')]
              
              lg:bg-[url('https://res.cloudinary.com/chikadibia/image/upload/v1723495919/e-commerce-project-AltSchool/hero-section-card-bg-4_ffdcf0.svg')]"
              >
                <div className="w-[332px] h-[138px] flex flex-col gap-[5px] p-[24px]">
                  <h6 className="text-[14px] text-[#2DC071] leading-[24px] font-bold">
                    5 Items
                  </h6>

                  <h3 className="text-[24px] text-[#252B42] leading-[32px] font-bold">
                    FURNITURE
                  </h3>

                  <h6 className="text-[14px] text-[#252B42] leading-[24px] font-bold">
                    Read More
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}