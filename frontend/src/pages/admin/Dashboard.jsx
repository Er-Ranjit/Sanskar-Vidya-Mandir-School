import { useEffect, useState } from "react";
import { getDashboard } from "../../services/dashboardService";

const Dashboard = () => {

  const [data, setData] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalAdmissions: 0,
    totalNotices: 0,
  });

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard = async () => {

    try {

      const res = await getDashboard();

      setData(res.data.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-blue-600 text-white p-6 rounded-xl">
          <h3>Total Students</h3>
          <h1 className="text-4xl font-bold">
            {data.totalStudents}
          </h1>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-xl">
          <h3>Total Teachers</h3>
          <h1 className="text-4xl font-bold">
            {data.totalTeachers}
          </h1>
        </div>

        <div className="bg-orange-600 text-white p-6 rounded-xl">
          <h3>Admissions</h3>
          <h1 className="text-4xl font-bold">
            {data.totalAdmissions}
          </h1>
        </div>

        <div className="bg-purple-600 text-white p-6 rounded-xl">
          <h3>Notices</h3>
          <h1 className="text-4xl font-bold">
            {data.totalNotices}
          </h1>
        </div>

      </div>

    </div>

  );

};

export default Dashboard;