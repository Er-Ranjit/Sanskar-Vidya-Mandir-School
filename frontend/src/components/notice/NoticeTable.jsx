const NoticeTable = ({
  notices,
  onEdit,
  onDelete,
}) => {
  if (notices.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
        No Notices Found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>

        </thead>

        <tbody>

          {notices.map((notice) => (

            <tr
              key={notice._id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-3 font-medium">
                {notice.title}
              </td>

              <td className="p-3">
                {notice.category}
              </td>

              <td className="p-3">
                {new Date(
                  notice.publishDate
                ).toLocaleDateString()}
              </td>

              <td className="p-3">

                <span
                  className={`px-3 py-1 rounded-full text-sm text-white ${
                    notice.status === "Active"
                      ? "bg-green-600"
                      : "bg-red-500"
                  }`}
                >
                  {notice.status}
                </span>

              </td>

              <td className="p-3 text-center">

                <button
                  onClick={() => onEdit(notice)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded mr-2"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    onDelete(notice._id)
                  }
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
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

export default NoticeTable;