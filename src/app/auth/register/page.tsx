"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateEmail, validatePassword } from "@/app/utils/validation";
import { saveUserToLocalStorage, findUserByEmail } from "@/app/utils/auth";
import Link from "next/link";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: any; password?: any }>(
    {}
  );
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    if (findUserByEmail(email)) {
      setErrors({ email: "User already exists" });
      return;
    }

    saveUserToLocalStorage({ email, password });
    router.push("/auth/login");
  };

  return (
    <section className="w-[100%] flex justify-center items-center py-[24px]">
      <form
        onSubmit={handleRegister}
        className="bg-[#fafafa] w-[380px] h-[520px] flex flex-col justify-center items-center gap-[30px] rounded-md shadow-xl hover:shadow-2xl"
      >
        <h2 className="text-[24px] text-[#252B42] leading-[32px] font-bold">
          Create Account
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
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[350px] h-[40px] border-b"
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="w-[350px] h-[56px] flex items-center justify-center bg-[#23A6F0] rounded-[5px] text-[#ffffff] text-[20px] leading-6 font-bold"
        >
          Register
        </button>

        <div className="login-resetPassword flex flex-col gap-[4px]">
          <div className="flex items-center gap-[10px]">
            <p className="text-[13px] text-[#404040] leading-[16px] font-[500]">
              Already have an account?
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
              Forgot Your password?
            </p>
            <Link href={`/auth/forgot-password`}>
              <button
                type="button"
                className="text-[16px] text-[#252B42] leading-[32px] font-bold"
              >
                Reset Password
              </button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
