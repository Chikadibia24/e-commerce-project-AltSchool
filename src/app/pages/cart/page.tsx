"use client"

import BreadCrumb from "../product-details/components/bread-crumb/bread-crumb";
import ProductsSection from "../product-details/components/products/products-section";
import CartPage from "./components/cart/cart";
import { useEffect, useState } from "react";
import { getCurrentUser } from "@/app/utils/cart";
import { useRouter, usePathname } from "next/navigation";





export default function Cart() {

  const router = useRouter();
  const pathname = usePathname();
  const user = getCurrentUser();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const checkUserLoginStatus = (): boolean => {
    return !!user; // Returns true if user exists in local storage
  };

  useEffect(() => {
    const loggedIn = checkUserLoginStatus();
    setIsLoggedIn(loggedIn);
  }, []);


  // ${isLoggedIn ? "flex" : "hidden"}

  // const redirectToLogin = () => {
  //   if (!isLoggedIn) {
  //           router.push(`/auth/login?redirectTo=${encodeURIComponent(pathname)}`);
  //         }
  // }




  return (
    <main
      // onLoad={() => redirectToLogin()}
      className={`w-[100%] flex-col items-center gap-[10px] bg-[#FAFAFA] ${
        isLoggedIn ? "flex" : "hidden"
      }`}
    >
      <BreadCrumb
        text1={`text-[#252B42]`}
        text2={`text-[#BDBDBD]`}
        arrow2={``}
      />
      <CartPage />
      <ProductsSection headingText={`PRODUCTS RELATED TO ITEMS IN YOUR CART`} />
    </main>
  );
}
