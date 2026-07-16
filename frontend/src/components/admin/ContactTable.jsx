import { FaTrash, FaEye } from "react-icons/fa";

const ContactTable = ({
  contacts,
  onView,
  onDelete,
}) => {
  if (contacts.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-600">
          No Contact Messages Found
        </h2>

        <p className="text-gray-400 mt-2">
          No one has contacted yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-x-auto">

      <table className="min-w-full">

        <thead className="bg-blue-600 text-white">

          <tr>

            <th className="p-4">Name</th>

            <th className="p-4">Email</th>

            <th className="p-4">Phone</th>

            <th className="p-4">Subject</th>

            <th className="p-4">Status</th>

            <th className="p-4">Date</th>

            <th className="p-4">Action</th>

          </tr>

        </thead>

        <tbody>

          {contacts.map((item) => (

            <tr
              key={item._id}
              className="border-b hover:bg-slate-50"
            >

              <td className="p-4 font-semibold">
                {item.name}
              </td>

              <td className="p-4">
                {item.email}
              </td>

              <td className="p-4">
                {item.phone}
              </td>

              <td className="p-4">
                {item.subject}
              </td>

              <td className="p-4">

                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    item.status === "Unread"
                      ? "bg-red-600"
                      : "bg-green-600"
                  }`}
                >
                  {item.status}
                </span>

              </td>

              <td className="p-4">
                {new Date(
                  item.createdAt
                ).toLocaleDateString()}
              </td>

              <td className="p-4">

                <div className="flex gap-2">

                  <button
                    onClick={() => onView(item)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded"
                  >
                    <FaEye />
                  </button>

                  <button
                    onClick={() => onDelete(item._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
                  >
                    <FaTrash />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ContactTable;