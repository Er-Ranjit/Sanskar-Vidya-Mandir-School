import { Bell, Search, UserCircle } from "lucide-react";

const TopNavbar = () => {
  return (
    <div className="bg-white shadow rounded-2xl p-4 mb-6 flex items-center justify-between">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome Back, Admin 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="hidden md:flex items-center border rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none ml-2"
          />
        </div>

        {/* Notification */}
        <button className="relative">
          <Bell size={24} />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Admin */}
        <div className="flex items-center gap-2">
          <UserCircle size={40} className="text-blue-600" />

          <div className="hidden md:block">
            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-gray-500 text-sm">
              Administrator
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default TopNavbar;