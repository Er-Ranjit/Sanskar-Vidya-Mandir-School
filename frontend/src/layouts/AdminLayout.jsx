import { Outlet } from "react-router-dom";

import AdminSidebar from "../components/layout/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex bg-slate-100">

      <AdminSidebar />

      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;