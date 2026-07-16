const AdmissionTable = ({
  admissions,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>

            <th className="p-3">Student</th>
            <th className="p-3">Father</th>
            <th className="p-3">Class</th>
            <th className="p-3">Mobile</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>

          </tr>

        </thead>

        <tbody>

          {admissions.map((item) => (

            <tr
              key={item._id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-3">{item.studentName}</td>

              <td className="p-3">{item.fatherName}</td>

              <td className="p-3">{item.className}</td>

              <td className="p-3">{item.mobile}</td>

              <td className="p-3">

                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    item.status === "Approved"
                      ? "bg-green-500"
                      : item.status === "Rejected"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {item.status}
                </span>

              </td>

              <td className="p-3 space-x-2">

                <button
                  onClick={() => onEdit(item)}
                  className="bg-green-600 text-white px-4 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(item._id)}
                  className="bg-red-600 text-white px-4 py-1 rounded"
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

export default AdmissionTable;