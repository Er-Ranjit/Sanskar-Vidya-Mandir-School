import { useEffect, useState } from "react";
import axios from "../../api/axios";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardList,
  FaBell,
} from "react-icons/fa";

import TopNavbar from "../../components/dashboard/TopNavbar";
import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatCard from "../../components/dashboard/StatCard";
import DashboardChart from "../../components/dashboard/DashboardChart";
import RecentAdmissions from "../../components/dashboard/RecentAdmissions";
import RecentContacts from "../../components/dashboard/RecentContacts";

const Dashboard = () => {

  const [dashboard, setDashboard] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalAdmissions: 0,
    totalNotices: 0,
    recentAdmissions: [],
    recentContacts: [],
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {

      const res = await axios.get("/dashboard");

      setDashboard(res.data.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <TopNavbar />

      <WelcomeCard />

      {/* Statistics */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">

        <StatCard
          title="Students"
          value={dashboard.totalStudents}
          icon={<FaUserGraduate />}
          color="bg-gradient-to-r from-blue-600 to-blue-800"
        />

        <StatCard
          title="Teachers"
          value={dashboard.totalTeachers}
          icon={<FaChalkboardTeacher />}
          color="bg-gradient-to-r from-green-500 to-green-700"
        />

        <StatCard
          title="Admissions"
          value={dashboard.totalAdmissions}
          icon={<FaClipboardList />}
          color="bg-gradient-to-r from-orange-500 to-orange-700"
        />

        <StatCard
          title="Notices"
          value={dashboard.totalNotices}
          icon={<FaBell />}
          color="bg-gradient-to-r from-red-500 to-red-700"
        />

      </div>

      {/* Chart */}

      <DashboardChart
        stats={{
          students: dashboard.totalStudents,
          teachers: dashboard.totalTeachers,
          admissions: dashboard.totalAdmissions,
          notices: dashboard.totalNotices,
          events: 0,
        }}
      />

      {/* Recent Data */}

      <div className="grid lg:grid-cols-2 gap-8 mt-8">

        <RecentAdmissions
          admissions={dashboard.recentAdmissions}
        />

        <RecentContacts
          contacts={dashboard.recentContacts}
        />

      </div>

    </div>
  );
};

export default Dashboard;