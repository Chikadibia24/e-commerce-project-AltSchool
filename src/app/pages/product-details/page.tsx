import BreadCrumb from "./components/bread-crumb/bread-crumb";
import Clients from "./components/client-carousel/clients";
import ProductCard from "./components/product-card/product-card";
import ProductDescription from "./components/product-description/product-description";
import ProductsSection from "./components/products/page";
import BreadcrumbRightArrow from "/src/assets/images/breadcrumb-right-arrow.svg";


export default function ProductDetails() {
  return (
    <main className="w-[100%] flex flex-col items-center gap-[10px] bg-[#FAFAFA]">
      <BreadCrumb text1={`text-[#BDBDBD]`} text2={`hidden`} arrow2={`hidden`} />
      <ProductCard />
      <ProductDescription />
      <ProductsSection headingText={`BESTSELLER PRODUCTS`} />
      <Clients />
    </main>
  );
}