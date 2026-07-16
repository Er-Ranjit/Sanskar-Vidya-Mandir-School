const RecentContacts = ({ contacts = [] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Recent Contacts
        </h2>

      </div>

      {contacts.length === 0 ? (

        <p className="text-gray-500">
          No Contact Messages
        </p>

      ) : (

        <div className="space-y-4">

          {contacts.map((item) => (

            <div
              key={item._id}
              className="border rounded-xl p-4"
            >

              <h3 className="font-bold">
                {item.name}
              </h3>

              <p className="text-sm text-blue-600">
                {item.email}
              </p>

              <p className="text-gray-600 mt-2">
                {item.subject}
              </p>

              <p className="text-xs text-gray-400 mt-2">
                {new Date(
                  item.createdAt
                ).toLocaleDateString()}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default RecentContacts;