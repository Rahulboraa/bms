import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../hooks/useAuth";

export default function Register() {
  const { mutate, isPending, isError, error } = useRegister();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

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
          Create account
        </h1>
        <p className="text-[13.5px] text-[#888] mb-8">
          Start your journey today
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-medium text-[#555] uppercase tracking-wide mb-1.5">
              Full Name
            </label>
            <input
              placeholder="Rahul Bora"
              className="w-full h-11 border border-[#D8D6D0] rounded-[10px] px-3.5 text-sm bg-[#FAFAF8] text-[#1A1A1A] placeholder:text-[#BDBBB5] outline-none focus:border-[#1A1A1A] focus:bg-white transition-colors"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

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
            <label className="block text-[11px] font-medium text-[#555] uppercase tracking-wide mb-1.5">
              Password
            </label>
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
            {isPending ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center mt-6 text-[13px] text-[#888]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#1A1A1A] font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
