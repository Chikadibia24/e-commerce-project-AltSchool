import BreadCrumb from "../product-details/components/bread-crumb/bread-crumb";
import ProductsSection from "../product-details/components/products/page";
import CartPage from "./components/cart/cart";

export default function Cart(){
  return (
    <main className="w-[100%] flex flex-col items-center gap-[10px] bg-[#FAFAFA]">
      <BreadCrumb
        text1={`text-[#252B42]`}
        text2={`text-[#BDBDBD]`}
        arrow2={``}
      />
      <CartPage/>
      <ProductsSection headingText={`PRODUCTS RELATED TO ITEMS IN YOUR CART`} />
    </main>
  );
}