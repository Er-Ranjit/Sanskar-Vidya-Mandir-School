import { useEffect, useState } from "react";

import NoticeHero from "../components/notice/NoticeHero";
import LatestNotices from "../components/notice/LatestNotices";
import ImportantNotices from "../components/notice/ImportantNotices";
import NoticeCategories from "../components/notice/NoticeCategories";
import NoticeArchive from "../components/notice/NoticeArchive";
import DownloadSection from "../components/notice/DownloadSection";
import NoticeCTA from "../components/notice/NoticeCTA";

import { getNotices } from "../services/noticeService";

const Notice = () => {

  const [notices, setNotices] = useState([]);

  const fetchNotices = async () => {
    try {
      const { data } = await getNotices();
      setNotices(data.notices);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <>
      <NoticeHero />

      <LatestNotices notices={notices} />

      <ImportantNotices notices={notices} />

      <NoticeCategories notices={notices} />

      <NoticeArchive notices={notices} />

      <DownloadSection notices={notices} />

      <NoticeCTA />
    </>
  );
};

export default Notice;