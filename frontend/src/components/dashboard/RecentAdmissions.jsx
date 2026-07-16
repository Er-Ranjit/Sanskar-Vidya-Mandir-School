const RecentAdmissions = ({ admissions = [] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Recent Admissions
        </h2>
      </div>

      {admissions.length === 0 ? (
        <p className="text-gray-500">
          No Admissions Found
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-3">
                  Student
                </th>

                <th className="text-left py-3">
                  Class
                </th>

                <th className="text-left py-3">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>

              {admissions.map((item) => (

                <tr
                  key={item._id}
                  className="border-b hover:bg-slate-50"
                >

                  <td className="py-3">
                    {item.studentName}
                  </td>

                  <td>
                    {item.className}
                  </td>

                  <td>
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>
        </div>
      )}
    </div>
  );
};

export default RecentAdmissions;