"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateEmail, validatePassword } from "@/app/utils/validation";
import { saveUserToLocalStorage, findUserByEmail } from "@/app/utils/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
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
    router.push("/login");
  };

  return (
    <section className="w-[100%] flex justify-center items-center">
      <form
        onSubmit={handleRegister}
        className="bg-[#fafafa] w-[380px] h-[450px] flex flex-col justify-center items-center gap-[30px] rounded-md shadow-xl hover:shadow-2xl"
      >
        <h2 className="text-[24px] text-[#252B42] leading-[32px] font-bold">
          Register
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
      </form>
    </section>
  );
};

export default Register;
