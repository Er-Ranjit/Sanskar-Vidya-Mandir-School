import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ContactTable from "./ContactTable";

import {
  getContacts,
  deleteContact,
  updateContact,
} from "../../services/contactService";

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] =
    useState(null);

  // =========================
  // Fetch Contacts
  // =========================
  const fetchContacts = async () => {
    try {
      const { data } = await getContacts();

      setContacts(data.contacts);
    } catch (error) {
      console.log(error);

      toast.error("Failed To Load Contacts");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // =========================
  // View Contact
  // =========================
  const handleView = async (contact) => {
    setSelectedContact(contact);

    if (contact.status === "Unread") {
      try {
        await updateContact(contact._id, {
          status: "Read",
        });

        fetchContacts();
      } catch (error) {
        console.log(error);
      }
    }
  };

  // =========================
  // Delete Contact
  // =========================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      await deleteContact(id);

      toast.success("Message Deleted");

      fetchContacts();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something Went Wrong"
      );
    }
  };

  return (
    <div className="space-y-8">

      <ContactTable
        contacts={contacts}
        onView={handleView}
        onDelete={handleDelete}
      />

      {selectedContact && (
        <div className="bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            Contact Details
          </h2>

          <div className="space-y-3">

            <p>
              <strong>Name :</strong>{" "}
              {selectedContact.name}
            </p>

            <p>
              <strong>Email :</strong>{" "}
              {selectedContact.email}
            </p>

            <p>
              <strong>Phone :</strong>{" "}
              {selectedContact.phone}
            </p>

            <p>
              <strong>Subject :</strong>{" "}
              {selectedContact.subject}
            </p>

            <p>
              <strong>Status :</strong>{" "}
              {selectedContact.status}
            </p>

            <p>
              <strong>Message :</strong>
            </p>

            <div className="bg-slate-100 rounded-lg p-4">
              {selectedContact.message}
            </div>

          </div>

          <button
            onClick={() => setSelectedContact(null)}
            className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
          >
            Close
          </button>

        </div>
      )}

    </div>
  );
};

export default ContactPage;