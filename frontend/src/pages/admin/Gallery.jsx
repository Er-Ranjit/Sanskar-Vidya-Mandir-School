import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getGallery,
  deleteGallery,
} from "../../services/galleryService";

import GalleryForm from "../../components/gallery/GalleryForm";
import GalleryTable from "../../components/gallery/GalleryTable";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [editingGallery, setEditingGallery] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      setLoading(true);

      const { data } = await getGallery();

      setGallery(data.gallery || []);
    } catch (error) {
      console.log(error);
      toast.error("Failed to Load Gallery");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this image?"
    );

    if (!confirmDelete) return;

    try {
      await deleteGallery(id);

      toast.success("Image Deleted Successfully");

      fetchGallery();
    } catch (error) {
      console.log(error);

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
            Gallery Management
          </h1>

          <p className="text-gray-500 mt-1">
            Upload and Manage School Gallery
          </p>

        </div>

      </div>

      {/* Form */}

      <GalleryForm
        fetchGallery={fetchGallery}
        editingGallery={editingGallery}
        setEditingGallery={setEditingGallery}
      />

      {/* Table */}

      <div className="mt-10">

        {loading ? (

          <div className="bg-white rounded-xl shadow p-8 text-center">

            Loading Gallery...

          </div>

        ) : (

          <GalleryTable
            gallery={gallery}
            onEdit={setEditingGallery}
            onDelete={handleDelete}
          />

        )}

      </div>

    </div>
  );
};

export default Gallery;