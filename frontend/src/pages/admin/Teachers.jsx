import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import TeacherForm from "../../components/teacher/TeacherForm";
import TeacherTable from "../../components/teacher/TeacherTable";

import {
  getTeachers,
  addTeacher,
  updateTeacher,
  deleteTeacher,
} from "../../services/teacherService";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // ======================
  // Load Teachers
  // ======================
  const fetchTeachers = async () => {
    try {
      setLoading(true);

      const res = await getTeachers();

      setTeachers(res.data.teachers);
    } catch (error) {
      console.log(error);
      toast.error("Failed to Load Teachers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  // ======================
  // Add / Update Teacher
  // ======================
  const handleSubmit = async (formData) => {
    try {
      if (editingTeacher) {
        await updateTeacher(editingTeacher._id, formData);
        toast.success("Teacher Updated Successfully");
      } else {
        await addTeacher(formData);
        toast.success("Teacher Added Successfully");
      }

      setEditingTeacher(null);
      fetchTeachers();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // ======================
  // Delete Teacher
  // ======================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this teacher?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTeacher(id);

      toast.success("Teacher Deleted Successfully");

      fetchTeachers();
    } catch (error) {
      console.log(error);
      toast.error("Delete Failed");
    }
  };

  // ======================
  // Search
  // ======================
  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <TeacherForm
        onSubmit={handleSubmit}
        editingTeacher={editingTeacher}
        onCancel={() => setEditingTeacher(null)}
      />

      <div className="flex justify-between items-center my-6">

        <h2 className="text-2xl font-bold">
          Teachers List
        </h2>

        <input
          type="text"
          placeholder="Search Teacher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-72"
        />

      </div>

      {loading ? (
        <h2 className="text-center text-xl">
          Loading...
        </h2>
      ) : (
        <TeacherTable
          teachers={filteredTeachers}
          onEdit={setEditingTeacher}
          onDelete={handleDelete}
        />
      )}

    </div>
  );
};

export default Teachers;