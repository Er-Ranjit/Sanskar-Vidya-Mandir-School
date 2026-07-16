import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import NoticeForm from "../../components/notice/NoticeForm";
import NoticeTable from "../../components/notice/NoticeTable";

import {
  getNotices,
  deleteNotice,
} from "../../services/noticeService";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [editingNotice, setEditingNotice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      setLoading(true);

      const { data } = await getNotices();

      setNotices(data.notices || []);
    } catch (error) {
      console.log(error);
      toast.error("Failed To Load Notices");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this Notice?")) return;

    try {
      await deleteNotice(id);

      toast.success("Notice Deleted Successfully");

      fetchNotices();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Delete Failed"
      );
    }
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Notice Management
          </h1>

          <p className="text-gray-500">
            Add, Update & Delete School Notices
          </p>
        </div>

      </div>

      <NoticeForm
        fetchNotices={fetchNotices}
        editingNotice={editingNotice}
        setEditingNotice={setEditingNotice}
      />

      <div className="mt-8">

        {loading ? (
          <div className="bg-white shadow rounded-xl p-8 text-center">
            Loading...
          </div>
        ) : (
          <NoticeTable
            notices={notices}
            onEdit={setEditingNotice}
            onDelete={handleDelete}
          />
        )}

      </div>

    </div>
  );
};

export default Notice;