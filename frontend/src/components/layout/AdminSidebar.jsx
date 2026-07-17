import {
  LayoutDashboard,
  GraduationCap,
  Users,
  FileText,
  Image,
  CalendarDays,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom"; // ✅ Added useNavigate
import toast from "react-hot-toast"; // For logout confirmation message

const menus = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    path: "/admin",
  },
  {
    name: "Students",
    icon: <GraduationCap size={20} />,
    path: "/admin/students",
  },
  {
    name: "Teachers",
    icon: <Users size={20} />,
    path: "/admin/teachers",
  },
  {
    name: "Admissions",
    icon: <FileText size={20} />,
    path: "/admin/admissions",
  },
  {
    name: "Gallery",
    icon: <Image size={20} />,
    path: "/admin/gallery",
  },
  {
    name: "Events",
    icon: <CalendarDays size={20} />,
    path: "/admin/events",
  },
  {
    name: "Notices",
    icon: <Bell size={20} />,
    path: "/admin/notices",
  },
  {
    name: "Settings",
    icon: <Settings size={20} />,
    path: "/admin/settings",
  },
];

const AdminSidebar = () => {
  const navigate = useNavigate(); // ✅ Initialized router navigate hook

  // ✅ Added Safe Logout Handler Logic
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    
    toast.success("Logged out successfully");
    
    // Redirect to base or login path securely
    navigate("/login", { replace: true });
  };

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">

        <h1 className="text-2xl font-bold text-center">
          Sanskar Vidya Mandir
        </h1>

        <p className="text-center text-sm text-slate-400 mt-2">
          School Management
        </p>

      </div>

      {/* Menu */}
      <div className="flex-1 py-6">

        {menus.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.path}
            end={menu.path === "/admin"}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 transition ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {menu.icon}

            <span>{menu.name}</span>
          </NavLink>
        ))}

      </div>

      {/* Logout */}
      <div className="border-t border-slate-700 p-6">

        {/* ✅ Bound the handleLogout method to button element */}
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-400 hover:text-red-500 w-full text-left"
        >

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
};

export default AdminSidebar;
