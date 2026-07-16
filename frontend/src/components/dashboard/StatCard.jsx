const StatCard = ({ title, value, icon, color }) => {
  return (
    <div
      className={`rounded-3xl shadow-lg ${color} text-white p-6 hover:scale-105 transition duration-300`}
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-lg opacity-90">
            {title}
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {value}
          </h2>

        </div>

        <div className="text-6xl opacity-80">
          {icon}
        </div>

      </div>

    </div>
  );
};

export default StatCard;