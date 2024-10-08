"use client"

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { validateEmail } from "@/app/utils/validation";
import { findUserByEmail } from "@/app/utils/auth";
import Link from "next/link";
import { Suspense } from "react";




const Login = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LoginForm />
    </Suspense>
  );
};



const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }

    const user = findUserByEmail(email);
    if (!user || user.password !== password) {
      setError("Invalid email or password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    if (redirectTo) {
      //alert("Logged In Successfully!");
      router.push(redirectTo);
      // window.location.reload();
      //router.refresh();

      // Force a re-render to apply the styles
        setTimeout(() => {
          window.location.reload();
        }, 1000);
    } else {
      //alert("Logged In Successfully!");
      router.push("/");
      // window.location.reload();
      //router.refresh();

      // Force a re-render to apply the styles
       setTimeout(() => {
         window.location.reload();
       }, 1000);
    }
  };

  return (
    <section className="w-[100%] flex justify-center items-center py-[24px]">
      <form
        onSubmit={handleLogin}
        className="bg-[#fafafa] w-[380px] h-[520px] flex flex-col justify-center items-center gap-[30px] rounded-md shadow-xl hover:shadow-2xl"
      >
        <h2 className="text-[24px] text-[#252B42] leading-[32px] font-bold">
          Login
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
        </div>
        {error && <p>{error}</p>}
        <button
          type="submit"
          className="w-[350px] h-[56px] flex items-center justify-center bg-[#23A6F0] rounded-[5px] text-[#ffffff] text-[20px] leading-6 font-bold"
        >
          Login
        </button>

        <div className="createAccount-ResetPassword flex flex-col gap-[4px]">
          <div className="flex items-center gap-[10px]">
            <p className="text-[13px] text-[#404040] leading-[16px] font-[500]">
              {`Don't have an account?`}
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

export default Login;
