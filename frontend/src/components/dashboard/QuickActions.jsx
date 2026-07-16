import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <Link
          to="/admin/students"
          className="bg-blue-600 text-white p-4 rounded-xl text-center hover:bg-blue-700"
        >
          Add Student
        </Link>

        <Link
          to="/admin/teachers"
          className="bg-green-600 text-white p-4 rounded-xl text-center hover:bg-green-700"
        >
          Add Teacher
        </Link>

        <Link
          to="/admin/admissions"
          className="bg-orange-500 text-white p-4 rounded-xl text-center hover:bg-orange-600"
        >
          Admissions
        </Link>

        <Link
          to="/admin/notices"
          className="bg-red-500 text-white p-4 rounded-xl text-center hover:bg-red-600"
        >
          Notices
        </Link>

      </div>

    </div>
  );
};

export default QuickActions;