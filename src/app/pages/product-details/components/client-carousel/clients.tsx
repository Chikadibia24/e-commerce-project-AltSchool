import Image from "next/image";
import ClientOneLogo from "/src/assets/images/client-1.svg";
import ClientTwoLogo from "/src/assets/images/client-2.svg";
import ClientThreeLogo from "/src/assets/images/client-3.svg";
import ClientFourLogo from "/src/assets/images/client-4.svg";
import ClientFiveLogo from "/src/assets/images/client-5.svg";
import ClientSixLogo from "/src/assets/images/client-6.svg";



export default function Clients() {
  
  function ClientsLogo({ image, style }: { image: string; style: string; }) {
    return (
      <div
        className={`w-[153px] h-[130px] flex items-center justify-center`}
      >
        <Image src={image} alt="Client Logo" className={`${style}`} />
      </div>
    );
  }



  return (
    <section className="clients-carousel-section w-[100%] h-[150px] flex items-center justify-center">
      {/* Main Wrapper */}
      <div className="main-wrapper clients-horizontal-scroll w-[100%] h-[140px] flex justify-center items-center gap-[20px] lg:gap-[30px] py-[10px] px-[10px] lg:px-[10px] lg:py-[50px]">
        {/* Sub Wrapper - 1 */}
        <ClientsLogo image={ClientOneLogo} style={`zoomHooli`} />

        {/* Sub Wrapper - 2 */}
        <ClientsLogo image={ClientTwoLogo} style={`flipLift`} />

        {/* Sub Wrapper - 3 */}
        <ClientsLogo image={ClientThreeLogo} style={`upAndDown`} />

        {/* Sub Wrapper - 4 */}
        <ClientsLogo image={ClientFourLogo} style={`zoomStripe`} />

        {/* Sub Wrapper - 5 */}
        <ClientsLogo image={ClientFiveLogo} style={`flipAmazon`} />

        {/* Sub Wrapper - 6 */}
        <ClientsLogo image={ClientSixLogo} style={`rotate`} />
      </div>
    </section>
  );
}