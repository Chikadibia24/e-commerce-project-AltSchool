import Image from "next/image";
import DescriptionImage from "/src/assets/images/description-image.svg";


export default function ProductDescription() {

  function Navlinks({ width, text, }: {width: string; text: string; }) {
    return (
      <div className={`${width} h-[72px] p-[24px] flex items-center justify-center`}>
        <a
          href="http://"
          className="text-[14px] leading-6 font-bold text-[#737373]"
        >
          {text}
        </a>
      </div>
    );
  }


  function DescriptionText({ styles, text }: { styles: string; text: string; }) {
    return (
      <div className={`first-para-text-container h-[60px] ${styles}`}>
        <p className="text-[14px] leading-5 text-[#737373] font-[400]">
          {text}
        </p>
      </div>
    );
  }



  return (
    <section className="products-desc-section w-[100%] h-[572px] hidden lg:flex flex-col items-center justify-center">
      {/* Navigation Pane*/}
      <nav className="nav-pane w-[1051px] h-[91px] flex items-center justify-center gap-[10px]">
        <Navlinks width={`w-[134px]`} text={`Description`} />

        <Navlinks width={`w-[220px]`} text={`Additional Information`} />

        <Navlinks width={`w-[138px]`} text={`Review ${0}`} />
      </nav>

      {/* Description */}
      <div className="description-container w-[1056px] h-[392px] pt-[24px] pb-[48px] flex gap-[30px]">
        <div className="wrapper-1 w-[599px] h-[327px] flex flex-col gap-[30px]">
          <div className="h3-text-container w-[304px] h-[32px]">
            <h3 className="text-[24px] leading-8 text-[#252B42] font-bold">
              the quick fox jumps over
            </h3>
          </div>

          <DescriptionText
            styles={`w-[513px]`}
            text={`Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.`}
          />

          <DescriptionText
            styles={`w-[513px] border-l-[3px] border-[#23856D]`}
            text={`Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.`}
          />

          <DescriptionText
            styles={`w-[513px]`}
            text={`Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.`}
          />
        </div>

        <div className="wrapper-2 w-[427px] h-[392px] ">
          <Image src={DescriptionImage} alt="Description Image"/>
        </div>
      </div>
    </section>
  );
}