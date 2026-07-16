import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getEvents,
  deleteEvent,
} from "../../services/eventService";

import EventForm from "../../components/events/EventForm";
import EventTable from "../../components/events/EventTable";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);

      const { data } = await getEvents();

      setEvents(data.events || []);

    } catch (error) {
      console.log(error);
      toast.error("Failed to Load Events");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this Event?")) return;

    try {

      await deleteEvent(id);

      toast.success("Event Deleted");

      fetchEvents();

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Delete Failed"
      );

    }
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            Event Management
          </h1>

          <p className="text-gray-500">
            Manage School Events
          </p>

        </div>

      </div>

      <EventForm
        fetchEvents={fetchEvents}
        editingEvent={editingEvent}
        setEditingEvent={setEditingEvent}
      />

      <div className="mt-10">

        {loading ? (

          <div className="bg-white rounded-xl shadow p-8 text-center">

            Loading Events...

          </div>

        ) : (

          <EventTable
            events={events}
            onEdit={setEditingEvent}
            onDelete={handleDelete}
          />

        )}

      </div>

    </div>
  );
};

export default Events;