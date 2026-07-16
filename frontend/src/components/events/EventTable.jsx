import { Pencil, Trash2 } from "lucide-react";

const EventTable = ({
  events,
  onEdit,
  onDelete,
}) => {

  if (!events || events.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center">
        <h2 className="text-xl font-semibold">
          No Events Found
        </h2>

        <p className="text-gray-500 mt-2">
          Please Add Your First Event
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>

            <th className="p-3 text-left">Image</th>

            <th className="p-3 text-left">Title</th>

            <th className="p-3 text-left">Category</th>

            <th className="p-3 text-left">Date</th>

            <th className="p-3 text-left">Time</th>

            <th className="p-3 text-left">Location</th>

            <th className="p-3 text-left">Organizer</th>

            <th className="p-3 text-left">Status</th>

            <th className="p-3 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {events.map((event) => (

            <tr
              key={event._id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-3">

               <img
  src={`${import.meta.env.VITE_SERVER_URL}${event.image}`}
  alt={event.title}
  className="w-20 h-14 rounded object-cover"
/>

              </td>

              <td className="p-3 font-semibold">
                {event.title}
              </td>

              <td className="p-3">
                {event.category}
              </td>

              <td className="p-3">
                {new Date(
                  event.eventDate
                ).toLocaleDateString()}
              </td>

              <td className="p-3">
                {event.eventTime}
              </td>

              <td className="p-3">
                {event.location}
              </td>

              <td className="p-3">
                {event.organizer}
              </td>

              <td className="p-3">

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold
                  ${
                    event.status === "Upcoming"
                      ? "bg-green-100 text-green-700"
                      : event.status === "Completed"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {event.status}
                </span>

              </td>

              <td className="p-3">

                <div className="flex justify-center gap-3">

                  <button
                    onClick={() => onEdit(event)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Pencil size={20} />
                  </button>

                  <button
                    onClick={() => onDelete(event._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
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

export default EventTable;