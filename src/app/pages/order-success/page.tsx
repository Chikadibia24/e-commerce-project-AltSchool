import React, { Suspense } from "react";
import OrderSuccess from "./component/orderSuccess";



const OrderSuccessPage = () => {

  return (
    <section className="w-[100%] flex justify-center items-center py-[24px]">
      <Suspense fallback={<div>Loading order details...</div>}>
        <OrderSuccess />
      </Suspense>
    </section>
  );
};

export default OrderSuccessPage;
