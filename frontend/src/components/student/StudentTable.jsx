const StudentTable = ({ students, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Class</th>
            <th className="p-3">Roll</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Action</th>
          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr
              key={student._id}
              className="border-b hover:bg-gray-100"
            >

              <td className="p-3">{student.name}</td>
              <td className="p-3">{student.className}</td>
              <td className="p-3">{student.rollNumber}</td>
              <td className="p-3">{student.phone}</td>

              <td className="p-3 flex gap-2">

                <button
                  onClick={() => onEdit(student)}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(student._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default StudentTable;