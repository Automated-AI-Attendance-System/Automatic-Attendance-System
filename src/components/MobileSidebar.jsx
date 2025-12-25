/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const navItems = [
  { path: "/dashboard", label: "Dashboard", icon: "🏠" },
  { path: "/attendance", label: "Attendance", icon: "📝" },
  { path: "/students", label: "Students", icon: "👨‍🎓" },
  { path: "/reports", label: "Reports", icon: "📊" },
  { path: "/settings", label: "Settings", icon: "⚙️" },
];

const MobileSidebar = ({ open, setOpen }) => {
  const location = useLocation();
  const sidebarRef = useRef(null);
  let startX = 0;

  useEffect(() => {
    const el = sidebarRef.current;
    if (!el) return;

    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const onTouchMove = (e) => {
      const diff = startX - e.touches[0].clientX;
      if (diff > 80) setOpen(false);
    };

    el.addEventListener("touchstart", onTouchStart);
    el.addEventListener("touchmove", onTouchMove);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, [setOpen]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden bg-black/40"
      onClick={() => setOpen(false)}
    >
      <aside
        ref={sidebarRef}
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-64 h-full
          px-5 py-6
          text-white
          shadow-2xl
          animate-slide-in
          overflow-hidden
        "
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #4f46e5, #7e22ce, #db2777)",
          }}
        />

        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold tracking-wide">
              Smart Attendance
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>

          <ul className="space-y-2 font-medium">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`
                      flex items-center gap-3 p-3 rounded-xl transition
                      ${active ? "bg-white/25 shadow-lg" : "hover:bg-white/15"}
                    `}
                  >
                    <span
                      className={`transition-transform ${
                        active ? "scale-110" : ""
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default MobileSidebar;
