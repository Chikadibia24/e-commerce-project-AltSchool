import BlogCard from "./blog-card";

export default function Blog() {
  return (
    <section className="blog-section w-[100%] flex justify-center">
      {/* Wrapper Main */}
      <div className="wrapper-main w-[414px] h-[2252px] lg:w-[1120px] lg:h-[900px] flex flex-col justify-center items-center gap-[80px]">
        {/* Wrapper Sub Main - 1 */}
        <div className="wrapper-sub-main-1 w-[239px] h-[134px] lg:w-[692px] lg:h-[84px] flex flex-col items-center gap-[10px]">
          <h6 className="text-[14px] text-[#23A6F0] leading-[24px] font-bold">
            Practice Advice
          </h6>

          <h2 className="text-[40px] text-[#252B42] leading-[50px] font-bold text-center">
            Featured Posts
          </h2>
        </div>

        {/* Wrapper Sub Main - 2 */}
        <div className="wrapper-sub-main-2 w-[329px] h-[1878px] lg:w-[1110px] lg:h-[606px] flex flex-col lg:flex-row items-center justify-center gap-[30px]">
          <BlogCard
            bgImage={`bg-[url('https://res.cloudinary.com/chikadibia/image/upload/v1723510280/e-commerce-project-AltSchool/blog-card-bg-1_olmyrz.svg')]`}
          />
          <BlogCard
            bgImage={`bg-[url('https://res.cloudinary.com/chikadibia/image/upload/v1723510341/e-commerce-project-AltSchool/blog-card-bg-2_hpppdk.svg')]`}
          />
          <BlogCard
            bgImage={`bg-[url('https://res.cloudinary.com/chikadibia/image/upload/v1723510444/e-commerce-project-AltSchool/blog-card-bg-3_w23hwt.svg')]`}
          />
        </div>
      </div>
    </section>
  );
}