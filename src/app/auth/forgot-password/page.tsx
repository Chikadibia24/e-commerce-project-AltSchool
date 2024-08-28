"use client"

import { useState } from "react";
import { validateEmail, validatePassword } from "@/app/utils/validation";
import { findUserByEmail, updateUserInLocalStorage } from "@/app/utils/auth";
import Link from "next/link";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    newPassword?: string;
  }>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(newPassword);

    if (emailError || passwordError) {
      setErrors({ email: emailError, newPassword: passwordError });
      return;
    }

    const user = findUserByEmail(email);
    if (!user) {
      setErrors({ email: "User not found" });
      return;
    }

    user.password = newPassword;
    updateUserInLocalStorage(user);
    setSuccessMessage("Password updated successfully");
  };

  return (
    <section className="w-[100%] flex justify-center items-center">
      <form
        onSubmit={handleForgotPassword}
        className="bg-[#fafafa] w-[380px] h-[480px] flex flex-col justify-center items-center gap-[30px] rounded-md shadow-xl hover:shadow-2xl"
      >
        <h2 className="text-[24px] text-[#252B42] leading-[32px] font-bold">
          Forgot Password
        </h2>
        <div className="flex flex-col gap-[6px]">
          <label className="text-[18px] text-[#252B42] leading-[32px] font-bold">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[350px] h-[40px] border-b"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="flex flex-col gap-[6px]">
          <label className="text-[18px] text-[#252B42] leading-[32px] font-bold">
            New Password:
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-[350px] h-[40px] border-b"
          />
          {errors.newPassword && <p>{errors.newPassword}</p>}
        </div>

        {successMessage && <p>{successMessage}</p>}

        <button
          type="submit"
          className="w-[350px] h-[56px] flex items-center justify-center bg-[#23A6F0] rounded-[5px] text-[#ffffff] text-[20px] leading-6 font-bold"
        >
          Reset Password
        </button>
        

        <div className="createAccount-ResetPassword flex flex-col gap-[4px]">
          <div className="flex items-center gap-[10px]">
            <p className="text-[13px] text-[#404040] leading-[16px] font-[500]">
              Remembered your password?
            </p>
            <Link href={`/auth/login`}>
              <button
                type="button"
                className="text-[16px] text-[#252B42] leading-[32px] font-bold"
              >
                Login
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-[10px]">
            <p className="text-[13px] text-[#404040] leading-[16px] font-[500]">
              Not sure if you have an account?
            </p>
            <Link href={`/auth/register`}>
              <button
                type="button"
                className="text-[16px] text-[#252B42] leading-[32px] font-bold"
              >
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ForgotPassword;
