import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginAdmin } from "../services/adminService";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const { data } = await loginAdmin(formData);

    localStorage.setItem("token", data.token);
    localStorage.setItem("admin", JSON.stringify(data.admin));

    toast.success(data.message);

    // Dashboard par redirect
    navigate("/admin");

  } catch (error) {
    toast.error(
      error.response?.data?.message || "Login Failed"
    );
  }
};

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >

        <h2 className="text-3xl font-bold text-center mb-6">
          Admin Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-6"
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Login
        </button>

      </form>

    </div>
  );
};

export default Login;