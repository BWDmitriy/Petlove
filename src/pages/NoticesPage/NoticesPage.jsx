// pages/NoticesPage/NoticesPage.jsx
// import React, { useState, useEffect } from "react";
// import Title from "../../components/Title";
// import NoticesFilters from "../../components/NoticesFilters";
// import NoticesList from "../../components/NoticesList";
// import Pagination from "../../components/Pagination";
// import styles from "./NoticesPage.module.css";

const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch notices data from backend using filters and page
  }, [filters, page]);

  return (
    // <div className={styles.noticesPage}>
    //   <Title text="Notices" />
    //   <NoticesFilters onFilterChange={setFilters} />
    //   <NoticesList notices={notices} />
    //   <Pagination currentPage={page} onPageChange={setPage} />
    // </div>
    <div></div>
  );
};

export default NoticesPage;
