"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid"; // Generate unique IDs
import { getCurrentUser } from "../../../utils/cart";

const CheckoutForm = () => {

  const router = useRouter();

  //const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Generate a dummy order ID and tracking number
    const orderId = uuidv4();
    const trackingNumber = Math.floor(
      100000000 + Math.random() * 900000000
    ).toString();

    // Redirect to the success page with the order details
    const url = `/pages/order-success?orderId=${orderId}&trackingNumber=${trackingNumber}`;
    const user = getCurrentUser();
    if (!user) {
      router.push("/auth/login");
      // return;
    } else if (user) {
      //const url = `/pages/order-success?orderId=${orderId}&trackingNumber=${trackingNumber}`;
      router.push(url);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#fafafa] w-[380px] h-[850px] flex flex-col justify-center items-center gap-[30px] rounded-md shadow-xl hover:shadow-2xl"
    >
      <h2 className="text-[22px] text-[#252B42] leading-[32px] font-bold">
        Please fill in your details below
      </h2>

      <div className="flex flex-col gap-[6px]">
        <label className="text-[18px] text-[#252B42] leading-[32px] font-bold">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-[350px] h-[40px] border-b"
        />
      </div>
      <div className="flex flex-col gap-[6px]">
        <label className="text-[18px] text-[#252B42] leading-[32px] font-bold">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-[350px] h-[40px] border-b"
        />
      </div>
      <div className="flex flex-col gap-[6px]">
        <label className="text-[18px] text-[#252B42] leading-[32px] font-bold">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-[350px] h-[40px] border-b"
        />
      </div>
      <div className="flex flex-col gap-[6px]">
        <label className="text-[18px] text-[#252B42] leading-[32px] font-bold">
          Card Number
        </label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          required
          className="w-[350px] h-[40px] border-b"
        />
      </div>
      <div className="flex flex-col gap-[6px]">
        <label className="text-[18px] text-[#252B42] leading-[32px] font-bold">
          Expiry Date
        </label>
        <input
          type="text"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          required
          className="w-[350px] h-[40px] border-b"
        />
      </div>
      <div className="flex flex-col gap-[6px]">
        <label className="text-[18px] text-[#252B42] leading-[32px] font-bold">
          CVV
        </label>
        <input
          type="text"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          required
          className="w-[350px] h-[40px] border-b"
        />
      </div>
      <button
        type="submit"
        className="w-[350px] h-[56px] flex items-center justify-center bg-[#23A6F0] rounded-[5px] text-[#ffffff] text-[20px] leading-6 font-bold"
      >
        Submit Order
      </button>
    </form>
  );
};

export default CheckoutForm;
