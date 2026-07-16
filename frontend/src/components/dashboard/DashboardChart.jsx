import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const DashboardChart = ({ stats }) => {
  const data = [
    {
      name: "School Data",
      Students: stats.students,
      Teachers: stats.teachers,
      Admissions: stats.admissions,
      Events: stats.events,
      Notices: stats.notices,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          School Overview
        </h2>

        <p className="text-gray-500 mt-1">
          Overall statistics of the school
        </p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar dataKey="Students" fill="#2563eb" radius={[8,8,0,0]} />

          <Bar dataKey="Teachers" fill="#16a34a" radius={[8,8,0,0]} />

          <Bar dataKey="Admissions" fill="#9333ea" radius={[8,8,0,0]} />

          <Bar dataKey="Events" fill="#ea580c" radius={[8,8,0,0]} />

          <Bar dataKey="Notices" fill="#dc2626" radius={[8,8,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;