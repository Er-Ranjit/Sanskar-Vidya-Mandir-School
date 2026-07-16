import { useEffect, useState } from "react";

import GalleryHero from "../components/gallery/GalleryHero";
import GalleryFilter from "../components/gallery/GalleryFilter";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryStats from "../components/gallery/GalleryStats";
import GalleryVideo from "../components/gallery/GalleryVideo";
import Memories from "../components/gallery/Memories";
import GalleryCTA from "../components/gallery/GalleryCTA";

import { getGallery } from "../services/galleryService";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [filteredGallery, setFilteredGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const { data } = await getGallery();

      setGallery(data.gallery);
      setFilteredGallery(data.gallery);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filterCategory = (category) => {
    if (category === "All") {
      setFilteredGallery(gallery);
      return;
    }

    const result = gallery.filter(
      (item) => item.category === category
    );

    setFilteredGallery(result);
  };

  return (
    <>
      <GalleryHero />

      <GalleryFilter filterCategory={filterCategory} />

      <GalleryGrid
        gallery={filteredGallery}
        loading={loading}
      />

      <GalleryStats gallery={gallery} />

      <GalleryVideo />

      <Memories />

      <GalleryCTA />
    </>
  );
};

export default Gallery;