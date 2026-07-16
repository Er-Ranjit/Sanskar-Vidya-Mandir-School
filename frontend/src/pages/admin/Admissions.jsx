import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getAdmissions,
  deleteAdmission,
} from "../../services/admissionService";

import AdmissionForm from "../../components/admission/AdmissionForm";
import AdmissionTable from "../../components/admission/AdmissionTable";

const Admissions = () => {
  const [admissions, setAdmissions] = useState([]);
  const [editingAdmission, setEditingAdmission] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const fetchAdmissions = async () => {
    try {
      setLoading(true);

      const { data } = await getAdmissions();

      setAdmissions(data.admissions || []);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load admissions");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this admission?")) return;

    try {
      await deleteAdmission(id);

      toast.success("Admission Deleted Successfully");

      fetchAdmissions();
    } catch (error) {
      console.log(error);
      toast.error("Delete Failed");
    }
  };

  return (
    <div className="p-6 space-y-8">

      <h1 className="text-3xl font-bold">
        Admission Management
      </h1>

      <AdmissionForm
        fetchAdmissions={fetchAdmissions}
        editingAdmission={editingAdmission}
        setEditingAdmission={setEditingAdmission}
      />

      {loading ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          Loading Admissions...
        </div>
      ) : (
        <AdmissionTable
          admissions={admissions}
          onEdit={setEditingAdmission}
          onDelete={handleDelete}
        />
      )}

    </div>
  );
};

export default Admissions;