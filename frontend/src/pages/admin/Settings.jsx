import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import SettingsForm from "../../components/settings/SettingsForm";

import { getSettings } from "../../services/settingsService";

const Settings = () => {
  const [settings, setSettings] = useState(null);

  const fetchSettings = async () => {
    try {
      const { data } = await getSettings();

      setSettings(data.settings);
    } catch (error) {
      toast.error("Failed To Load Settings");
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <div className="p-6">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          School Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage School Information
        </p>

      </div>

      {settings && (
        <SettingsForm
          settings={settings}
          fetchSettings={fetchSettings}
        />
      )}

    </div>
  );
};

export default Settings;