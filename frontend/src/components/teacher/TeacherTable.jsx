const TeacherTable = ({ teachers, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Subject</th>
            <th className="p-3">Qualification</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Salary</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>

        </thead>

        <tbody>

          {teachers.length === 0 ? (

            <tr>
              <td colSpan="7" className="text-center p-6">
                No Teachers Found
              </td>
            </tr>

          ) : (

            teachers.map((teacher) => (

              <tr
                key={teacher._id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-3">{teacher.name}</td>

                <td className="p-3">{teacher.subject}</td>

                <td className="p-3">{teacher.qualification}</td>

                <td className="p-3">{teacher.phone}</td>

                <td className="p-3">₹ {teacher.salary}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      teacher.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {teacher.status}
                  </span>
                </td>

                <td className="p-3 flex gap-2">

                  <button
                    onClick={() => onEdit(teacher)}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(teacher._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
};

export default TeacherTable;