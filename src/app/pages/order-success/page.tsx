// pages/order-success.tsx
"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const OrderSuccess = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "N/A";
  const trackingNumber = searchParams.get("trackingNumber") || "N/A";

  return (
    <section className="w-[100%] flex justify-center items-center py-[24px]">
      <div className="bg-[#fafafa] w-[380px] h-[400px] flex flex-col justify-center items-center gap-[30px] rounded-md shadow-xl hover:shadow-2xl">
        <h1 className="text-[22px] text-[#252B42] leading-[32px] font-bold">
          Order Successful!
        </h1>

        <p className="text-[13px] text-[#404040] leading-[16px] font-[500] text-center">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <p className="text-[13px] text-[#404040] leading-[16px] font-[500]">
          <strong>Order ID:</strong> {orderId}
        </p>

        <p className="text-[13px] text-[#404040] leading-[16px] font-[500]">
          <strong>Tracking Number:</strong> {trackingNumber}
        </p>

        <Link
          href="/"
          className="w-[350px] h-[56px] flex items-center justify-center bg-[#23A6F0] rounded-[5px] text-[#ffffff] text-[20px] leading-6 font-bold"
        >
          Go back to home
        </Link>
      </div>
    </section>
  );
};

export default OrderSuccess;
