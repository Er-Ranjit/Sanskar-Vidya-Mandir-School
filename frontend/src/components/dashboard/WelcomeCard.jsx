import { CalendarDays } from "lucide-react";

const WelcomeCard = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl shadow-xl text-white p-8">

      <div className="flex flex-col lg:flex-row justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            {greeting}, Admin 👋
          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            Welcome to Sanskar Vidya Mandir School Management System
          </p>

        </div>

        <div className="flex items-center gap-3 mt-6 lg:mt-0 bg-white/20 px-5 py-3 rounded-xl">

          <CalendarDays size={24} />

          <span className="font-medium">
            {today}
          </span>

        </div>

      </div>

    </div>
  );
};

export default WelcomeCard;