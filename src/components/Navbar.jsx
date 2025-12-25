import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <nav
        className="
          w-full
          px-4 sm:px-6 py-4
          flex items-center justify-between
          backdrop-blur-xl
          bg-white/10
          border-b border-white/20
          text-white
          shadow-lg
          nav-glow
        "
        style={{
          background:
            "linear-gradient(to right, rgba(79,70,229,0.6), rgba(126,34,206,0.6), rgba(219,39,119,0.6))",
        }}
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl focus:outline-none hover:scale-110 transition"
            aria-label="Open menu"
          >
            ☰
          </button>

          <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
            Smart Attendance
          </h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-4">
          {user && (
            <span className="hidden sm:block text-sm opacity-90">
              Hello, {user.name}{" "}
              <span className="wave-hand">👋</span>
            </span>
          )}

          <button
            onClick={handleLogout}
            className="
              bg-white/90
              hover:bg-white
              text-indigo-700
              px-4 py-1
              rounded-full
              text-sm font-medium
              transition-all
              shadow
              hover:shadow-xl
              hover:-translate-y-0.5
              hover:scale-105
              active:scale-95
            "
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <MobileSidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
