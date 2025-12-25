import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const navItems = [
  { path: "/dashboard", label: "Dashboard", icon: "🏠" },
  { path: "/attendance", label: "Attendance", icon: "📝" },
  { path: "/students", label: "Students", icon: "👨‍🎓" },
  { path: "/reports", label: "Reports", icon: "📊" },
  { path: "/settings", label: "Settings", icon: "⚙️" },
];

const Sidebar = () => {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(
    JSON.parse(localStorage.getItem("sidebar-collapsed")) ?? true
  );

  const activeIndex = navItems.findIndex(
    (item) => item.path === location.pathname
  );

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", JSON.stringify(collapsed));
  }, [collapsed]);

  return (
    <aside
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      className={`
        relative hidden md:block
        transition-all duration-300 ease-in-out
        ${collapsed ? "w-20" : "w-64"}
        px-3 py-6
        backdrop-blur-xl
        bg-white/10
        border-r border-white/20
        shadow-xl
      `}
      style={{
        background:
          "linear-gradient(to bottom, rgba(79,70,229,0.6), rgba(126,34,206,0.6), rgba(219,39,119,0.6))",
      }}
    >
      <div
        className="absolute left-1 w-1 h-10 bg-pink-400 rounded-full transition-all duration-300 shadow-lg"
        style={{ top: 96 + activeIndex * 56 }}
      />

      <ul className="space-y-2 mt-12 relative">
        {navItems.map((item) => {
          const active = location.pathname === item.path;

          return (
            <li key={item.path} className="relative group">
              <Link
                to={item.path}
                className={`
                  flex items-center gap-3 p-3 rounded-xl
                  transition-all duration-300
                  ${active ? "bg-white/20 text-white" : "text-white/80 hover:text-white"}
                `}
              >
                {/* Icon */}
                <span
                  className={`
                    text-xl transition-transform duration-300
                    ${active ? "scale-110 animate-pulse" : "group-hover:scale-110"}
                  `}
                >
                  {item.icon}
                </span>

                {/* Label */}
                {!collapsed && (
                  <span className="whitespace-nowrap">{item.label}</span>
                )}
              </Link>

              {collapsed && (
                <span className="
                  absolute left-16 top-1/2 -translate-y-1/2
                  bg-black/70 text-white text-xs
                  px-2 py-1 rounded-md
                  opacity-0 group-hover:opacity-100
                  transition pointer-events-none
                ">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
