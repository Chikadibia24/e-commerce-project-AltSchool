import NavbarGreen from "./navbar-green";
//import NavbarLight from "./navbar-light";
import MobileNav from "./mobile-nav";



export default function Header() {
  return (
    <header className="heading w-[100%] h-[110px] lg:h-[initial] flex flex-col items-center gap-[10px]">
      <NavbarGreen />

      {/* <NavbarLight/> */}

      <MobileNav/>
    </header>
  );
}