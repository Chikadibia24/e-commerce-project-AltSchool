import Image from "next/image";
import ClientOneLogo from "/src/assets/images/client-1.svg";
import ClientTwoLogo from "/src/assets/images/client-2.svg";
import ClientThreeLogo from "/src/assets/images/client-3.svg";
import ClientFourLogo from "/src/assets/images/client-4.svg";
import ClientFiveLogo from "/src/assets/images/client-5.svg";
import ClientSixLogo from "/src/assets/images/client-6.svg";



export default function Clients() {
  
  function ClientsLogo({image}:{image:string}) {
    return (
      <div className="w-[153px] h-[144px] flex items-center justify-center">
        <Image src={image} alt="Client Logo" />
      </div>
    )
  }



  return (
    <section className="clients-carousel-section w-[100%] h-[1173px] lg:h-[175px] flex items-center justify-center">
      {/* Main Wrapper */}
      <div className="main-wrapper w-[414px] h-[952px] lg:w-[1054px] lg:h-[175px] flex flex-col lg:flex-row items-center gap-[60px] lg:gap-[30px] py-[50px]">
        {/* Sub Wrapper - 1 */}
        <ClientsLogo image={ClientOneLogo} />

        {/* Sub Wrapper - 2 */}
        <ClientsLogo image={ClientTwoLogo} />

        {/* Sub Wrapper - 3 */}
        <ClientsLogo image={ClientThreeLogo} />

        {/* Sub Wrapper - 4 */}
        <ClientsLogo image={ClientFourLogo} />

        {/* Sub Wrapper - 5 */}
        <ClientsLogo image={ClientFiveLogo} />

        {/* Sub Wrapper - 6 */}
        <ClientsLogo image={ClientSixLogo} />
      </div>
    </section>
  );
}