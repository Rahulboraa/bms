import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMe, useLogout } from "../hooks/useAuth";

export default function Dashboard() {
  const { data: user, isLoading, isError } = useMe();
  const logoutMutation = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [isError]);

  if (isLoading)
    return (
      <div className="min-h-screen bg-[#F7F6F3] flex items-center justify-center">
        <p
          className="text-[#888]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Loading...
        </p>
      </div>
    );

  if (!user) return null;

  return (
    <div
      className="min-h-screen bg-[#F7F6F3] p-6"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-white font-medium text-sm">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-[#1A1A1A] font-medium">{user.name}</h1>
              <p className="text-[#888] text-sm">{user.email}</p>
            </div>
          </div>
          <button
            onClick={() => logoutMutation.mutate()}
            disabled={logoutMutation.isPending}
            className="text-sm text-[#888] border border-[#E2E0DA] px-4 py-2 rounded-[10px] hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors cursor-pointer"
          >
            {logoutMutation.isPending ? "Logging out..." : "Logout"}
          </button>
        </div>

        <div className="bg-white border border-[#E2E0DA] rounded-[20px] p-8">
          <h2
            className="text-[20px] text-[#1A1A1A] mb-6 font-normal"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Welcome back, {user.name}! 👋
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-[#F0EEE8]">
              <span className="text-[#888] text-sm">Name</span>
              <span className="text-[#1A1A1A] text-sm">{user.name}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-[#F0EEE8]">
              <span className="text-[#888] text-sm">Email</span>
              <span className="text-[#1A1A1A] text-sm">{user.email}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-[#F0EEE8]">
              <span className="text-[#888] text-sm">Role</span>
              <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#F0EEE8] text-[#555]">
                {user.role}
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-[#888] text-sm">Member since</span>
              <span className="text-[#1A1A1A] text-sm">
                {new Date(user.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        <p className="text-center text-[#CCC] text-xs">
          Built with MERN stack 🔥
        </p>
      </div>
    </div>
  );
}
