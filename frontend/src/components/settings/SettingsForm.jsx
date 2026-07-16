import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { updateSettings } from "../../services/settingsService";

const SettingsForm = ({ settings, fetchSettings }) => {
  const [formData, setFormData] = useState({
    schoolName: "",
    principalName: "",
    principalDesignation: "",
    principalMessage: "",

    email: "",
    phone: "",
    address: "",
    website: "",

    facebook: "",
    instagram: "",
    youtube: "",

    about: "",
    mission: "",
    vision: "",

    establishedYear: "",
    successRate: "",

    totalStudents: "",
    totalTeachers: "",
  });

  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState("");

  const [principalPhoto, setPrincipalPhoto] = useState(null);
  const [principalPreview, setPrincipalPreview] =
    useState("");

  useEffect(() => {
    if (settings) {
      setFormData({
        schoolName: settings.schoolName || "",
        principalName: settings.principalName || "",
        principalDesignation:
          settings.principalDesignation || "",
        principalMessage:
          settings.principalMessage || "",

        email: settings.email || "",
        phone: settings.phone || "",
        address: settings.address || "",
        website: settings.website || "",

        facebook: settings.facebook || "",
        instagram: settings.instagram || "",
        youtube: settings.youtube || "",

        about: settings.about || "",
        mission: settings.mission || "",
        vision: settings.vision || "",

        establishedYear:
          settings.establishedYear || "",

        successRate: settings.successRate || "",

        totalStudents:
          settings.totalStudents || "",

        totalTeachers:
          settings.totalTeachers || "",
      });

      if (settings.logo) {
        setPreview(
          `${import.meta.env.VITE_SERVER_URL}${settings.logo}`
        );
      }

      if (settings.principalPhoto) {
        setPrincipalPreview(
          `${import.meta.env.VITE_SERVER_URL}${settings.principalPhoto}`
        );
      }
    }
  }, [settings]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogo = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setLogo(file);
    setPreview(URL.createObjectURL(file));
  };

  const handlePrincipalPhoto = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setPrincipalPhoto(file);
    setPrincipalPreview(
      URL.createObjectURL(file)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      if (logo) {
        data.append("logo", logo);
      }

      if (principalPhoto) {
        data.append(
          "principalPhoto",
          principalPhoto
        );
      }

      await updateSettings(data);

      toast.success(
        "Settings Updated Successfully"
      );

      fetchSettings();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something Went Wrong"
      );
    }
  };
    return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        School Settings
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5"
      >

        {/* School Name */}

        <input
          type="text"
          name="schoolName"
          placeholder="School Name"
          value={formData.schoolName}
          onChange={handleChange}
          className="border rounded-lg p-3"
          required
        />

        <input
          type="number"
          name="establishedYear"
          placeholder="Established Year"
          value={formData.establishedYear}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          name="totalStudents"
          placeholder="Total Students"
          value={formData.totalStudents}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          name="totalTeachers"
          placeholder="Total Teachers"
          value={formData.totalTeachers}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="successRate"
          placeholder="Success Rate (%)"
          value={formData.successRate}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        {/* Principal Details */}

        <input
          type="text"
          name="principalName"
          placeholder="Principal Name"
          value={formData.principalName}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="principalDesignation"
          placeholder="Principal Designation"
          value={formData.principalDesignation}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <textarea
          name="principalMessage"
          placeholder="Principal Message"
          value={formData.principalMessage}
          onChange={handleChange}
          rows={5}
          className="border rounded-lg p-3 md:col-span-2"
        />

        {/* Contact Details */}

        <input
          type="email"
          name="email"
          placeholder="School Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="address"
          placeholder="School Address"
          value={formData.address}
          onChange={handleChange}
          className="border rounded-lg p-3 md:col-span-2"
        />

        <input
          type="text"
          name="facebook"
          placeholder="Facebook Link"
          value={formData.facebook}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="instagram"
          placeholder="Instagram Link"
          value={formData.instagram}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="youtube"
          placeholder="YouTube Link"
          value={formData.youtube}
          onChange={handleChange}
          className="border rounded-lg p-3 md:col-span-2"
        />
                {/* About */}

        <textarea
          name="about"
          placeholder="About School"
          value={formData.about}
          onChange={handleChange}
          rows={5}
          className="border rounded-lg p-3 md:col-span-2"
        />

        {/* Mission */}

        <textarea
          name="mission"
          placeholder="Mission"
          value={formData.mission}
          onChange={handleChange}
          rows={5}
          className="border rounded-lg p-3"
        />

        {/* Vision */}

        <textarea
          name="vision"
          placeholder="Vision"
          value={formData.vision}
          onChange={handleChange}
          rows={5}
          className="border rounded-lg p-3"
        />

        {/* School Logo */}

        <div className="md:col-span-2">
          <label className="block font-medium mb-2">
            School Logo
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleLogo}
          />
        </div>

        {preview && (
          <div className="md:col-span-2">
            <img
              src={preview}
              alt="School Logo"
              className="w-40 h-40 object-contain border rounded-lg"
            />
          </div>
        )}

        {/* Principal Photo */}

        <div className="md:col-span-2">
          <label className="block font-medium mb-2">
            Principal Photo
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handlePrincipalPhoto}
          />
        </div>

        {principalPreview && (
          <div className="md:col-span-2">
            <img
              src={principalPreview}
              alt="Principal"
              className="w-40 h-40 object-cover rounded-lg border"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg md:col-span-2"
        >
          Update Settings
        </button>

      </form>

    </div>
  );
};

export default SettingsForm;