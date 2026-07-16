import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import StudentForm from "../../components/student/StudentForm";
import StudentTable from "../../components/student/StudentTable";

import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../../services/studentService";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // ==========================
  // Load Students
  // ==========================
  const fetchStudents = async () => {
    try {
      setLoading(true);

      const res = await getStudents();

      setStudents(res.data.students);
    } catch (error) {
      toast.error("Failed to Load Students");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // ==========================
  // Add / Update Student
  // ==========================
  const handleSubmit = async (formData) => {
    try {
      if (editingStudent) {
        await updateStudent(editingStudent._id, formData);

        toast.success("Student Updated Successfully");
      } else {
        await addStudent(formData);

        toast.success("Student Added Successfully");
      }

      setEditingStudent(null);

      fetchStudents();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  // ==========================
  // Delete Student
  // ==========================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await deleteStudent(id);

      toast.success("Student Deleted Successfully");

      fetchStudents();
    } catch (error) {
      toast.error("Delete Failed");
      console.log(error);
    }
  };

  // ==========================
  // Search
  // ==========================
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <StudentForm
        onSubmit={handleSubmit}
        editingStudent={editingStudent}
        onCancel={() => setEditingStudent(null)}
      />

      <div className="flex justify-between items-center my-6">

        <h2 className="text-2xl font-bold">
          Students List
        </h2>

        <input
          type="text"
          placeholder="Search Student..."
          className="border p-2 rounded w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {loading ? (
        <h2 className="text-center text-xl">
          Loading...
        </h2>
      ) : (
        <StudentTable
          students={filteredStudents}
          onEdit={setEditingStudent}
          onDelete={handleDelete}
        />
      )}

    </div>
  );
};

export default Students;