import NavbarGreen from "./navbar-green";
import NavbarLight from "./navbar-light";


export default function Header() {
  return (
    <header className="heading h-[139px] w-[414px] lg:max-w-[1439px] lg:min-w-[100%] flex flex-col items-center gap-[10px]">
      <NavbarGreen />

      <NavbarLight/>
    </header>
  );
}