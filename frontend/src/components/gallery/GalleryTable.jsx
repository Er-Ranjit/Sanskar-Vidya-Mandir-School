import { FaEdit, FaTrash } from "react-icons/fa";

const GalleryTable = ({
  gallery,
  onEdit,
  onDelete,
}) => {
  if (!gallery || gallery.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-600">
          No Gallery Images Found
        </h2>

        <p className="text-gray-400 mt-3">
          Please upload your first gallery image.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-x-auto">

      <table className="min-w-full">

        <thead className="bg-blue-600 text-white">

          <tr>

            <th className="px-5 py-4">Image</th>

            <th className="px-5 py-4">Title</th>

            <th className="px-5 py-4">Category</th>

            <th className="px-5 py-4">Date</th>

            <th className="px-5 py-4">Status</th>

            <th className="px-5 py-4 text-center">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {gallery.map((item) => (

            <tr
              key={item._id}
              className="border-b hover:bg-slate-50 transition"
            >

              {/* Image */}

              <td className="px-5 py-4">

                <img
  src={
    item.image
      ? `${import.meta.env.VITE_SERVER_URL}${item.image}`
      : "/no-image.png"
  }
  alt={item.title}
  className="w-24 h-16 object-cover rounded-lg border"
/>

              </td>

              {/* Title */}

              <td className="px-5 py-4 font-semibold">
                {item.title}
              </td>

              {/* Category */}

              <td className="px-5 py-4">
                {item.category}
              </td>

              {/* Date */}

              <td className="px-5 py-4">
                {new Date(item.eventDate).toLocaleDateString(
                  "en-IN",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }
                )}
              </td>

              {/* Status */}

              <td className="px-5 py-4">

                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    item.status === "Active"
                      ? "bg-green-600"
                      : "bg-red-600"
                  }`}
                >
                  {item.status}
                </span>

              </td>

              {/* Actions */}

              <td className="px-5 py-4">

                <div className="flex justify-center gap-3">

                  <button
                    onClick={() => onEdit(item)}
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this image?"
                        )
                      ) {
                        onDelete(item._id);
                      }
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition"
                    title="Delete"
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

export default GalleryTable;