import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useAuth";

export default function Login() {
  const { mutate, isPending, isError, error } = useLogin();
  const [form, setForm] = useState({ email: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <div
      className="min-h-screen bg-[#F7F6F3] flex items-center justify-center p-6"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="w-full max-w-[400px] bg-white border border-[#E2E0DA]/60 rounded-[20px] p-10">
        <div className="w-9 h-9 bg-[#1A1A1A] rounded-[10px] flex items-center justify-center mb-7">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="2" width="6" height="6" rx="1.5" fill="white" />
            <rect
              x="10"
              y="2"
              width="6"
              height="6"
              rx="1.5"
              fill="white"
              opacity="0.5"
            />
            <rect
              x="2"
              y="10"
              width="6"
              height="6"
              rx="1.5"
              fill="white"
              opacity="0.5"
            />
            <rect
              x="10"
              y="10"
              width="6"
              height="6"
              rx="1.5"
              fill="white"
              opacity="0.3"
            />
          </svg>
        </div>

        <h1
          className="text-[26px] text-[#1A1A1A] mb-1 font-normal"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Welcome back
        </h1>
        <p className="text-[13.5px] text-[#888] mb-8">
          Sign in to your account
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-medium text-[#555] uppercase tracking-wide mb-1.5">
              Email
            </label>
            <input
              type="email"
              placeholder="rahul@example.com"
              className="w-full h-11 border border-[#D8D6D0] rounded-[10px] px-3.5 text-sm bg-[#FAFAF8] text-[#1A1A1A] placeholder:text-[#BDBBB5] outline-none focus:border-[#1A1A1A] focus:bg-white transition-colors"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-[11px] font-medium text-[#555] uppercase tracking-wide">
                Password
              </label>
              <span className="text-xs text-[#888] cursor-pointer hover:text-[#1A1A1A] transition-colors">
                Forgot password?
              </span>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-11 border border-[#D8D6D0] rounded-[10px] px-3.5 text-sm bg-[#FAFAF8] text-[#1A1A1A] placeholder:text-[#BDBBB5] outline-none focus:border-[#1A1A1A] focus:bg-white transition-colors"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          {isError && (
            <p className="text-xs text-red-500 text-center">
              {error?.response?.data?.message || "Something went wrong"}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full h-11 bg-[#1A1A1A] hover:bg-[#333] disabled:bg-[#888] text-white rounded-[10px] text-sm font-medium mt-2 transition-colors cursor-pointer active:scale-[0.99]"
          >
            {isPending ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-[#E2E0DA]" />
          <span className="text-xs text-[#AAA]">or</span>
          <div className="flex-1 h-px bg-[#E2E0DA]" />
        </div>

        <button className="w-full h-11 bg-white border border-[#D8D6D0] rounded-[10px] text-sm text-[#333] flex items-center justify-center gap-2 hover:bg-[#FAFAF8] transition-colors cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 18 18">
            <path
              fill="#4285F4"
              d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
            />
            <path
              fill="#34A853"
              d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
            />
            <path
              fill="#FBBC05"
              d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"
            />
            <path
              fill="#EA4335"
              d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z"
            />
          </svg>
          Continue with Google
        </button>

        <p className="text-center mt-6 text-[13px] text-[#888]">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#1A1A1A] font-medium hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
