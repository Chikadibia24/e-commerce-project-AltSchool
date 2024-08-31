import NavbarGreen from "./navbar-green";
import NavbarLight from "./navbar-light";
import MobileNav from "./mobile-nav";



export default function Header() {
  return (
    <header className="heading h-[139px] w-[100%] flex flex-col items-center gap-[10px]">
      <NavbarGreen />

      <NavbarLight/>

      <MobileNav/>
    </header>
  );
}